// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = Number(price.innerText) * quantity.value;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = document.querySelector('#total-value span');
  let products = document.querySelectorAll('.product');
  let sum = 0;
  products.forEach((product) => {
    updateSubtotal(product);
    let subtotal = product.querySelector('.subtotal span');
    sum += Number(subtotal.innerText);
  });
  // ITERATION 3
  total.innerText = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  })
});
