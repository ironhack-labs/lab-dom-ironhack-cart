// ITERATION 1

const { product } = require("puppeteer")


function updateSubtotal(product) {
  const price = document.querySelector('.price span')
  const quantity = document.querySelector('.quantity input')
  let subtotal = document.querySelector('.subtotal span') 
  let calculatedSubtotal = +price.innerText * +quantity.value
  subtotal.innerText = calculatedSubtotal
  return calculatedSubtotal
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

   // ITERATION 2
  const product = document.getElementsByClassName('.product');
  product.forEach((product) => {
    updateSubtotal(product)
  })
    console.log


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