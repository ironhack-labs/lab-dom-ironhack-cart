/* jshint esversion: 6 */

var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = Number($product.querySelector('.pu span').textContent);
  let quantity = $product.querySelector('.qty label input').value;  // input type is number
  let subtotal = Math.round(100 * priceUnit * quantity) / 100;
  $product.querySelector('.subtot span').textContent = subtotal;
  return subtotal;
}

function calcAll() {
  // Iteration 1.2
  let $products = document.querySelectorAll('.product');
  let total = 0;
  $products.forEach($product => {
    total += updateSubtot($product);
  });
  document.querySelector('h2 span').textContent = total;
}
$calc.onclick = calcAll;