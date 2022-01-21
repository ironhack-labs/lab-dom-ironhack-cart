// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subTotal = product.querySelector('.subtotal span');
  let subTotalPrice = price * quantity
  subTotal.innerHTML = subTotalPrice;
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  const allProducts = document.querySelectorAll('.product');

  let totalSum = 0;


  allProducts.forEach((element) => {
      totalSum += updateSubtotal(element);
  });

  let myArray = [1,2,3];
  let totalSum2 = 0;

  let PageTotalSum = document.querySelector('#total-value span');
  PageTotalSum.innerHTML = totalSum;

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
});
