var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $tbody = document.getElementById("parentProducts");


function updateSubtot($product) {
  // Iteration 1.1
  const unitPrice = $product.querySelector('.pu span').innerText;
  const quantity = $product.querySelector('input').value;
  const subTotal = parseFloat(unitPrice) * parseFloat(quantity);
  $product.querySelector(".subtot span").innerText = subTotal;
  return subTotal;
}

function calcAll() {
  // Iteration 1.2
  let total = 0;
  const products = document.getElementsByClassName("product");
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    total += updateSubtot(p);
  }
  document.getElementById('total').innerText = total;
}
$calc.onclick = calcAll;