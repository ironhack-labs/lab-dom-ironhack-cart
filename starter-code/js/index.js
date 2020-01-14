var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
var $delete = document.querySelector(".btn.btn-delete");

function updateSubtot($product) {
  // Iteration 1.1
  let basePrice = $product.querySelector(".pu > span").innerHTML;
  let qty = $product.querySelector(".qty > label > input").value;
  let subTotal = basePrice * qty;
  $product.querySelector(".subtot > span").innerHTML = subTotal;
  return subTotal;
}

function calcAll() {
  // Iteration 1.2
  let total = 0;
  document.querySelectorAll(".product").forEach(function($product) {
    total += updateSubtot($product);
  });
  document.querySelector("h2 > span").innerHTML = total;
}

$calc.onclick = calcAll;

function deleteOnClick(element) {
  element.querySelector(".rm > button").onclick = function() {
    $cart.removeChild(element);
  };
}
document.querySelectorAll("#cart > tbody > tr").forEach(ele => {
  deleteOnClick(ele);
});
