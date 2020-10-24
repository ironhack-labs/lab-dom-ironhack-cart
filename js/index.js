// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceLetNumber = parseFloat(price.innerText);
  const quantityLetNumber = quantity.valueAsNumber;
  const multiPrice = priceLetNumber * quantityLetNumber;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = multiPrice;
  return multiPrice;
  //... your code goes here
}

function calculateAll() {
 
  // ITERATION 2
  //... your code goes here
  var elements = document.getElementById('#cart').getElementsByClassName('.product');

  updateSubtotal(elements)

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
