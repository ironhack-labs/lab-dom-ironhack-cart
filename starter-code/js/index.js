// ITERATION 1

function updateSubtotal($product) {
  const productPrice = Number($product.querySelector('.price').querySelector('span').innerHTML)
  const productQty = Number($product.querySelector('.quantity').querySelector('input').value)
  const subtotal = $product.querySelector('.subtotal')

  return subtotal.innerHTML = productPrice * productQty

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