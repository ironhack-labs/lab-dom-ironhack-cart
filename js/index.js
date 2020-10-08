const product = document.getElementsByClassName
const subtotal = product.querySelector(".subtotal span")

// ITERATION 1

function updateSubtotal(product) {
  //Prueba
  console.log('Calculating subtotal, yey!');
  //Variables 
  const price = parseInt(product.querySelector('.price span').innerHTML);
  const quantity =  parseInt(product.querySelector('.quantity input').value);
  return subtotal.innerHTML = price*quantity;
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
