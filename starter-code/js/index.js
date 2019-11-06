let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let unitPrice = $product.querySelector(".pu span").innerHTML;
  unitPrice = Number(unitPrice);

  let quantity = $product.querySelector(".qty input").value;
  quantity = Number(quantity);

  let subtotal = unitPrice * quantity;

  let subtotEle = $product.querySelector(".subtot span");
  subtotEle.innerHTML = subtotal;

  return subtotal;
}

function calcAll() {
  // Iteration 1.2

  let productsCollection = $cart.getElementsByClassName("product");
  let $product;

  for (let i = 0; i < productsCollection.length; i++) {
    $product = productsCollection[i];
    updateSubtot($product);
  }
}
$calc.onclick = calcAll;