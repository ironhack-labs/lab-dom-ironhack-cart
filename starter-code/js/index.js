/* jshint esversion: 6 */

var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = Number($product.querySelector('.pu span').textContent);
  let quantity = $product.querySelector('.qty label input').value;
  let subtotal = priceUnit * quantity;
  $product.querySelector('.subtot span').textContent = subtotal;
  return subtotal;
}

function calcAll() {
  // Iteration 1.2
  let $product = document.querySelector('.product');
  updateSubtot($product);
}
$calc.onclick = calcAll;