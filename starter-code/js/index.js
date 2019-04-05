// updatePriceByProduct
function updatePriceByProduct(index) {
  // Declaring Variables
  let totalUnitPrice = document.getElementsByClassName("unit-total");
  let unitPrice = document.getElementsByClassName("unit-price");
  let unitsQuantity = document.getElementsByClassName("unit-quantity");

  // Retrieving data of the unit price, converting it to a number and doing the math.
  return (totalUnitPrice[index].innerHTML = `${(
    Number(unitPrice[index].innerHTML) * unitsQuantity[index].value
  ).toFixed("2")}`);
}

// getTotalPrice

function getTotalPrice() {
  let totalUnitPrice = document.getElementsByClassName("unit-total");
  let total = 0;
  for (let i = 0; i < totalUnitPrice.length; i++) {
    total += Number(totalUnitPrice[i].innerHTML);
  }
  document.getElementById("total-price-message").innerHTML = `${total.toFixed(
    2
  )}`;
  document.querySelector("#total-message > h2").classList.remove("hidden");
}

function deleteItem(e) {
  document.body.removeChild(e.path[2]);
}

// createNewItemRow
function createNewItemRow() {
  let productName = document.querySelector(".input-name");
  let productPrice = document.querySelector(".input-price");
  if (productName.value !== "" && productPrice.value !== "") {
    // Container
    let container = document.createElement("div");
    container.setAttribute("id", "container");
    container.setAttribute(
      "class",
      "row justify-content-center align-items-center text-center py-1"
    );
    // Unit Name
    let unitNameContainer = document.createElement("div");
    unitNameContainer.setAttribute("class", "col-md-2");
    let unitName = document.createElement("span");
    unitName.setAttribute("class", "unit-name");
    unitName.innerText = productName.value;
    unitNameContainer.appendChild(unitName);
    // Unit Price
    let unitPriceContainer = document.createElement("div");
    unitPriceContainer.setAttribute("class", "col-md-1");
    let priceContainer = document.createElement("div");
    let unitPrice = document.createElement("span");
    unitPrice.setAttribute("class", "unit-price");
    unitPrice.innerText = productPrice.value;
    priceContainer.appendChild(unitPrice);
    unitPriceContainer.appendChild(priceContainer);
    // Unit Quanity
    let quantityContainer = document.createElement("div");
    quantityContainer.setAttribute("class", "col-md-3");
    let qtyLabel = document.createElement("label");
    qtyLabel.innerText = "QTY";
    qtyLabel.setAttribute("class", "mr-2");
    quantityContainer.appendChild(qtyLabel);
    let qtyInput = document.createElement("input");
    qtyInput.setAttribute("type", "number");
    qtyInput.setAttribute("min", "0");
    qtyInput.setAttribute("class", "unit-quantity pl-2");
    qtyInput.setAttribute("placeholder", "Quantity");
    quantityContainer.appendChild(qtyInput);
    // Unit Total
    let unitTotalContainer = document.createElement("div");
    unitTotalContainer.setAttribute("class", "col-md-1");
    let unitTotalSpan = document.createElement("span");
    unitTotalSpan.setAttribute("class", "unit-total");
    unitTotalSpan.innerText = "0.00";
    unitTotalContainer.appendChild(unitTotalSpan);
    // Delete Button
    let deletBtnContainer = document.createElement("div");
    deletBtnContainer.setAttribute("class", "col-md-2");
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "btn btn-danger");
    deleteBtn.innerText = "Delete";
    deletBtnContainer.appendChild(deleteBtn);
    container.appendChild(unitNameContainer);
    container.appendChild(unitPriceContainer);
    container.appendChild(quantityContainer);
    container.appendChild(unitTotalContainer);
    container.appendChild(deletBtnContainer);
    document.body.insertBefore(container, document.getElementById("inputs"));
    productName.value = "";
    productPrice.value = "";
  }

  updateListeners();
}

function updateListeners() {
  let deleteButtons = document.getElementsByClassName("btn-danger");
  let unitsQuantity = document.getElementsByClassName("unit-quantity");
  // console.log(deleteButtons);
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", e => deleteItem(e));
  }

  for (let i = 0; i < unitsQuantity.length; i++) {
    unitsQuantity[i].addEventListener("input", () => updatePriceByProduct(i));
  }
}
// Main Function
window.onload = function() {
  let calculatePriceButton = document.getElementById("calc-prices-button");
  let createButton = document.getElementById("create-container");
  calculatePriceButton.addEventListener("click", () => getTotalPrice());
  createButton.addEventListener("click", () => createNewItemRow());
  updateListeners();
};