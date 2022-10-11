// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = price.textContent * quantity.value;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let multipleProducts = document.getElementsByClassName('product');
  let sum = 0;

  for (let i = 0; i < multipleProducts.length; i++) {
    sum += updateSubtotal(multipleProducts[i]);
  }

  let total = document.querySelector('#total-value span');

  total.innerHTML = sum;
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
