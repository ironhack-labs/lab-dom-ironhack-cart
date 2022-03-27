// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const subtotal = price.innerText * quantity.value

  let subtotalPrice = product.querySelector('.subtotal span')
  subtotalPrice.innerText = subtotal

  return subtotal

}

function calculateAll() {

  // ITERATION 2

  let totalItem = 0

  let productList = document.querySelectorAll('.product')

  productList.forEach(product => {
    let eachProduct = updateSubtotal(product)
    totalItem += eachProduct
  })

  // ITERATION 3

  let totalChartPrice = document.querySelector('#total-value span')
  totalChartPrice.innerText = totalItem

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentNode.parentNode.remove()


}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createRow = document.querySelector('.create-product')
  let newProductName = createRow.querySelector('input').value
  let newProducPrice = createRow.querySelector("input[type='number']").valueAsNumber

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct)
  })

  const createButton = document.getElementById('create')
  createButton.addEventListener('click', createProduct)
});
