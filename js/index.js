// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = Number(product.querySelector('.price span').innerText)
  const quantity = product.querySelector('.quantity input').value
  const subtotal = price * quantity
  product.querySelector('.subtotal span').innerText = subtotal
  return subtotal;
}

function calculateAll() {

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  // ITERATION 2 & 3

  const products = document.querySelectorAll('.product')
  let subtotal = 0;
  [...products].forEach(product => {
    subtotal += updateSubtotal(product)
  });

  document.querySelector('#total-value span').innerText = subtotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const product = target.parentElement.parentElement
  const productParent = product.parentElement
  productParent.removeChild(product)
}

const removeButton = document.querySelectorAll('.btn-remove');
  [...removeButton].forEach(btn => btn.addEventListener('click', removeProduct))

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
