// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  let newSubtotal = price * quantity;
  subtotal.textContent = newSubtotal;

  return newSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/

  // end of test

  // ITERATION 2
  let total = 0;

  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  })

  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');

  totalPrice.textContent = total;
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
