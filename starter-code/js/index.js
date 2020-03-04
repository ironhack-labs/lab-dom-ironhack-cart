// ITERATION 1

function updateSubtotal($product) {
  const quantity = parseInt(document.querySelector('.product input').value);
  const unitPrice = parseInt(document.querySelector('tr.product td.price span').innerHTML);
  const $subtotalSelector = document.querySelector('.subtotal');
  console.log($subtotalSelector);
  const subtotal = quantity * unitPrice;
  $subtotalSelector.innerHTML = `$<span>${subtotal}</span>`;

  console.log('quantity', quantity);
  console.log('unit price', unitPrice);
  console.log('subtotal', subtotal);
}

function calculateAll() {

  // For development testing purposes, paste the following code inside of `calculateAll`:
  const $singleProduct = document.querySelector('.product');
  updateSubtotal($singleProduct);
  // End of test

  // ITERATION 2
  //...
  // ITERATION 3
  //...
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4

function productRemoveListener(event) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}