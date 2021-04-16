// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').textContent);
  const amount = parseInt(product.querySelector('.quantity input').value);
  const subtotal = price * amount;
  product.querySelector('.subtotal span').textContent = subtotal.toFixed(2);
  return subtotal;
}

function calculateAll() {
  const total = Array.from(document.querySelectorAll('.product'))
    .reduce((total, product) => total + updateSubtotal(product), 0);
  console.log(total);

  // ITERATION 2
  document.querySelector('#total-value span').textContent = total.toFixed(2);

  // ITERATION 3
  //... your code goes here
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

document.addEventListener('DOMContentLoaded', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
