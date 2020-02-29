// ITERATION 1

function updateSubtotal($product) {
  const productPrice = Number($product.querySelector('.price').querySelector('span').innerHTML)
  const productQty = Number($product.querySelector('.quantity').querySelector('input').value)
  const subtotal = $product.querySelector('.subtotal')

  return subtotal.innerHTML = (productPrice * productQty).toFixed(2)

}

function calculateAll() {
  // ITERATION 2
  const productList = document.getElementsByClassName('product')
  const subtotals = []

  for (let product of productList) {
    subtotals.push(Number(updateSubtotal(product)))
  }
  // ITERATION 3
  const totalValue = document.getElementById('total-value').querySelector('span')
  return totalValue.innerHTML = (subtotals.reduce((acc, cur) => acc + cur)).toFixed(2)
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4
const removeButtons = document.getElementsByClassName('action')
const productList = document.querySelector('tbody')

function productRemoveListener(event) {
  const productToRemove = event.currentTarget.parentNode

  productList.removeChild(productToRemove)
  calculateAll()
}

for (let button of removeButtons) {
  button.addEventListener('click', productRemoveListener)
}

// ITERATION 5
const $addTrigger = document.getElementById('create')

function createProduct() {
  const $newProduct = document.querySelector('.product').cloneNode(true)
  const $newProductName = document.getElementById('newProductName')
  const $newProductPrice = document.getElementById('newProductPrice')
  const $newRemoveButton = $newProduct.querySelector('.action')

  // Add the remove event listener
  $newRemoveButton.addEventListener('click', productRemoveListener)

  // Add new values
  $newProduct.querySelector('.name').querySelector('span').innerHTML = $newProductName.value
  $newProduct.querySelector('.price').querySelector('span').innerHTML = Number($newProductPrice.value).toFixed(2)

  productList.appendChild($newProduct)

  // Clear the values
  $newProductName.value = ""
  $newProductPrice.value = 0
}

$addTrigger.addEventListener('click', createProduct)