var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $total = document.querySelector("body > h2 > span");



function updateSubtot($product) {
  // Iteration 1.1

  const price = Number($product.querySelector(".pu span").innerHTML);
  const quantity = Number($product.querySelector(".qty input").value);
  const subTotal = $product.querySelector(".subtot span")

  subTotal.innerHTML = quantity * price;
  return subTotal.innerHTML;
}

function calcAll() {
  // Iteration 1.2

  let total = 0;
  
  const productList = cart.querySelectorAll(".product");

  productList.forEach(product => {
    total += updateSubtot(product);
    $total.innerHTML = total;   
  });

}
$calc.onclick = calcAll;

// Iteration 4



