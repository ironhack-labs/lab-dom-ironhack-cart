// ITERATION 1

function updateSubtotal($product) {
  let productPriceNumber = parseInt(
    $product.querySelector(".price > span").innerHTML
  );

  let productQuantity = $product.querySelector(".quantity > input").value;

  let productSubtotal = productPriceNumber * productQuantity;

  $product.querySelector(".subtotal > span").innerHTML = productSubtotal;
}

function calculateAll() {
  // ITERATION 2

  let everyProductArray = document.querySelectorAll("#cart .product");

  everyProductArray.forEach(elm => updateSubtotal(elm));

  // ITERATION 3

  let subtotalsArray = document.querySelectorAll(".subtotal span");
  let subtotalSum = 0;

  subtotalsArray.forEach(elm => {
    let subtotalsNumber = parseInt(elm.innerHTML);

    subtotalSum += subtotalsNumber;
  });

  document.querySelector("#total-value span").innerHTML = subtotalSum;
}

window.addEventListener("load", () => {
  const $calculateTrigger = document.getElementById("calculate");

  $calculateTrigger.addEventListener("click", calculateAll);
});

// ITERATION 4

let buttonArray = document.querySelectorAll(".btn-remove");

buttonArray.forEach(elm =>
  elm.addEventListener("click", productRemoveListener)
);

function productRemoveListener(event) {
  event.currentTarget.parentNode.parentNode.remove();
}

// ITERATION 5

let buttonCreate = document.querySelector(".create-product button");

buttonCreate.addEventListener("click", createProduct);

function createProduct(event) {
  textAndPriceArray = document.querySelectorAll("tfoot input");

  let newObjectName = textAndPriceArray[0].value;
  let newObjectPrice = textAndPriceArray[1].value;

  let newProductLine = document.querySelector(".product").cloneNode(true); // Dudilla con esto

  newProductLine.querySelector(".name span").innerHTML = newObjectName;
  newProductLine.querySelector(".price span").innerHTML = newObjectPrice;
  newProductLine.querySelector(".btn-remove").onclick = () => newProductLine.querySelector(".btn-remove").parentNode.parentNode.remove();

  document.querySelector("tbody").appendChild(newProductLine); // Dudilla con esto

  calculateAll();
}
