function deleteItem(e){
  e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode);

 getTotalPrice();
}

function getPriceByProduct(itemNode){
  var price = parseFloat(itemNode.getElementsByClassName("itemPrice")[0].textContent);
  var quantity = parseInt(itemNode.getElementsByClassName('itemQuantity')[0].value);

  itemNode.getElementsByClassName("itemTotal")[0].textContent = '$' + (price*quantity).toFixed(2);

  return price*quantity;
}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  var items = document.getElementsByClassName('item');
  var total = 0;

  for (i = 0; i < items.length; i++) {
    total += getPriceByProduct(items[i]);
  }

  document.getElementById('totalPrice').textContent = '$' + total.toFixed(2);

}

function createQuantityInput(){
  var input = document.createElement("input");
  var label = document.createElement("label");
  input.type = "number";
  input.placeholder = "0";
  input.value = "1";
  input.className = "itemQuantity quantity";
  label.innerHTML = "QTY";
}

function createDeleteButton(){
  var button = document.createElement("button");
  button.className = "btn btn-delete";
  button.innerHTML = "Delete";
  return button;
}

function createQuantityNode(){
  
}


function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem(){
  var itemDiv = document.getElementById('existingItems').appendChild(document.createElement("div"));
  itemDiv.className = "item";

  itemDiv.appendChild(createDeleteButton());
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
