// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const productPrice = price.innerHTML;
  const productQuantity = quantity.value;

  const productSubtotal = productPrice * productQuantity;
  
  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = productSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const allProducts = document.querySelectorAll(".product")
  const total = allProducts.forEach(products => updateSubtotal(products));

  // ITERATION 3
  //... your code goes here

  const result = document.querySelector("#total-value span")
  result.textContent = total;
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
