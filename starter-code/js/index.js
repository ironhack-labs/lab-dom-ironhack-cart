var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $product = document.getElementsByClassName('product')
let product = [...$product]
console.log($product)

function updateSubtot($product) {
  let aux1 = $product.getElementsByTagName("span")[1]
  let aux2 = $product.getElementsByTagName("input")[0]
  let price = parseFloat(aux1.innerHTML)
  let qty = parseFloat(aux2.value)
  $product.getElementsByTagName('span')[2].innerHTML = price * qty
  return(qty*price)
}

function calcAll() {
  let total = 0
  for (i = 0; i < product.length; i++) {
   total += updateSubtot($product[i])
  }
  document.getElementById("total").innerHTML = total
}

$calc.onclick = calcAll;

//= updateSubtot(product[i])