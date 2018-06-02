function deleteItem(e) {
  e.currentTarget.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  var qty = document.getElementsByTagName('input').value;
  console.log(qty);
}

function createQuantityInput() {
  var newDiv = document.createElement("div");
  var newLabel = document.createElement("label");
  var newInput = document.createElement("input");

  newLabel.innerHTML = "QTY";
  newInput.setAttribute("type", "number");
  newDiv.appendChild(newLabel);
  newDiv.appendChild(newInput);

  return newDiv;
}

function createDeleteButton() {
  var newDiv = document.createElement("div");
  var newButton = document.createElement("button");

  newButton.setAttribute("class", "btn-delete btn");
  newButton.innerHTML = "delete";
  newDiv.appendChild(newButton);
  return newDiv;
}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {


}

function createNewItemRow(itemName, itemUnitPrice) {
  var invoiceItems = document.getElementById('invoice-items');
  var newItem = document.createElement("li");

  var newDivName = document.createElement("div");
  var newDivPrice = document.createElement("div");
  var newDivResult = document.createElement("div");
  var newSpanName = document.createElement("span");
  var newSpanPrice = document.createElement("span");
  var newSpanResult = document.createElement("span");
 

  newSpanResult.innerHTML = "0.00";
  newDivResult.appendChild(newSpanResult);

  newSpanName.innerHTML = itemName;
  newSpanPrice.innerHTML = itemUnitPrice;
  newDiv.appendChild(newSpanName);
  newDiv.appendChild(newSpanPrice);
  newDiv.appendChild(createQuantityInput());
  newDiv.appendChild(newDivResult);
  newDiv.appendChild(createDeleteButton());
  newDiv.setAttribute("class", "line-invoice");

  newItem.appendChild(newDiv);

}

function createNewItem() {
  var textItem = document.getElementById("text-new-item");
  var costItem = document.getElementById("cost-new-item");
  createNewItemRow("test", "33.00");
}
window.onload = function () {
  var calculatePriceButton = document.getElementsByClassName('btn-success');
  var createItemButton = document.getElementsByClassName('btn-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onClick = getTotalPrice();
  createItemButton.onClick = createNewItem();

  // for (let button of deleteButtons) {
  //   button.onClick = deleteItem;
  // }
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem; 
  }
};