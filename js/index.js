// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let priceSpan = product.querySelector('.price span');
  let price = priceSpan.innerHTML;
  let quantityInput = product.querySelector('.quantity input');
  let quantity = quantityInput.value;
  let subtotal = product.querySelector('.subtotal span');
  
  let totalPrice = quantity * price;
  subtotal.innerHTML = totalPrice;
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
