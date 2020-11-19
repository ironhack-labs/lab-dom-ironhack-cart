// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let sum = price.innerHTML * quantity.value;
  let subtotal = product.querySelector('.subtotal span');
  return subtotal.textContent = sum;
};

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
 
  let productsArray = [...document.getElementsByClassName("product")];
  let total = 0;

  productsArray.forEach(product => {
    total += updateSubtotal(product)
  });

  // ITERATION 3
  //... your code goes here
  let finalPrice = document.querySelector('#total-value span');
  finalPrice.textContent = total;
};

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
};

// ITERATION 5

function createProduct() {
  //... your code goes here
};

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here 
});
