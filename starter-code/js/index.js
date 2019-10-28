var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
let $product = document.getElementsByClassName("product");
let product = [...$product];
console.log(product);

function updateSubtot(product) {
  // Iteration 1.1
  let price = product.getElementsByTagName("span")[1].innerHTML;
  let quantity = product.getElementsByTagName("input")[0].value;

  return price * quantity;
}

function calcAll() {
  // Iteration 1.2
  for (let i = 0; i < product.length; i++) {
    product[i].getElementsByTagName("span")[2].innerHTML = updateSubtot(
      product[i]
    );
    updateSubtot(product[i]);
  }
}
$calc.onclick = calcAll;
