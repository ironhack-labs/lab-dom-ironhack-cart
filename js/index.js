window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const getPrice = price.innerText;
  const getQuantity = quantity.value;

  const subtotal = getPrice * getQuantity;
  const getSubtotal = product.querySelector('.subtotal span');
  getSubtotal.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  const totalValue = [];
  const product = document.getElementsByClassName('.product');
  for (let i = 0; i < product.length; i++) {
    totalValue += updateSubtotal(product[i]);
  }

  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = totalValue;

  return totalValue;
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
