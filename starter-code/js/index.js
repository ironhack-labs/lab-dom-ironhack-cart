var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');




function updateSubtot($product) {
  // Iteration 1.1
  let price = $product.querySelector(".pu span").innerText;
  let quantity = $product.querySelector("input[type=number]").value;
  let subtotal = parseFloat(price) * quantity;
  $product.querySelector(".subtot span").innerText = subtotal;
  return subtotal;
}

function calcAll() {
  // Iteration 1.2
  // Iteration 3
  let totalCart = 0;
  let products = document.querySelectorAll(".product");
  products.forEach($prod => {
    updateSubtot($prod);
    totalCart += parseFloat($prod.querySelector(".subtot span").innerText);
  });
  document.querySelector("h2 span").innerHTML = totalCart;
}

$calc.onclick = calcAll;

//Iteration 4


function deleteProduct(e) {
  let row = e.target.parentNode.parentNode;
  if (e.target.matches(".btn-delete")) {
    row.parentNode.removeChild(row);
  }
}

$cart.addEventListener("click", deleteProduct);

let createButton = document.querySelector("#create");
createButton.onclick = createProductRow;

let originalRow = document.querySelector(".product");


function createProductRow() {
  let newRow = originalRow.cloneNode(true);
  let newValue = document.querySelector(".new input[type=text]").value;
  let newPrice = document.querySelector(".new input[type=number]").value;

  $cart.appendChild(newRow);
  newRow.querySelector(".name span").innerText = newValue;
  newRow.querySelector(".pu span").innerText = newPrice;
  newRow.querySelector(".subtot span").innerText = 0;
  newRow.querySelector(".qty input[type=number]").value = 0;

}