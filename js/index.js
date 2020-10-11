// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').textContent);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  const subtotal = product.querySelector('.subtotal span');

  const amount = price * quantity;

  subtotal.textContent = amount;

  return amount;
}

function calculateAll() {

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let total = 0;

  [...products].forEach(product => {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  document.querySelector('#total-value span').textContent = total;
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
