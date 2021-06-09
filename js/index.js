// ITERATION 1

const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  let subTotal = product.querySelector(".subtotal span");

  
  return subTotal = price * quantity;

}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
 const products = document.querySelectorAll(".product");
 products.forEach(product) => {
   updateSubtotal(product);
 }

  // ITERATION 3
  let totalPrice = document.querySelector("#total-value span");
  totalPrice = 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.remove();
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