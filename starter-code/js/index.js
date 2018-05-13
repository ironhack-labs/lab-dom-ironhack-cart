function deleteItem(e) {
  element = e.currentTarget.parentElement.parentElement;
  element.remove();
}

function getPriceByProduct(itemNode) {
  var priceItem = itemNode.querySelectorAll('span');
  var price = Number(priceItem[1].innerText);

  var inputItem = itemNode.querySelectorAll('div input');
  var qty = inputItem[0].value;
  return qty > 0 ? price * qty : price;
}

function updatePriceByProduct(productPrice, index) {
  var itemRow = document.querySelectorAll(".row-content");
  var itemRowSpan = itemRow[index].querySelectorAll("div span");
  itemRowSpan[2].innerText = productPrice;
}

function getTotalPrice() {
  var itemRow = document.querySelectorAll(".row-content");
  var productPrice = 0;
  var totalPrice = 0;
  for (var i = 0; i < itemRow.length; i++) {
    productPrice = getPriceByProduct(itemRow[i]);
    totalPrice = totalPrice + productPrice;
    updatePriceByProduct(productPrice, i);
  }

  var itemTotalPrice = document.getElementById("totalPrice");
  itemTotalPrice.innerText = totalPrice;
}

function createQuantityInput() {
  var input = document.createElement("INPUT");
  input.setAttribute("type", "number");
  input.setAttribute("value", "1");
  return input;
}

function createDeleteButton() {
  var divButton = document.createElement("DIV");
  var buttonDelete = document.createElement("BUTTON");
  buttonDelete.innerText="Delete";
  buttonDelete.classList.add("btn");
  buttonDelete.classList.add("btn-delete");
  divButton.appendChild(buttonDelete);
  return divButton;
}

function createQuantityNode() {
  var divInput = document.createElement("DIV");
  var input = createQuantityInput();
  var labelInput = document.createElement("LABEL");
  labelInput.innerText = "QTY";
  divInput.appendChild(labelInput);
  divInput.appendChild(input);
  return divInput;
}

function createItemNode(dataType, itemData) {
  var divSpan = document.createElement("DIV");
  var span = document.createElement("SPAN");
  if (dataType === 'number') {
    divSpan.innerText = "$";
  }
  span.innerText = itemData;
  divSpan.appendChild(span);
  return divSpan;
}

function createNewItemRow(itemName, itemUnitPrice) {
  var divContainer = document.createElement("DIV");
  divContainer.classList.add("row-content");
  divContainer.appendChild(createItemNode('text', itemName));
  divContainer.appendChild(createItemNode('number', itemUnitPrice));
  divContainer.appendChild(createQuantityNode());
  divContainer.appendChild(createItemNode('number', '0.00'));
  divContainer.appendChild(createDeleteButton());

  var rows = document.querySelectorAll(".row-content");
  rows[rows.length-1].insertAdjacentElement("afterend", divContainer);
  
  onClicks();
}

function createNewItem() {

  createDeleteButton();
  var inputAddItem = document.getElementById("itemAddName");
  var inputAddPrice = document.getElementById("itemAddPrice");

  if (inputAddItem.value && inputAddPrice) {
    createNewItemRow(inputAddItem.value, inputAddPrice.value)
  } else {
    alert("Can't add item")
  }
}

onClicks = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

window.onload = onClicks;



