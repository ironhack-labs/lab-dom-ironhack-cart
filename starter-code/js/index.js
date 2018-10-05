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

function createNewItemRow2(itemName, itemUnitPrice, itemClass){
  var elem = document.createElement(itemName);
  elem.className = itemClass;
  document.getElementsByClassName(itemClass).innerHTML=itemUnitPrice;
}


function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  //calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItemRow2("INPUT", "10", "btn");
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
