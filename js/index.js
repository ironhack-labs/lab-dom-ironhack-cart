// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = price.innerHTML;
  const quantityValue = quantity.innerHTML;
  const subtotalValue = priceValue * quantityValue;
  const finalSubtotal = document.getElementsByClassName('subtotal');

  return (finalSubtotal.innerHTML = subtotalValue.innerHTML);

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test
  // ITERATION 2
  const product = document.getElementsByClassName('product');

  updateSubtotal(product);

  // ITERATION 3
  
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
