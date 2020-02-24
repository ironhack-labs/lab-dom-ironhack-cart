var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $productCount = document.getElementsByTagName("tbody")[0].childElementCount;
let $total = 0;

function updateSubtot($product, i) {
  // Iteration 1.1
  return parseInt(document.querySelectorAll('.pu span')[i].innerHTML) * parseInt(document.querySelectorAll("input")[i].value);
}

function calcAll() {
  for (let i = 0; i < $productCount; i++) {
    let $product = document.getElementsByClassName('product')[i].innerHTML;
    let $subtotal = document.querySelectorAll('.subtot span')[i].innerHTML = updateSubtot($product, i);
    $total += $subtotal;
  }
  document.querySelector('h2 span').innerHTML = $total;
}
$calc.onclick = calcAll;