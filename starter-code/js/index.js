// Use at least 3 onclick events

// Use at least one getElementById

// Use at least one getElementsByTagName

// Use at least one getElementsByClassName

function deleteItem(e) {
  const parent = e.currentTarget.parentElement.parentElement.parentElement;
  parent.removeChild(e.currentTarget.parentElement.parentElement);
}

function getPriceByProduct(itemNode) {
  const productCosts = document.getElementsByClassName("unit-cost");
  const quantityEls = document.getElementsByClassName("quantity-input");
  const totalPriceEls = document.getElementsByClassName("unit-price");

  for (let i = 0; i < productCosts.length; i++) {
    let currentPrice = productCosts[i].innerHTML.slice(1);
    totalPriceEls[i].innerHTML = `Cost: $${(parseFloat(currentPrice) * quantityEls[i].value).toFixed(2)}`;
    quantityEls[i].value = "";
  }
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  const first = document.getElementById("first");
  const totalDiv = document.getElementById("all-items-cost");
  const totalPriceEls = document.getElementsByClassName("unit-price");
  let totalCost = 0;

  getPriceByProduct(first);

  for (let i = 0; i < totalPriceEls.length; i++) {
    totalCost += parseFloat(totalPriceEls[i].innerHTML.slice(7));
  }
  totalDiv.innerHTML = `Cart Total: $${totalCost.toFixed(2)}`;
}

function createQuantityInput() {
  const input = document.createElement("input");
  input.setAttribute("name", "name");
  input.setAttribute("placeholder", "Enter product quantity");
  return input;
}

function createDeleteButton() {
  const deleteButton = document.createElement("button");
  button.setAttribute("class", "btn-delete");
  return deleteButton;
}

function createQuantityNode() {
  const qtyDiv = document.createElement("div");
  const label = document.createElement("label");
  const qtyInput = createQuantityInput();
  label.setAttribute("for", "qty");
  qtyDiv.appendChild(label);
  qtyDiv.appendChild(qtyInput);
  return qtyDiv;
}

function createItemNode(dataType, itemData) {
  // create each node within the item row???
  const itemNode = document.createElement("div");
  const itemSpan = document.createElement("span");
  itemSpan.innerHTML = itemData;
  itemNode.appendChild(itemSpan);
  return itemNode;
}

function createNewItemRow(itemName, itemUnitPrice) {
  // create item div and add each node to it
  const itemContainer = document.createElement("div");
  itemContainer.setAttribute("class", "container");

  // name div
  const nameDiv = document.createElement("div");
  const nameSpan = document.createElement("span");
  nameSpan.innerHTML = itemName;
  nameDiv.appendChild(nameSpan);

  // unit cost
  const itemUnitPrice = itemUnitPrice;
  const itemInput = createQuantityNode();
  // const totalCostDiv =
}

function createNewItem() {
  const parent = document.getElementById("first");

  const newItemName = document.getElementById("new-item-name").value;
  const newItemPrice = parseFloat(document.getElementById("new-item-price").value);

  const newItemDiv = document.createElement("div");
  newItemDiv.setAttribute("class", "container");
}

document.addEventListener("DOMContentLoaded", function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
});
