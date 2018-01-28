function deleteItem(e) {
  const parent = e.target.parentElement.parentElement.parentElement;
  parent.removeChild(e.target.parentElement.parentElement);
}

function getPriceByProduct(itemNode) {
  const productCosts = document.getElementsByClassName("unit-cost");
  const quantityEls = document.getElementsByClassName("quantity-input");
  const totalPriceEls = document.getElementsByClassName("unit-price");

  for (let i = 0; i < productCosts.length; i++) {
    let currentPrice = productCosts[i].innerHTML.slice(1);
    totalPriceEls[i].innerHTML = `Cost: $${(parseFloat(currentPrice) * quantityEls[i].value).toFixed(2)}`;
  }
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  const first = document.getElementById("first");
  const totalDiv = document.getElementById("all-items-cost");
  const totalPriceEls = document.getElementsByClassName("unit-price");
  let totalCost = 0;

  getPriceByProduct();

  for (let i = 0; i < totalPriceEls.length; i++) {
    totalCost += parseFloat(totalPriceEls[i].innerHTML.slice(7));
  }
  totalDiv.innerHTML = `Cart Total: $${totalCost.toFixed(2)}`;
}

function createQuantityInput() {
  const input = document.createElement("input");
  input.setAttribute("name", "name");
  input.setAttribute("type", "number");
  input.setAttribute("class", "quantity-input");
  input.setAttribute("placeholder", "Enter product quantity");
  return input;
}

function createDeleteButton() {
  const deleteDiv = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "btn-delete");
  deleteButton.classList.add("btn");
  deleteButton.innerHTML = "Delete";
  deleteDiv.appendChild(deleteButton);
  return deleteDiv;
}

function createQuantityNode() {
  const qtyDiv = document.createElement("div");
  const label = document.createElement("label");
  const qtyInput = createQuantityInput();
  label.setAttribute("for", "qty");
  label.innerHTML = "Qty ";
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

function createNewItemRow(itemName, itemUnitCost) {
  const parent = document.getElementById("first");
  const createRow = document.getElementById("create-item");

  // create item div and add each node to it
  const itemContainer = document.createElement("div");
  itemContainer.setAttribute("class", "container");

  // name div
  const nameDiv = document.createElement("div");
  const nameSpan = document.createElement("span");
  nameSpan.setAttribute("class", "unit-name");
  nameSpan.innerHTML = itemName;
  nameDiv.appendChild(nameSpan);
  itemContainer.appendChild(nameDiv);

  // unit cost
  const unitCostDiv = document.createElement("div");
  const costSpan = document.createElement("span");
  costSpan.setAttribute("class", "unit-cost");
  costSpan.innerHTML = itemUnitCost;
  unitCostDiv.appendChild(costSpan);
  itemContainer.appendChild(unitCostDiv);

  // qtyNode
  const qytNode = createQuantityNode();
  itemContainer.appendChild(qytNode);

  // total unit cost
  const totalCostDiv = document.createElement("div");
  const unitPriceSpan = document.createElement("span");
  unitPriceSpan.setAttribute("class", "unit-price");
  unitPriceSpan.innerHTML = "$0";
  totalCostDiv.appendChild(unitPriceSpan);
  itemContainer.appendChild(totalCostDiv);

  // deleteBtnDiv
  const deleteBtnDiv = createDeleteButton();
  itemContainer.appendChild(deleteBtnDiv);
  // insert new .container before all-items-cost and after last .container
  parent.insertBefore(itemContainer, createRow);
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

  document.addEventListener("click", function(e) {
    for (let i = 0; i < e.target.classList.length; i++) {
      if (e.target.classList[i] === "btn-delete") {
        deleteItem(e);
      }
    }
  });
  createItemButton.addEventListener("click", function() {
    const itemName = document.getElementById("new-item-name");
    const itemPrice = document.getElementById("new-item-price");
    createNewItemRow(itemName.value, itemPrice.value);
    itemName.value = "";
    itemPrice.value = "";
  });
});
