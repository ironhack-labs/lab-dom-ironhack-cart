var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let value = $product.querySelectorAll(".qty input")[0].value;
  let price = $product.getElementsByTagName("span")[1].innerHTML;
  debugger 
  let subTot = value * price;
  
}

function calcAll() {
  // Iteration 1.2
  let firstProduct = document.querySelectorAll(".product")[0];
  updateSubtot(firstProduct);
}
$calc.onclick = calcAll;