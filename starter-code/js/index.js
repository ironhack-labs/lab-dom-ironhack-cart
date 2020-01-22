var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
let productEl = document.querySelectorAll(".product");
let deleteBttn = document.querySelectorAll(".btn-delete");

// Iteration 1
function updateSubtot($product) {
  let subTotal = 0;
  let uPrice = $product.querySelector(".pu span").textContent;
  let quantity = $product.querySelector(".qty label input").value;

  if (!!quantity) {
    subTotal = uPrice;
  } else {
    subTotal = parseFloat(uPrice) * parseFloat(quantity);
  }

  productEl.querySelector(".subtot span").textContent = subTotal;
  return subTotal;
}

// Iteration 4
function prodDelete(event) {
  let row = event.currentTarget.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function calcAll() {
  // Iteration 1.2
  let finalTot = 0;

  productEl.forEach(el => {
    finalTot += updateSubtot(el);
  });

  document.getElementsByClassName("tot").textContent = finalTot;
}

function callDeletBttn() {
  deleteBttn.forEach(function(button) {
    button.addEventListener("click", prodDelete);
  });
}
callDeletBttn();

$calc.onclick = calcAll;
