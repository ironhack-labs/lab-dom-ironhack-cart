
var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  var $cart1 = $product.querySelector(".pu span").innerHTML;
  var $quantity = $product.querySelector(".qty input").value;
  var subTotal = $cart1*$quantity
  $product.querySelector(".subtot span").innerHTML=subTotal
  return subTotal   
}


//document.getElementById('calc').addEventListener('click',calcAll)

function calcAll() {
  let $allProducts = document.querySelectorAll(".product");
  let total = 0;
  for(let i=0; i<$allProducts.length; i++){
  total = total + updateSubtot($allProducts[i])
  console.log($allProducts[i])
  }
  document.querySelector("h2 span").innerHTML=total
}


$calc.onclick = calcAll;

