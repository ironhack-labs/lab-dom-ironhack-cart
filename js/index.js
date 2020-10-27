// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subtotal = Number(price) * Number(quantity);

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;

  return subtotal;
  //... your code goes her
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const cartItems = document.getElementsByClassName('product');
  let totalResult = 0;
  
  for (cartItem of cartItems) {
    totalResult += updateSubtotal(cartItem);
  }
  
  //... your code goes here

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalResult;
  //... your code goes here
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
