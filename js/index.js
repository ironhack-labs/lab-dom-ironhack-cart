// ITERATION 1
// console.dir(document);
// console.log(document.URL);
 function updateSubtotal(product) {
   console.log('Calculating subtotal, yey!');

   const price = product.querySelector('.price span').innerHTML; // STEPS 1 & 2
   const quantity = product.querySelector('.quantity input').innerHTML;

   const subTotal = price * quantity; // STEP 3

   const subTotalElement = document.getElementsByClassName('subtotal');
   subTotalElement.innerText = subTotal; // STEP4

   return subTotal;  // STEP 5
  
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
