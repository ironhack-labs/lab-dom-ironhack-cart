var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

var $product = (document.querySelector(".product"));

function updateSubtot($product) {
  // Iteration 1.1
 
  const qtyInput = $product.querySelector(".qty label input");
  const qty = qtyInput.value;
  const unitPrice = $product.querySelector(".pu span").innerText;
  const subTotal = qty * unitPrice;

  console.log(qtyInput);

  $product.querySelector(".subtot span").innerText = subTotal;
}

$product.querySelector(".qty label input").onclick = function() {
  updateSubtot(document.querySelector(".product"));
}

//console.log(document.querySelectorAll(".product"));

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;