// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

   const priceElement = product.querySelector('.price span');
   const quantityElement = product.querySelector('.quantity input');
   
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const price = Number(priceElement.innerText);
   const quantity = Number(quantityElement.value);

  // ITERATION 3
  const subtotalValue = price * quantity;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const subtotalElement = product.querySelector('.subtotal span');
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
