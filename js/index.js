// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;

  const subTotal = product.querySelector('.subtotal span');

  subTotal.textContent = price * quantity;
  console.log(subTotal);

  return Number(subTotal.textContent);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const products = document.querySelectorAll('.product');
  let sum = 0;

  products.forEach((element) => {
    let total = updateSubtotal(element);
    sum += total;
  });
  console.log(sum);

  // ITERATION 3

  const totalResult = document.querySelector('#total-value span');
  totalResult.textContent = sum;

  return totalResult;
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
