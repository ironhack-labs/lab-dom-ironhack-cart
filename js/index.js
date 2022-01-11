// ITERATION 1

// js/index.js

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const priceValue = Number(price.innerHTML);

  const quantity = product.querySelector('.quantity input');
  const quantityValue = Number(quantity.value);

  const subtotal = product.querySelector('.subtotal span');
  const subtotalValue  = priceValue * quantityValue;

  subtotal.innerHTML = Number(subtotalValue);

  return subtotalValue;
}

function calculateAll() {

  // ITERATION 2
  const allProducts = document.getElementsByClassName("product");

  let allSubtotals = 0;

  for (let singleProduct of allProducts) {
    allSubtotals += updateSubtotal(singleProduct);
  }

  // ITERATION 3
  const total = document.querySelector('#total-value span');
  total.innerHTML = allSubtotals;
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
