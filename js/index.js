// ITERATION 1
// Store a standard for future copy
const baseProduct = document.querySelectorAll(".product")[0].cloneNode(true)

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = Number(product.querySelector('.price span').innerHTML)
  const quantity = Number(product.querySelector('.quantity input').value)
  const subTotalHolder = product.querySelector('.subtotal span')

  const subtotalAmount = price*quantity
  subTotalHolder.textContent  = subtotalAmount

  return subtotalAmount
}

function calculateAll() {

  // ITERATION 2
  //... your code goes here
  let totalAmount = 0
  products = document.querySelectorAll(".product")
  products.forEach((product) => totalAmount += updateSubtotal(product))

  // ITERATION 3
  //... your code goes here
  const totalHolder = document.querySelector('#total-value span')
  totalHolder.textContent = totalAmount

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const removedChild = target.parentNode.parentNode
  console.log('The removedChild is:', removedChild);

  const parent = removedChild.parentNode
  console.log('The parent is:', target.parentNode.parentNode);

  parent.removeChild(removedChild)

  calculateAll()
}




// ITERATION 5

function createProduct() {
  //... your code goes here
  // Build new product row
  newProduct = baseProduct.cloneNode(true)
  document.querySelector('#cart tbody').appendChild(newProduct)

  const sourceProduct = document.querySelector('tr.create-product')
  const newName = sourceProduct.querySelectorAll("input")[0].value
  const newPrice = Number(sourceProduct.querySelectorAll("input")[1].value)

  // Set new values
  newProduct.querySelector('.name span').textContent = newName
  newProduct.querySelector('.price span').textContent = newPrice
  newProduct.querySelector('.quantity input').value = 0
  newProduct.querySelector('.subtotal span').textContent = 0

  // Add listener
  const removeBtn = newProduct.querySelector('button.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  // Reset value
  sourceProduct.querySelectorAll("input")[0].value = ""
  sourceProduct.querySelectorAll("input")[1].value = 0

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll('button.btn-remove');
  removeBtns.forEach(button => button.addEventListener('click', removeProduct));

  const createBtn = document.querySelector('button#create');
  createBtn.addEventListener('click', () => createProduct());

});
