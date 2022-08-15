// ITERATION 1

const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')

  window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  });
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  const price = document.querySelector(".price span")
  let quantity = document.querySelector(".quantity input")
  console.log (price.innerHTML)
  console.log(quantity.value)

  let subtotal = price.innerHTML*quantity.value
  console.log(subtotal)


  
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
