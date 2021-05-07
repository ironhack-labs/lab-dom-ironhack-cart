// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

let price = product.querySelector('.price span');
let quantity = product.querySelector('.quantity input');
let subtotal = product.querySelector('.subtotal span');
subtotal.innerHTML = price.innerHTML * quantity.value;
return Number(subtotal.innerHTML);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  const allTheProducts = document.querySelectorAll('.product');
  let sum = 0;
  for(i = 0; i < allTheProducts.length; i++){
    sum += updateSubtotal(allTheProducts[i]);
  }

  // ITERATION 3
  const total = document.querySelector('#total-value span');
  return (total.innerHTML = sum);
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
