// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price > span').innerText;
  const quantity = product.querySelector('.quantity > input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal > span').innerText = subtotal;
  return subtotal;
}

function calculateAll() {

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let subtotal = 0;
  [...products].forEach(product => {
    subtotal += updateSubtotal(product);
  });
  // ITERATION 3
  document.querySelector('#total-value > span').innerText = subtotal;
  //... your code goes here
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const product = target.parentElement.parentElement;
  const productParent = product.parentElement;
  productParent.removeChild(product);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // ITERATION 4 remove
  const removeBtns = document.querySelectorAll('.btn-remove');
  [...removeBtns].forEach(btn => btn.addEventListener('click', removeProduct))
});