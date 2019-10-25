var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $

function updateSubtot($product) {
  // Iteration 1.1
  let qty = document.querySelector('.qty input').getAttribute("value");
  let pu = document.querySelector('.pu > span').innerText;
  let subTotPrice = qty * pu ;
  let quantity = "test";
  //update subtotal
  return subTotPrice
}

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;




updateSubtot(product)