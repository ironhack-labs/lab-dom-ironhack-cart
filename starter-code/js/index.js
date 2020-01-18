var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
let priceUnitary = document.getElementsByClassName('pu')[0].children[0].innerText;
let quantity = document.getElementsByClassName('qty')[0].children[0].children[0].getAttribute('value');
let subTotalModfyer = document.getElementsByClassName('subtot')[0].children[0];
let subTot = priceUnitary * quantity;
subTotalModfyer.textContent = subTot;
return subTot;
}
function calcAll() {
  // Iteration 1.2
  updateSubtot();
}
$calc.onclick = calcAll;