
const ironhackCart = document.querySelector('#cart')

// ITERATION 1
function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const priceValue = Number(price.innerHTML)
  const quantityValue = Number(quantity.value)

  const productSubtotal = priceValue * quantityValue

  subtotal.innerText = productSubtotal.toFixed(2)

  return productSubtotal
}

function calculateAll() {

  // ITERATION 2&3
  const allProducts = document.querySelectorAll('.product')
  const total = document.querySelector('#total-value span')

  let allProductsPrice = 0

  for (product of allProducts){
    allProductsPrice += updateSubtotal(product)
  }

  total.innerText = allProductsPrice.toFixed(2)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove()

  calculateAll()
}

// ITERATION 5

function createProduct() {
  const tableBody = document.querySelector('table tbody')
  const newProd = document.querySelector('#templates .product').cloneNode(true)

  const newName = document.querySelector('.create-product input[type=text]')
  const newNameValue = newName.value
  const newPrice = document.querySelector('.create-product input[type=number]')
  const newPriceValue = Number(newPrice.value)

  if (newNameValue && newPriceValue && newPriceValue > 0) {
    newProd.querySelector('.name span').textContent = newNameValue
    newProd.querySelector('.price span').textContent = newPriceValue.toFixed(2)
    newProd.querySelector('.btn-remove').addEventListener('click', removeProduct)

    tableBody.appendChild(newProd)

    newName.value = ""
    newPrice.value = 0
  } else {
    window.alert('Remember the product name should exist and price must be higher than 0!')
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const deleteProductBtn = document.querySelectorAll('.btn-remove')
  for (btn of deleteProductBtn){
    btn.addEventListener('click', removeProduct)
  }

  const createProductBtn = document.querySelector('#create')
  createProductBtn.addEventListener('click', createProduct)
});
