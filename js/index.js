// ITERATION 1

function updateSubtotal(product) {
  const price = +product.querySelector('.price span').innerText;
  const quantity = +product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = price * quantity;
  return subtotal.innerText;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const row1 = document.querySelector('.product');
  updateSubtotal(row1);
  const row2 = document.querySelector('.product2');
  updateSubtotal(row2);
  // ITERATION 3
  //... your code goes here total-value
  let total = document.querySelector("[id='total-value'] span");
  console.log(total);
  total.innerText = +updateSubtotal(row1) + +updateSubtotal(row2);
  console.log(total);
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
  const removeProductsBtn1 = document.querySelector('.product');
  removeProductsBtn1.addEventListener('click', removeProduct);

  const removeProductsBtn2 = document.querySelector('.product2');
  removeProductsBtn2.addEventListener('click', removeProduct);
});
