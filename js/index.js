// ITERATION 1
function updateSubtotal(product) {
  //... your code goes here
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceContent = parseFloat(price.innerText);
  const quantityContent = quantity.value;
  const subtotalvalue = priceContent * quantityContent;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subtotalvalue;
  return subtotalvalue;
}
function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  let totalValue = 0;
  for (let product of products) {
    totalValue += updateSubtotal(product);
  }
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = totalValue;
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