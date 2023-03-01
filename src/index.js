// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalDisplay = product.querySelector('.subtotal span');
  const subtotal = price.innerHTML * quantity.value;
  
  subtotalDisplay.innerHTML = subtotal;
  return subtotal;
  }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  let totalSum = 0; 
  products.forEach(element => {
   totalSum += updateSubtotal(element);
  });
  const totalDisplay = document.querySelector('#total-value span');
  totalDisplay.innerHTML= totalSum;
 
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  console.log(target.parentNode.parentNode.parentNode);
  const table = target.parentNode.parentNode.parentNode;
  const product = target.parentNode.parentNode;
  table.removeChild(product);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn.btn-remove');
  removeButtons.forEach(element => {
    element.addEventListener('click', removeProduct)   
  });

});
