var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = $product.querySelector(".pu span").innerText;
  let quantityUnit = $product.querySelector(".qty label input").value;
  let newSubTotal = Number(priceUnit) * Number(quantityUnit);

  $product.querySelector(".subtot span").innerText = newSubTotal;
  return newSubTotal;
}

function calcAll() {
  // Iteration 1.2
  updateSubtot(document.querySelector(".product"));
}
$calc.onclick = calcAll;