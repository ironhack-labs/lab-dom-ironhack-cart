// ITERATION 1

// const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;
    console.log('price', price, 'quantity', quantity);
    let subTotal = price * quantity;
    product.querySelector('.subtotal span').innerText = subTotal;
    console.log(subTotal)
    return subTotal;    
  //... your code goes here
}

function calculateAll() {
  // console.log('calculate all was initiated');
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  console.log(singleProduct);
  // for (let i = 0; i < singleProduct.length; i++) {
    // updateSubtotal(singleProduct[i]);
  }
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2
  //... your code goes here
// innerHTML
const productList = document.querySelector('.product');
console.log(productList)


  // ITERATION 3
  //... your code goes here
let totalPrice = 0;
for (let product of productList) {
  totalPrice += updateSubtotal (product);
}
document.querySelector('#total-value span').innerText = '${totalPrice}'

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
