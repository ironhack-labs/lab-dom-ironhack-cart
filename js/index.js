// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')

  subtotal.innerHTML = price * quantity
  return Number(subtotal.innerHTML)
}

function calculateAll() {
  // ITERATION 2
  let sum = 0

  document.querySelectorAll('.product').forEach(function (product) {

  sum += updateSubtotal(product)
  })
  // ITERATION 3

  let total = document.querySelector('#total-value span')

  total.innerHTML = sum

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
