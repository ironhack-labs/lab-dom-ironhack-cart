// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const newPrice = price.innerText;
  const newQuantity = quantity.value;
  let calculate = newPrice * newQuantity;

  let subTotal = product.querySelector('.subtotal span');

  subTotal.innerHTML = calculate;
  return calculate;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  let totalValue = 0;
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    totalValue += updateSubtotal(products[i]);
  }

  let totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = totalValue;

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
