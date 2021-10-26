// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = document.querySelector ('.price span').innerText;
  const quantity = document.querySelector ('.quantity input').value;
  const calculateSubtotal = price * quantity;
  const subtotal = document.querySelector('.subtotal span').innerText = calculateSubtotal
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  

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
