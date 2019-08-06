function deleteItem(e) {
  var deleteButtons = document.getElementsByClassName("btn-delete");
  let child = e.currentTarget;
  let parent = child.parentElement;
  let grandparent = parent.parentElement;
  let greatGrandparent = grandparent.parentElement;
  console.log(
    "Someone's calling this bastard " +
      child +
      " Who is this bastard's " +
      parent +
      " son"
  );
  grandparent.innerHTML = "";
  grandparent.setAttribute("id", "remove");
  greatGrandparent.removeChild(grandparent);
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  let costs = document.getElementsByClassName("cost");
  let quantities = document.getElementsByClassName("quantity");
  let subtotals = document.getElementsByClassName("subtotal");
  let totalPrice = document.getElementById("total-price");
  let newValue = 0,
    newTotal = 0;

  console.log("User requested for price calculation");
  console.log(subtotals);

  for (let i = 0; i < costs.length; i++) {
    newValue = parseInt(costs[i].dataset.cost) * parseInt(quantities[i].value);
    console.log(newValue);
    subtotals[i].innerText = "$" + newValue + ".00";
    newTotal += newValue;
    totalPrice.innerText = "$" + newTotal + ".00";
  }
}

function createQuantityInput(parent) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "product-quantity");
  newDiv.innerHTML = `<label for="quantity">QTY</label>
  <input type="text" class="quantity" value="0" />`;
  parent.appendChild(newDiv);
}

function createDeleteButton(parent, deleteButtonsArray) {
  let newBtn = document.createElement("div");
  newBtn.setAttribute("class", "product-delete");
  newBtn.innerHTML = `<button class="btn btn-delete">Delete</button>`;
  newBtn.firstElementChild.addEventListener("click", deleteItem);
  parent.appendChild(newBtn);
}

function createNameElement(parent, productName) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "product-name");
  newDiv.innerHTML = `<span class="name">${productName}</span>`;
  parent.appendChild(newDiv);
}
function createPriceElement(parent, productPrice) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "product-cost");
  newDiv.innerHTML = `<span class="cost" data-cost="${productPrice}">$${productPrice}.00</span>`;
  parent.appendChild(newDiv);
}

function createSubtotalElement(parent) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "product-subtotal");
  newDiv.innerHTML = `<span class="subtotal">$0.00</span>`;
  parent.appendChild(newDiv);
}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice, deleteButtonsArray) {
  let referencePoint = document.getElementById("product-creator");
  let newRow = document.createElement("div");
  newRow.setAttribute("class", "product-wrapper");
  console.log(newRow, referencePoint);
  createNameElement(newRow, itemName);
  createPriceElement(newRow, itemUnitPrice);
  createQuantityInput(newRow);
  createSubtotalElement(newRow);
  createDeleteButton(newRow, deleteButtonsArray);
  referencePoint.parentNode.insertBefore(newRow, referencePoint);
}

function createNewItem(deleteButtonsArray) {
  let newItemName = document.getElementById("new-item-name");
  let newItemCost = document.getElementById("new-item-cost");
  console.log(
    "Aguanta estoy creando " +
      newItemName.value +
      " que cuesta $" +
      newItemCost.value +
      ".00"
  );

  createNewItemRow(newItemName.value, newItemCost.value, deleteButtonsArray);
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
