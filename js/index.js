// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price').querySelector('span').innerText;
  const quantity = product.querySelector('.quantity').querySelector('input').value;
  product.querySelector('.subtotal').querySelector('span').innerText = price * quantity;
  //... your code goes here
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
  
  console.log('The target in remove is:', target.parentNode.parentNode);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('DOMContentLoaded', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const deleteBtn = document.querySelector('.btn-remove');
  calculatePricesBtn.addEventListener('click', calculateAll);
  deleteBtn.addEventListener('click', removeProduct);

  //... your code goes here
});
