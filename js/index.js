// ITERATION 1

function updateSubtotal() {
  console.log('Calculating subtotal, yey!');

  let price = document.querySelectorAll('.price span');
  let subtotal = document.querySelectorAll('.subtotal span');
  let acc = 0;
  [...price].map((eachPrice, i) => {
    let unit = document.querySelectorAll('.amount');
    unit = [...unit][i].value;
    let parcial = Number(eachPrice.innerHTML) * unit;
    [...subtotal][i].innerHTML = parcial;
    acc += parcial;
  });
  return acc;
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = document.querySelector('#total-value span');
  let totalSum = updateSubtotal();
  console.log('soy la suma total', totalSum);
  total.innerHTML = totalSum;
  console.log(total.innerHTML);
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
