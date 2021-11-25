// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;

  let quantity = product.querySelector('.quantity input').value;

  // console.log(quantity * price);

  let subtotal = document.querySelector('.subtotal span');

  subtotal = `${quantity * price}`;

  console.log(subtotal, 'subtotal');

  let calculate = document.getElementById('calculate');

  // calculate.addEventListener('click', () => {
  subtotal.innerHTML = subtotal;
  // });
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
