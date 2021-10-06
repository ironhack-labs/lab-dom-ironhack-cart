// ITERATION 1
function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');

  subTotal.textContent = price.textContent * quantity.value;
  return subTotal.textContent;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const productRow = document.querySelectorAll('.product');
  let totalValue = document.querySelector('#total-value span');
  let subTotalArr = [];
  let sum = 0;

  productRow.forEach((product) => {
    updateSubtotal(product);
    subTotalArr.push(updateSubtotal(product));
  });
  subTotalArr.forEach((price) => {
    sum += Number(price);
  });
  totalValue.textContent = sum;
}

// ITERATION 3
//... your code goes here

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
