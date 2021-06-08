// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subTotal = product.querySelector('.subtotal span')
  let sub = price * quantity;
    subTotal.innerHTML = +sub.toFixed(2)
  return subTotal
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

   // ITERATION 2
  const products = document.querySelectorAll('.product')
  products.forEach((product) => updateSubtotal(product))

  // ITERATION 3
  //... your code goes here
  const allSubTotals = document.querySelectorAll('.product .subtotal span')
  let total = document.querySelector('#total-value span')
  let sum = 0
  allSubTotals.forEach((oneTotal) => sum += +oneTotal.innerHTML)
  total.innerText = sum.toFixed(2)
}


// ITERATION 4
function initRemoveButtons() { //made into a function to call again later
  let allRemoveButtons = document.querySelectorAll('.action button')
allRemoveButtons.forEach((button) => button.addEventListener ('click', removeProduct))
}

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove()
}
// ITERATION 5

const createButton = document.querySelector('#create')
createButton.addEventListener('click', createProduct)


function createProduct() {
  const target = event.currentTarget;

  //create variables for inputted values
  const newProduct = document.querySelector('tfoot input[type=text]').value
  const newPrice = document.querySelector('tfoot input[type=number]').value
  
  //duplicate product row as a document Fragment
  let range = document.createRange()
range.selectNode(document.querySelector('.product'))
productFragment = range.cloneContents()

//target the first name and price of the document fragement and update with given values
const productSpan = productFragment.querySelectorAll('td span ')
productSpan.forEach((span,index,nodeList) => {
    nodeList[0].innerText = newProduct
    nodeList[1].innerText = (+newPrice).toFixed(2)
  } )
  // add initial quantity of 1
  newQuant = productFragment.querySelector('input')
  newQuant.value = 1
  //calculate subtotal for fragment
  updateSubtotal(productFragment)
//append to the bottom of table body
  tbodyNode = document.querySelector('tbody')
  tbodyNode.appendChild(productFragment)
  
  //add remove  functionality to new roww
  initRemoveButtons()
  //calculate total
  calculateAll()
  //clear input fields
  const inputs = document.querySelectorAll('tfoot input')
  inputs.forEach((input) => input.value = '')
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  initRemoveButtons()
});