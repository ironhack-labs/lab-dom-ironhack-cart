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
  individualPrices.push(parseInt(subtotal.innerText));
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

//Iteration 4

let deleteButton = document.getElementsByClassName('btn-delete');
let product = document.querySelector(".product");

function deleteProduct (e){
  e.currentTarget = product.parentNode.removeChild(product);
}

for(let i=0; i < deleteButton.length; i++){
deleteButton[i].onclick = deleteProduct;
}