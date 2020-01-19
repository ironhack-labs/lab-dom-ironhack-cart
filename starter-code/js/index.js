var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  const unitPrice = $product.querySelector('.pu span').innerText;
  const quantity = $product.querySelector('input').value;
  const subTotal = parseFloat(unitPrice) * parseFloat(quantity);
  $product.querySelector(".subtot span").innerText = subTotal;
  return subTotal;
}

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;