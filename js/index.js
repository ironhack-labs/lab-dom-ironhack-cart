// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = document.querySelector('.price span');
  const quantity = document.querySelector('.quantity input')
  const subtotal = document.querySelector('.subtotal span') 
  const calculations = quantity.value * price.innerText;
  subtotal.innerText = (`${calculations}`)
}



function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  const arrayProducts = [...allProducts]

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}
const allProducts = document.getElementsByClassName('product');
const arrayProducts = [...allProducts]

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
