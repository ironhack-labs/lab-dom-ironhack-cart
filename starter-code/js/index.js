var totalPrice = document.getElementsByClassName("total");
totalPrice.addEventListener('keydown', calculatePrices())

function calculatePrices (unitPrice, unitQty) {
  var unitPrice = document.getElementsByClassName('price');
  var unitQty = document.getElementById('input').innerText;
  var unitTotal = document.getElementsByClassName("total");
  
  return unitTotal + (unitPrice * unitQty)

}








function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

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
