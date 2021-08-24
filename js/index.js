// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity > input').valueAsNumber;
  let subtotal = price * quantity;
  let elementSubtotal = document.querySelector('.subtotal span');
  elementSubtotal.innerHTML = subtotal;
  return subtotal;
}

// let price = product.querySelector('.price span').textContent;
// let quanity = product.querySelector('.quantity > input').valueAsNumber; // let quanity = product.querySelector('.quantity > input').valueAsNumber;
// let subtotal = price * quanity; // parseInt(unitPrice.innerHTML) * parseInt(quantity.value);

// let elementSubtotal = document.querySelector('.subtotal span');
// elementSubtotal.innerHTML = subtotal;

// return subtotal;

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
