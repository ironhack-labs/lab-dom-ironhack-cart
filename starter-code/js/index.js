var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $product = document.querySelector(".product")

function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = $product.querySelector(".pu span").innerText;
  let quantity = $product.querySelector(".qty input").value;
  
  let subTotal = priceUnit * quantity;
  
  return subTotal;
}

function calcAll() {
  // Iteration 1.2
  let subTotal = updateSubtot($product);
  let changeSubtot = document.querySelector(".subtot span");
  changeSubtot.innerText = subTotal;
}
$calc.onclick = calcAll;
 