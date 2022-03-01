// ITERATION 1

// const { LifecycleWatcher } = require("puppeteer");

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  console.log(price, quantity);

  const finalPrice = +price.textContent * quantity.value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = finalPrice;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  let allProducts = cart.querySelectorAll('tr .product');
  totalPrice = updateSubtotal(allProducts);

// const singleProduct = document.querySelector('.product');
//   updateSubtotal(singleProduct);

  // ITERATION 3



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
