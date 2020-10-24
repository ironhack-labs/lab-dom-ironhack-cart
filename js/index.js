// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('input')
  const subtotalResult = price.innerHTML * quantity.value
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalResult
  return subtotalResult

  //... your code goes here
}

function calculateAll() {


  // ITERATION 2
  const products = document.querySelectorAll('.product');
  products.forEach(function (product) {
    updateSubtotal(product);
  })

  // ITERATION 3
  let totalValue = 0
  products.forEach(function (product) {
    totalValue += updateSubtotal(product);
  })
  let total = document.querySelector('#total-value span')
  total.innerHTML = `${totalValue}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget

  //... your code goes here


  const product = document.querySelector('.product')
  const productNode = target.parentNode
  const tableNode = productNode.parentNode
  tableNode.removeChild(productNode)
  calculateAll()
  console.log(target)
  // console.log(product)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.action')
  removeBtn.forEach(btn => {
    btn.onclick = evt => {
      removeProduct(evt)
    }
  })

  //... your code goes here
});
