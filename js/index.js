// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let unitPrice = document.querySelectorAll('.price span');

  let quantity = document.querySelectorAll('.quantity input');

  let subtotal = parseInt(unitPrice[0].innerHTML) * parseInt(quantity[0].value);

  let elementSubtotal = document.querySelectorAll('.subtotal span');

  elementSubtotal[0].innerHTML = subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  for( let i=0; i< )

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
