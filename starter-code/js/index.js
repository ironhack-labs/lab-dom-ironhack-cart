var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  const $subtot = $product.querySelector('.subtot span'); 
  const puAmount = parseInt($product.querySelector('.pu span').innerText);
  const qtyAmount = parseInt($product.querySelector('.qty input').value);
  $subtot.textContent = (puAmount*qtyAmount);
  return puAmount*qtyAmount;
}

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;