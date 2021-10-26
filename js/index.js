// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  let subTotal = 0;

  let unitPrice = product.querySelector('.price > span').innerText;
  let quantity = product.querySelector('.quantity > input').value;

  subTotal += unitPrice * quantity;

  product.querySelector('.subtotal > span').innerText = subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2

  let products = document.querySelectorAll('tr.product').forEach((product) => {
    console.log(product);
    updateSubtotal(product);
    console.log(typeof product);
  });

  // ITERATION 3
  let total = 0;
  document.querySelectorAll('tr.product').forEach((product) => {
    total += parseInt(product.querySelector('.subtotal > span').innerText);
  });
  document.querySelector('#total-value > span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
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
