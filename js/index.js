// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const priceValue = price.innerHTML
  const quantityValue = quantity.value
  console.log(priceValue)
  console.log(quantityValue)
  const operationSubtotal = priceValue * quantityValue
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = operationSubtotal
  return operationSubtotal
}

function calculateAll() {
  const products = document.getElementsByClassName('product')
  const productsArray = [...products]
  productsArray.forEach(function(product){
    updateSubtotal(product)
  })

  const total = document.querySelector('#total-value span')
  console.log(total)
  const subtotals = document.querySelectorAll('.subtotal span')
  allSubtotals = [...subtotals]
  subtotalsSum= 0;
  allSubtotals.forEach(subtotals => {
    subtotalsSum += Number(subtotals.innerHTML)
  })
  total.innerHTML = subtotalsSum
}

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
