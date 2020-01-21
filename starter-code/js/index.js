var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');


function updateSubtot($product) {
  let price = document.querySelector('.pu > span').innerHTML;
  let quantity = document.querySelector('.qty > label > input').value;
  let subtot = document.querySelector('.subtot > span');

  let subtotal = price * quantity;
  subtot.textContent = subtotal;

  return subtotal;
}


function calcAll() {



  updateSubtot();
}
$calc.onclick = calcAll;