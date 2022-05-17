// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = +product.querySelector('.price span').textContent;
  const quantity = +product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotalPrice;
  return subtotalPrice;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  let totalPrice = 0;
  // console.log(products);
  products.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').textContent = totalPrice;
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
  const removeButtons = document.querySelectorAll('.btn-remove');
  for (let button of removeButtons) {
    button.addEventListener('click', removeProduct);
  }
  //... your code goes here
});
