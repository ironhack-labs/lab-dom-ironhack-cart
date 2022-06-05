// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalEl = product.querySelector('.subtotal span');

  let subtotal = price * quantity;
  subtotalEl.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');
  const allProducts = document.getElementsByClassName('product');

  let total = 0;
  Array.from(allProducts).forEach(
    (product) => (total += updateSubtotal(product))
  );

  totalPrice.innerHTML = total;
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
