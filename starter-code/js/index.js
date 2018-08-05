
var itemList = document.getElementsByClassName("wrapper");

function getPriceByProduct(itemnode){
  var price = itemnode.getElementsByClassName("price")[0].innerHTML;
  var quantity = 0;
  quantity += itemnode.getElementsByClassName("quantity")[0].getElementsByTagName("input")[0].value;
  var totalPrice = price * quantity;
  return totalPrice;
}

function updatePriceByProduct(itemnode){
  var sum = itemnode.getElementsByClassName("total")[0]
  sum.innerHTML = getPriceByProduct(itemnode).toFixed(2);
  return getPriceByProduct(itemnode);
}

function getTotalPrice() {
  var totalnode = document.getElementById("totalall");
  var itemList = document.getElementsByClassName("wrapper");
  var sum = 0;
  for (var i = 0; i < itemList.length; i++) {
    updatePriceByProduct(itemList[i])
  }
  for (var index = 0; index < itemList.length; index++) {
    sum = sum + updatePriceByProduct(itemList[index])
  }
  totalnode.innerHTML = sum;
}

function deleteItem(e){
  var wrapper = e.parentNode.parentNode;
  wrapper.parentNode.removeChild(wrapper);
}

function createQuantityInput(){
  var newInput = document.createElement('input');
  newInput.setAttribute("type", "text");
  newInput.setAttribute("placeholder","0");
  return newInput;
}


function createQuantityNode(){
  var newLabel = document.createElement("label");
  newLabel.innerHTML = "QTY"
  var newQuantity = document.createElement("div");
  newQuantity.appendChild(newLabel);
  var newInput = createQuantityInput();
  newQuantity.appendChild(newInput)
  newQuantity.setAttribute("class", "quantity")
  return newQuantity;
}


function createDeleteButton(){
  var newDelete = document.createElement("div");
  newDelete.setAttribute("class", "delete");
  var newButton = document.createElement("button");
  newButton.setAttribute("class", "btn btn-delete");
  newButton.setAttribute("onclick", "deleteItem(this)");
  newButton.innerHTML = "Delete";
  newDelete.appendChild(newButton);
  return newDelete;
}

function createNewItemRow(itemName){
  var newItemRow = document.createElement("div");
  newItemRow.setAttribute("class", "wrapper")
  newItemRow.setAttribute("id", itemName)
  return newItemRow;
  
}

function createItemName(itemName) {
  var newName = document.createElement("div");
  newName.setAttribute("class", "name");
  var newSpan = document.createElement("span");
  newSpan.innerHTML = itemName;
  newName.appendChild(newSpan);
  return newName;
}

function createItemPrice(itemprice) {
  var newPrice = document.createElement("div");
  var newSpan = document.createElement("span");
  newSpan.setAttribute("class", "price");
  newSpan.innerHTML = Number(itemprice).toFixed(2);
  newPrice.innerHTML = "$";
  newPrice.appendChild(newSpan);
  return newPrice;
}

function createNewTotal() {
  var newTotal = document.createElement("div");
  newTotal.innerHTML = "$";
  var newSpan = document.createElement("span");
  newSpan.setAttribute("class","total");
  newSpan.innerHTML = "0.00";
  newTotal.appendChild(newSpan);
  return newTotal;
}

function createNewItem(){
  var itemName = document.getElementById("getName").value;
  var itemPrice = document.getElementById("getPrice").value;
  var newItemRow = createNewItemRow(itemName);
  var newItemName = createItemName(itemName);
  var newItemPrice = createItemPrice(itemPrice);
  var newItemQuantity = createQuantityNode();
  var newItemTotal = createNewTotal();
  var newItemDelete = createDeleteButton();
  newItemRow.appendChild(newItemName);
  newItemRow.appendChild(newItemPrice);
  newItemRow.appendChild(newItemQuantity);
  newItemRow.appendChild(newItemTotal);
  newItemRow.appendChild(newItemDelete);
  var parent = document.getElementById("items");
  parent.appendChild(newItemRow);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
