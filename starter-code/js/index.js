var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $product = document.querySelectorAll(".product")

function updateSubtot() {
  // Iteration 1.1
  let priceUnit = document.querySelector(".pu span").innerText;
  let quantity = document.querySelector(".qty input").value;
  
  let subTotal = priceUnit * quantity;
  
  return subTotal;
}

function calcAll() {
  // Iteration 1.2
  let subTotal = updateSubtot();
  let changeSubtot = document.querySelector(".subtot span");
  changeSubtot.innerText = subTotal;
}
$calc.onclick = calcAll;
 