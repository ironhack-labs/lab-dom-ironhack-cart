// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = price.innerHTML * quantity.value;
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName("product");
  let total = Array.from(allProducts).map((item) => updateSubtotal(item));
  console.log(total);

  // ITERATION 3
  //... your code goes here
  let displayTotal = document.querySelector("#total-value span");
  const totalReducer = (sum, item) => sum + item;
  displayTotal.innerText = total.reduce((totalReducer));
  console.log(displayTotal.innerText);
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
