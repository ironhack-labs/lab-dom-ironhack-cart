var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  let price =  $product.querySelector(".pu span").innerHTML
  console.log(price)
  let qty = $product.getElementsByTagName("input")[0].value
  console.log(qty)
  let subTot = $product.querySelector(".subtot span").innerHTML

  subTot = qty.value * price

  return $product.querySelector('.subtot span').innerHTML = subTot
}


function calcAll() {
  let subtot1 = updateSubtot(document.querySelector('.product')[0])
  let subtot2 = updateSubtot(document.querySelector('.product')[1])
  let total = 0
  total = subtot1 + subtot2
  console.log(total)
}
$calc.onclick = calcAll;

