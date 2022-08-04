let product = document.querySelectorAll('.product');

let removeBtn = document.querySelectorAll('.btn-remove');

const table = document.querySelector('tbody');

const createBtn = document.querySelector('#create');

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

    let accumulator = 0;

  const price = document.querySelectorAll('.price span');
  const subtotal = document.querySelectorAll('.subtotal span');
  [...price].map(($price, i) => {
    let unit = document.querySelectorAll("input[type='number']");

    unit = [...unit][i].value;
    let parcial = Number($price.innerHTML) * unit;

    [...subtotal][i].innerHTML = parcial;

    accumulator += parcial;
  });
  return accumulator;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalSum = updateSubtotal();

  // ITERATION 3
  total.innerHTML = totalSum;
}
window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

[...removeBtn].map((elem) =>
  elem.addEventListener(
    'click',
    function (e) {
      productRemoveListener(e);
    },
    false
  )
);

createBtn.addEventListener('click', function () {
  createProduct();
});

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}
  function productRemoveListener(event) {
    let currentProduct = event.target.parentNode.parentNode;
    table.removeChild(currentProduct);
  
    calculateAll();
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
