var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1 

let value = $product.querySelectorAll(".qty input")[0].value;
let price = $product.querySelectorAll(".pu span")[0].innerHTML;
let subTot = value * price;
$product.querySelectorAll(".subtot span")[0].innerHTML = subTot;
return subTot;

}

function calcAll() {
  // Iteration 1.2
  let products = document.querySelectorAll(".product");
  let total = 0;
  for (let i = 0; i < products.length; i++){
    total += updateSubtot(products[i]);
  }
$total.innerHTML = totals
}
$calc.onclick = calcAll;

