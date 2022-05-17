// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  console.log(price.textContent);
  const quantity = product.querySelector('.quantity input'); 
  console.log(quantity.value);
  const calc = price.textContent * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  return subtotal.textContent = calc;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalProducts =0;
  let productsList = document.querySelectorAll(".product"); 
  console.log(productsList);
  for (let i = 0; i < productsList.length; ++i) {
    totalProducts += updateSubtotal(productsList[i]);
    console.log(typeof updateSubtotal(productsList[i]));
  }
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').textContent = totalProducts;
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
