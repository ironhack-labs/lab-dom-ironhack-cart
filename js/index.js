// ITERATION 1
function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const priceValue = Number(price.innerHTML)
  const quantityValue = Number(quantity.value)

  const productSubtotal = priceValue * quantityValue

  subtotal.innerText = productSubtotal

  return productSubtotal
}

function calculateAll() {

  // ITERATION 2&3
  const allProducts = document.querySelectorAll('.product')
  const total = document.querySelector('#total-value span')

  let allProductsPrice = 0

  for (product of allProducts){
    const productsTotal = updateSubtotal(product)
    allProductsPrice += productsTotal
  }

  total.innerText = allProductsPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove()

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const deleteProductoBtn = document.querySelectorAll('.btn-remove')
  for (btn of deleteProductoBtn){
    btn.addEventListener('click', removeProduct)
  }

});
