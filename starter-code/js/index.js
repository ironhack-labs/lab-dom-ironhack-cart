var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let products = document.querySelectorAll(".product");
let totalPrice = document.querySelector("h2 span");
let individualPrices = [];

function updateSubtot($product) {
  // Iteration 1.1
  let price = $product.querySelector(".pu span");
  let quantity = $product.querySelector("input[type=number]").value;
  let subtotal = $product.querySelector(".subtot span");
  subtotal.innerText = parseInt(price.innerText) * quantity;
  let number = $product.querySelector(".subtot span").innerText;
  individualPrices.push(parseInt(number));
  return subtotal;
}

function calcAll() {
  // Iteration 1.2
  // Iteration 3
  products.forEach(updateSubtot);
  let totalCart = individualPrices.reduce(function (a, b) {
    return a + b;
  });
  totalPrice.innerText = totalCart;
}

$calc.onclick = calcAll;
