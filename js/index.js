// ITERATION 1

function updateSubtotal(product) {
  //alert('Calculating subtotal, yey!');
  let price = document.querySelector('.price span').innerText;
  let quantity = document.querySelector('.quantity input').value;

  let priceSubtotal = `${price * quantity}`;
  
  let subtotal = document.querySelector('.subtotal span');
  subtotal.innerText = `${priceSubtotal}`;
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
