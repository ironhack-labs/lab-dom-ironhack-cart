function deleteItem(e){
  var buttonClicked = e.currentTarget;
  var itemToDelete = buttonClicked.parentNode.parentNode;
  var tableOfItems = itemToDelete.parentNode;

  tableOfItems.removeChild(itemToDelete);
}

function getPriceByProduct(itemNode){
  var productPrice = itemNode.getElementsByClassName("item-price")[0].innerHTML;
  var productQuantity = itemNode.getElementsByClassName("item-quantity")[0].value;
  var totalPrice = productPrice * productQuantity;
  
  return totalPrice;
}

function updatePriceByProduct(productPrice, index){
  document.getElementsByClassName("item-total")[index].innerHTML = productPrice.toFixed(2);
}

function getTotalPrice() {
  var items = document.getElementsByClassName("item");
  var totalPrice = 0;
  for (var i = 0; i < items.length; i++) {
    var productTotalPrice = getPriceByProduct(items[i]);
    updatePriceByProduct(productTotalPrice, i);
    totalPrice += productTotalPrice;
  }
  document.getElementById("total-price").innerHTML = totalPrice.toFixed(2);
}

function createDeleteButtonNode(){
  var itemNode = document.createElement("div");
  var newButtonElement = document.createElement("button");
  var buttonText = document.createTextNode("Delete");

  newButtonElement.appendChild(buttonText);
  newButtonElement.className = "btn-delete";
  itemNode.className = "col-xs-2";
  itemNode.appendChild(newButtonElement);

  return itemNode;
}

function createQuantityNode(){
  var itemNode = document.createElement("div");
  var newLabelElement = document.createElement("label");
  var newInputElement = document.createElement("input");

  newLabelElement.innerHTML = "QTY:";
  newLabelElement.htmlFor = "quantity";
  newInputElement.type = "text";
  newInputElement.className = "item-quantity";
  newInputElement.value = "0";
  newInputElement.id = "quantity";
  itemNode.className = "col-xs-3";
  itemNode.appendChild(newLabelElement);
  itemNode.appendChild(newInputElement);

  return itemNode;
}

function createSpanNode(nodeClassName, spanClassName, value){
  var itemNode = document.createElement("div");
  var spanElement = document.createElement("span");
  
  spanElement.innerHTML = value;
  spanElement.className = spanClassName;
  itemNode.className = nodeClassName;
  if(isNaN(value) === false) {
    itemNode.appendChild(document.createTextNode("$"));
  } 
  itemNode.appendChild(spanElement);

  return itemNode;
}

function createNewItem(){
  var newRowDiv = document.createElement("div");
  var newItemDiv = document.createElement("div");
  var itemTableDiv = document.getElementById("item-table");
  var createRowDiv = document.getElementsByClassName("new-item")[0].parentNode;
  
  var newItemName = document.getElementById("new-item-name").value;
  var newItemPrice = document.getElementById("new-item-price").value;

  newItemDiv.className = "item";
  newItemDiv.appendChild(createSpanNode("col-xs-3", "item-name", newItemName));
  newItemDiv.appendChild(createSpanNode("col-xs-2", "item-price", newItemPrice));
  newItemDiv.appendChild(createQuantityNode());
  newItemDiv.appendChild(createSpanNode("col-xs-2", "item-total", "0.00"));
  newItemDiv.appendChild(createDeleteButtonNode());
  
  newRowDiv.className = "row";
  newRowDiv.appendChild(newItemDiv);
  itemTableDiv.insertBefore(newRowDiv, createRowDiv);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
