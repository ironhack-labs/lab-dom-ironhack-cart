// ITERATION 1

function updateSubtotal(product) {
//get price and quantity from DOM
const price = product.querySelector('.price span');
const priceNumber = price.innerHTML;
let quantity = document.querySelector('.quantity input');
//set quantity to the value attribute
quantity = quantity.value;
//calculate sub total price and store it in a variable
let subTotalPrice = quantity * priceNumber;
//show the subtotal: get the object from DOM
let subTotal = document.querySelector('.subtotal span');
//set the new value to subTotal
subTotal.innerHTML = subTotalPrice;
return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

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
