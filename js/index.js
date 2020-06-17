// ITERATION 1

const button = document.querySelector('#calculate')
  button.onclick = () => {
    console.log('button clicked!')
    updateSubtotal()
}

const updateSubtotal = () => {
  
let total = 0
let rows = document.querySelectorAll('.product')
rows.forEach(row => {
  let price = row.querySelector('.price span').innerHTML
  let quantity = row.querySelector('input').value
  let subtotal = Number(price) * Number(quantity)
  total += subtotal
  row.querySelector('.subtotal span').innerText = subtotal
})
document.querySelector('#total-value span').innerText = total
}



const makeDeleteButtonsWork = () => {
  let rows = document.querySelectorAll('.product')
  rows.forEach(row => {
  row.querySelector('.btn-remove').onclick = function(){
    console.log('remove')
    row.remove()
  }
})
}

makeDeleteButtonsWork()

const addNewProduct = () => {
let newProduct = document.querySelector('tfoot input').value
let newProductPrice = document.querySelectorAll('tfoot input')[1].value
console.log(newProduct,newProductPrice)
let newRow =  `<tr class="product"> <td class="name"><span>${newProduct}</span></td><td class="price"><span>${newProductPrice}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td></tr>`
document.querySelector('tbody').innerHTML += newRow
makeDeleteButtonsWork()
}

const createButton = document.querySelector('#create')
createButton.onclick = () => {
console.log('create button clicked!')
addNewProduct()
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
}

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
