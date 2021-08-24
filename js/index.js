// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  const price = priceElement.innerText;
  const quantity = quantityElement.value;

  const subtotalElement = product.querySelector('.subtotal span');
  const subtotal = price * quantity;

  subtotalElement.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  const multipleProducts = document.querySelectorAll('.product');
  let total = 0;
  for (let product of multipleProducts) {
    total += updateSubtotal(product);
  }
    // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total;
}
  // ITERATION 3
  //... your code goes here

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
