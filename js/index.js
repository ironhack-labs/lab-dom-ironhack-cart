// ITERATION 1
//
//const { product } = require('puppeteer');

//const { product } = require('puppeteer');

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const priceVal = Number(price.innerHTML);

  const quantity = product.querySelector('.quantity input').value;
  let subTotalPrice = priceVal * quantity;
  product.querySelector('.subtotal span').innerHTML = subTotalPrice;
  return subTotalPrice;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let totalPrice = 0;
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(function (product) {
    totalPrice += updateSubtotal(product);
  });
  console.log(typeof allProducts);
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target[document.getElementById('tbody')];
  console.log(typeof parent);
  parent.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(function (button) {
    button.addEventListener('click', removeProduct);
  });
});
