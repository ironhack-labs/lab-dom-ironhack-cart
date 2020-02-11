var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

$calc.addEventListener('click', () => updateSubtot());

function updateSubtot($product) {
  const $unitPrice = document.querySelector('.pu > span').innerText;
  const $quantity = document.querySelector('.qty > label > input').value;
  let $subTotal = document.querySelector('.subtot > span');

  $subTotal.innerText = $unitPrice * $quantity;
}

function calcAll() {
  for ($subtotal of updateSubtot) {
  }
}

$calc.onclick = calcAll;
