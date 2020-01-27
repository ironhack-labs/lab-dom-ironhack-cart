var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  //$subTot = document.querySelector(".subtot span").innerText
   
  const $priceUnit = parseFloat($product.querySelector(".pu span").innerText);
  const $quantity = parseInt($product.querySelector(".qty input").value)

  let $total = $priceUnit * $quantity;

const $subTot =  $product.querySelector(".subtot span")

$subTot.innerText = $total.toFixed(2)

return $total.toFixed(2)

  }




function calcAll() {
  // Iteration 1.2
const $$allProducts = document.querySelectorAll("tr.product");
for(let $product of $$allProducts){
  updateSubtot($product)

  let total = 0
  for(let $product of $$allProducts){
    let subTotal = updateSubtot($product);
    total += subTotal;
  }
  const $totalSpan = document.querySelector("h2 span");
  total.toFixed(2) = $totalSpan.innerText
}

}
$calc.onclick = calcAll;