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
