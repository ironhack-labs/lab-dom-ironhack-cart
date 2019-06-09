function updateUnitPrice() {
  let cost = document.querySelectorAll(".cost");
  let qty = document.querySelectorAll(".qty-in");
  let totalPrice = document.querySelectorAll(".total");
  for (let i = 0; i < cost.length; i++) {
    totalPrice[i].innerHTML = cost[i].innerHTML * qty[i].value;
  }
}

function getFinalPrice() {
  let totalPrice = document.querySelectorAll(".total");
  let price = 0;
  for (let i = 0; i < totalPrice.length; i++) {
    price += +totalPrice[i].innerHTML;
  }
  let finalPrice = document.querySelector(".finalPrice");
  finalPrice.innerHTML = price;
}

function deleteItem() {
  let buum = event.currentTarget.parentNode.parentNode.remove();
}

function createQuantityInput() {
  let quantityContainer = createItemNode("div", "");
  quantityContainer.setAttribute("class", "quantity-container col");

  let quantLabel = createItemNode("label", "QTY");
  quantLabel.setAttribute("for", "qty-in");
  quantLabel.setAttribute("class", "col quantity");

  let quantInput = createItemNode("input", "");
  quantInput.setAttribute("type", "number");
  quantInput.setAttribute("class", "col qty-in");
  quantInput.setAttribute("min", "0");
  quantInput.setAttribute("class", "col qty-in");
  quantInput.setAttribute("placeholder", "Quantity");
  quantInput.setAttribute("onblur", "updateUnitPrice()");

  quantityContainer.appendChild(quantLabel);
  quantityContainer.appendChild(quantInput);

  return quantityContainer;
}

function createDeleteButton() {
  let btnContainer = createItemNode("div", "");
  btnContainer.setAttribute("class", "col");

  let deleteBtn = createItemNode("button", "Delete");
  deleteBtn.setAttribute("class", "btn btn-delete");
  deleteBtn.setAttribute("onclick", "deleteItem()");

  btnContainer.appendChild(deleteBtn);

  return btnContainer;
}

function createTotal() {
  let quantityNode = createItemNode("div", "");
  quantityNode.setAttribute("class", "col");

  let quantSpan = createItemNode("span", "0");
  quantSpan.setAttribute("class", "total");

  let quantCoin = createItemNode("span", " €");

  quantityNode.appendChild(quantSpan);
  quantityNode.appendChild(quantCoin);

  return quantityNode;
}

function createItemNode(dataType, itemData) {
  let elem = document.createElement(dataType);
  elem.innerHTML = itemData;

  return elem;
}

function createNewItemRow(itemName, itemUnitPrice) {
  let deleteButtons = document.querySelectorAll(".btn-delete");
  let parentContainer = document.querySelector(".products");
  let rowElement = createItemNode("div", "");
  rowElement.setAttribute("class", "product");

  let quantity = createQuantityInput();
  let quantNode = createTotal();
  let btnDelete = createDeleteButton();

  rowElement.appendChild(itemName);
  rowElement.appendChild(itemUnitPrice);
  rowElement.appendChild(quantity);
  rowElement.appendChild(quantNode);
  rowElement.appendChild(btnDelete);

  parentContainer.insertBefore(rowElement, parentContainer.lastChild);

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

function createNewItem() {
  let prodName = document.querySelector(".newName");
  let prodPrice = document.querySelector(".newPrice");

  let itemName = createItemNode("div", "");
  itemName.setAttribute("class", "col");

  let nameSpan = createItemNode("span", prodName.value);
  nameSpan.setAttribute("class", "name");

  let itemPrice = createItemNode("div", "");
  itemPrice.setAttribute("class", "col");

  let priceSpan = createItemNode("span", prodPrice.value);
  priceSpan.setAttribute("class", "cost");

  let coin = createItemNode("span", " €");

  itemName.appendChild(nameSpan);

  itemPrice.appendChild(priceSpan);
  itemPrice.appendChild(coin);

  createNewItemRow(itemName, itemPrice);
}

setInterval(randomRgb, 800);

function randomColor(num) {
  return Math.floor(Math.random() * num);
}
function randomRgb() {
  let color =
    "rgb(" +
    randomColor(255) +
    "," +
    randomColor(255) +
    "," +
    randomColor(255) +
    ")";
  document.querySelector("#head").style.color = color;
}
