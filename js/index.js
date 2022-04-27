// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity span');
let priceValue = price.innerHTML;
let quantityValue = quantity.innerHTML;
let subtotalPrice = priceValue*quantityValue;

document.getElementsByClassName('subtotal').getElementByTagName('span').innerHTML= subtotalPrice;
return subtotalPrice;
}

 // ITERATION 2
  //... your code goes here
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
 let product = document.getElementsByClassName('product');
 updateSubtotal(product);
 let totalPrice;
 totalPrice += subtotalPrice;
document.getElementById('total-value').getElementByTagName('span').innerHTML= totalPrice}

 

  // ITERATION 3
  //... your code goes here


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
