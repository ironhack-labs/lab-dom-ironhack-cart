// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = 0;
  let quantity = 0;
  price = product.querySelector('.price span').innerText;
  quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
}

// ITERATION 2 + ITERATION 3

// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
// const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);

function calculateAll() {
  let totalSum = 0;
  total = document.querySelector('#total-value span');
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
  //updateSubtotal(products[i]);
  totalSum += updateSubtotal(products[i]);
  total.innerText = totalSum;
  }
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
