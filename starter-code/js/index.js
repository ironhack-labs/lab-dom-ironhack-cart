// ITERATION 1

function updateSubtotal($product) {
  const productPrice = $product.querySelector('.price > span').innerHTML;
  let productQuantity = $product.querySelector('.quantity > input').value;

  //we get and set subtotal directly from its DOM element

  $product.querySelector('.subtotal > span').innerHTML =
    productPrice * productQuantity;
}

function calculateAll() {
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
