// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity
  product.querySelector('.subtotal span').innerHTML = subtotalPrice;
}

function calculateAll() {

  // ITERATION 2

  const productsSubtotal = document.querySelectorAll('.product');
  for (let i = 0; i < productsSubtotal.length; i++) {
    updateSubtotal(productsSubtotal[i]);
  }

  // ITERATION 3

  let totalPrice = document.querySelector('#total-value > span')
  totalPrice.innerText = productsSubtotal;
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
