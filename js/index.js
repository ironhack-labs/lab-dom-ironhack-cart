// ITERATION 1

// const { product } = require('puppeteer');

function updateSubtotal(product) {
  //... your code goes here
  // console.log('Calculating subtotal, yey!');
  const priceInput = product.querySelector('.price span');
  const quantityInput = product.querySelector('.quantity input');
  const quantity = quantityInput.value;
  const price = priceInput.textContent;
  const subtotal = product.querySelector('.subtotal span');

  const calc = price * quantity;

  subtotal.textContent = `${calc}`;
  return calc;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productArray = document.querySelectorAll('.product');
  const totalInput = document.querySelector('h2#total-value span');
  let total = 0;

  productArray.forEach((element) => (total += updateSubtotal(element)));

  totalInput.textContent = total;

  // return total;

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

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
