function deleteItem(e) {
  var container = document.getElementsByClassName("container")[0];
  console.log(container);
  console.log(e.path)
  currentParent = e.path[2];
  console.log(currentParent);
  container.removeChild(currentParent);
  return getTotalPrice();
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  var costs = document.getElementsByClassName("unit-price");
  var quantities = document.getElementsByClassName("quantity");
  var totales = document.getElementsByClassName("total");
  var allPrices = [];
  var allQuantities = [];
  var totalPrices = 0.0;
  var price = 0.0;

  for (i = 0; i < costs.length; i++) {
    allPrices.push(parseFloat(costs[i].innerHTML.replace("$", "")));
    allQuantities.push(parseInt(quantities[i].value));
    price = allPrices[i] * allQuantities[i];
    totales[i].innerHTML = "$" + parseFloat(price).toFixed(2);
    totalPrices += price;
  }

  createQuantityInput(totalPrices);
}

function createQuantityInput(totalPrices) {
  var h2Tag = document.getElementsByTagName("h2");
  h2Tag[0].innerHTML = "Total Price: $" + parseFloat(totalPrices).toFixed(2);
}

function createDeleteButton() {
  var div = document.createElement("div");
  var input = document.createElement("button");
  input.classList.add("btn");
  input.classList.add("btn-delete");
  input.innerHTML = "Delete";
  input.onclick = deleteItem;
  div.appendChild(input);

  return div;
}

function createTotalPriceNode() {
  var div = document.createElement("div");
  var span = document.createElement("span");
  span.className = "total";
  span.innerHTML = "$0.00";
  div.appendChild(span);

  return div;
}

function createQuantityNode() {
  var div = document.createElement("div");
  var label = document.createElement("label");
  label.innerHTML = "QTY";
  var input = document.createElement("input");
  input.className = "quantity";
  input.type = "number";
  input.value = 0;
  input.min = 0;

  div.appendChild(label);
  div.appendChild(input);

  return div;
}

function createCostNode(itemUnitPrice) {
  var div = document.createElement("div");
  var span = document.createElement("span");
  span.className = "unit-price";
  span.innerHTML = "$" + parseFloat(itemUnitPrice).toFixed(2);
  div.appendChild(span);

  return div;
}

function createItemNode(dataType, itemData) {
  var div = document.createElement("div");
  div.className = "product-name";
  var span = document.createElement("span");
  span.innerHTML = dataType;
  div.appendChild(span);

  return div;
}

function createNewItemRow(itemName, itemUnitPrice) {
  var wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  wrapper.appendChild(createItemNode(itemName, ""));
  wrapper.appendChild(createCostNode(itemUnitPrice));
  wrapper.appendChild(createQuantityNode());
  wrapper.appendChild(createTotalPriceNode());
  wrapper.appendChild(createDeleteButton());

  return wrapper;
}

function createNewItem() {
  var input = document.getElementsByClassName("container")[0];
  var name = document.getElementById("input-name");
  var price = document.getElementById("input-price");
  var newDiv = createNewItemRow(name.value, price.value);
  var lastChild = document.getElementsByClassName("div-add")[0];
  input.insertBefore(newDiv, lastChild);

  //Clean inputs
  name.value = '';
  price.value = 0;
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
