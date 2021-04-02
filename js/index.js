function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
  return subtotal;
}
function calculateAll() {
  let cart = document.querySelector('#cart');
  let products = cart.querySelectorAll('.product');
  let total = 0;
  products.forEach((cartProduct) => {
    total += updateSubtotal(cartProduct);
  });
  document.querySelector('#total-value span').innerText = total.toFixed(2);
}
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let product = target.closest('.product');
  product.remove();
}
function createProduct() {
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('#cart .product .action .btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
