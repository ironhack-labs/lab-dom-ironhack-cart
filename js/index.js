// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = (product.querySelector('.price span')).innerHTML;
  const quantity = (product.querySelector('.quantity input')).value;
  const subtotalPrice = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {

  // ITERATION 2

  const products = document.getElementsByClassName('product');
  const arrOfProducts = [...products];
  const totalElement = document.querySelector('#total-value span');
  let total = 0;
  arrOfProducts.forEach((product) => {
    total += updateSubtotal(product);
  });
  totalElement.innerHTML = total;
}

// ITERATION 3



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