
document.addEventListener('DOMContentLoaded', () => {
  console.log('Cart index js is loaded');
});

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal,yey!')
  //... your code goes here
  const priceSelect = product.querySelector('.price span');
  const quantitySelect = product.querySelector('.quantity input');
  const subTotalSelect = product.querySelector('.subtotal span');

  const price = Number (priceSelect.innerText);
  const quantity = Number (quantitySelect.value);
  const subAmount = price * quantity;
  subTotalSelect.innerText = subAmount;
  return subAmount;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const allProducts = document.getElementsByClassName('product');
  
  for ( let arr of allProducts) {
  arr += updateSubtotal(arr);
}
 // ITERATION 3
  //... your code goes here
  let allPrices = document.getElementById('subtotal span');
  total += allPrices;
  document.querySelector('#total-value span').innerText = allPrices;
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
  
  const buttonsToRemove = document.getElementsByClassName('btn btn-remove');
  //... your code goes here
});
