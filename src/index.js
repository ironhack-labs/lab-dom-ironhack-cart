/// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quanty = product.querySelector('.quantity input');
  const priceValue = price.innerHTML;
  const quantyValue = quanty.value;
  const subtotal = (priceValue * quantyValue);
  const subtotalValue = product.querySelector('.subtotal span');
  subtotalValue.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll('.product');

  // ITERATION 3
  let total = 0;
  products.forEach(function(product) {
    total = total + updateSubtotal(product);
  });
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5
function createProduct() {
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});