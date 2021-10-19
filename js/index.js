// ITERATION 1

function updateSubtotal(product) {
  // Step 1
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  // Step 2
  const priceValue = Number(price.innerText);
  const quantityValue = quantity.value;
  // Step 3
  const subtotal = priceValue * quantityValue;
  // Step 4
  const subtotalValue = product.querySelector('.subtotal span');
  // Step 5
  subtotalValue.innerText = subtotal;
  return subtotal;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
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
