var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
var quantityBefore = document.querySelector(".qty");

function updateSubtot($product) {
  // Iteration 1.1

  const price = $product.querySelector('td.pu span').innerHTML;
  const quantity = $product.querySelector('td.qty input').value;
  const subTotal = price * quantity;

  $product.querySelector('td.subtot span').innerHTML = subTotal;

  return subTotal;
}


function calcAll() {
  // Iteration 1.2
  const allProducts = document.querySelectorAll("#cart tbody tr");
  let total = 0;

  allProducts.forEach(function (product) {
    const subTotal = updateSubtot(product);
    total = total + subTotal;
  });

  document.querySelector('h2 span').innerHTML = total;
}

$calc.onclick = calcAll;
