// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = product.querySelector('.subtotal span');
  subtotalPrice.innerText = price * quantity;

  return parseInt(subtotalPrice.innerText);
}

function calculateAll() {
  // ITERATION 2 
  const products = document.getElementsByClassName('product');
  let totalPrice = 0;
  for(let i = 0; i < products.length; i++){
    totalPrice += updateSubtotal(products[i]);
  }
  // ITERATION 3
  const total = document.querySelector('#total-value span');
  total.textContent = totalPrice;
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
