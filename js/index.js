function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const subtotalPrice = price.textContent * quantity.value;
  subtotal.textContent = subtotalPrice;
  
  return subtotalPrice;
}

function calculateAll() {

  const multipleProducts = document.querySelectorAll('.product');
  const total = document.querySelector('#total-value span');

  let subtotals = [];
  multipleProducts.forEach(product => subtotals.push(updateSubtotal(product)));
  let totalPrice = subtotals.reduce((a,c) => a+c);
  total.textContent = totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove');
  console.log('rmv btn',removeBtn);
  removeBtn.forEach((btn) => btn.addEventListener('click', removeProduct));
});
