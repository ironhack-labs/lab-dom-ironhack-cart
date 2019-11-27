var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

console.log($cart.querySelector(".subtot span"));
function updateSubtot($product) {
  // Iteration 1.1
  let price = $cart.querySelector(".pu span").innerText;
  let quantity = $cart.querySelector(".qty input").value;
  let subTotalTag = $cart.querySelector(".subtot span");

  let subTotal = Number(price) * Number(quantity);

  subTotalTag.innerText = subTotal;
}

function calcAll() {
  // Iteration 1.2
  document.querySelector(".btn.btn-success").onclick = function() {
    updateSubtot();
  };
}
$calc.onclick = calcAll;
