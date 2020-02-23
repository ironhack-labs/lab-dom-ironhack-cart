var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

function updateSubtot($product) {

  let value = $product.querySelectorAll(".qty input")[0].value;
  let price = $product.querySelectorAll(".pu span")[0].innerHTML;
  let updatedSubTotal = value * price;

  $product.querySelectorAll(".subtot span")[0].innerHTML = updatedSubTotal;
  return updatedSubTotal;
}


function calcAll() {
  let firstProduct = document.querySelectorAll(".product")[0];
  let products = document.querySelectorAll(".product");
  updateSubtot(firstProduct);
  var sumTotal = 0;
  for (let i = 0; i < products.length; i++) {
    sumTotal += updateSubtot(products[i]);
  }
  document.querySelectorAll("#sum span")[0].innerHTML = sumTotal;
}
$calc.onclick = calcAll;

var $deleteButtons = document.querySelectorAll(".btn.btn-delete");
for (let i = 0; i < $deleteButtons.length; i++) {
  $deleteButtons[i].addEventListener("click", function (event) {
    let itemToDelete = $deleteButtons[i].closest(".product")
    document.querySelector("tbody").removeChild(itemToDelete);
  })
}
