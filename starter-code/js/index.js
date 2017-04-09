function deleteItem(e){
  var item = e.currentTarget;
  item.parentNode.parentNode.remove(item);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var grandTotal = 0;
  var grandTotalInt = 0;
  for (var i = 0; i < document.getElementsByClassName('col-xs-3').length; i++) {
      var tmpPrice = document.getElementsByClassName('col-xs-3')[i].innerText;
      var price = tmpPrice.replace(/\$/g, '');
      var quantity = document.getElementsByClassName('qty')[i].value;
      var totalPriceInt = price * quantity;
      var totalPrice = totalPriceInt.toFixed(2);
      totalPrice = totalPrice.toString();
      totalPrice = ("$" + totalPrice);
      document.getElementsByClassName('col-xs-5')[i].innerText = totalPrice;
      grandTotalInt += totalPriceInt;
    }
    grandTotal = grandTotalInt.toFixed(2);
    grandTotal = grandTotal.toString();
    grandTotal = ("$" + grandTotal);
    document.getElementById('grandTotalPrice').innerText = grandTotal;
}

function createQuantityInput(newHolder){
  var newLabel = document.createElement('label');
  newLabel.setAttribute('class','qty-label');
  newLabel.append("QTY: ");
  var newInput = document.createElement('input');
  newInput.setAttribute('class','qty');
  newInput.setAttribute('value','0');
  newHolder.append(newLabel, newInput);
  return newHolder;
}

function createDeleteButton(){
  var buttonHolder = document.createElement('div');
  buttonHolder.setAttribute('class','col-xs-7');
  var newButton = document.createElement('button');
  newButton.setAttribute('class','btn-delete btn');
  newButton.append("Delete");
  buttonHolder.append(newButton);
  return buttonHolder;
}

function createQuantityNode(){
  var newHolder = document.createElement('div');
  newHolder.setAttribute('class','col-xs-4');
  finalHolder = (createQuantityInput(newHolder));
  return finalHolder;
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  var newRow = document.createElement('div');
  newRow.setAttribute('class','row');

  var newName = document.createElement('div');
  newName.setAttribute('class','col-xs-2');
  newName.append(itemName);

  var newPrice = document.createElement('div');
  itemUnitPrice = parseInt(itemUnitPrice);
  itemUnitPrice = itemUnitPrice.toFixed(2);
  itemUnitPrice = itemUnitPrice.toString();
  itemUnitPrice = ("$" + itemUnitPrice);


  newPrice.setAttribute('class','col-xs-3');
  newPrice.append(itemUnitPrice);
  var newQtyItem = createQuantityNode();

  var newTotalPrice = document.createElement('div');
  newTotalPrice.setAttribute('class','col-xs-5');
  newTotalPrice.append("$0.00");

  var newButton = createDeleteButton();

  newRow.append(newName);
  newRow.append(newPrice);
  newRow.append(newQtyItem);
  newRow.append(newTotalPrice);
  newRow.append(newButton);
  return newRow;
}

function createNewItem(){
  var newName = document.getElementById('add-name').value;
  var newPrice = document.getElementById('add-price').value;
  var newItem = document.createElement('div');
  if (newName !== "" && newPrice !== "" && !isNaN(newPrice)) {
    newItem.setAttribute('class', 'item');
    newItem.append(createNewItemRow(newName,newPrice));
    var pContainer = document.getElementById('main_container');
    pContainer.append(newItem);

    deleteButtons = document.getElementsByClassName('btn-delete');
    reConfigButtons(deleteButtons);
  } else {
    alert("Please enter a valid name and a numerical price!");
  }
}

function reConfigButtons (deleteButtons) {
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  reConfigButtons(deleteButtons);

};
