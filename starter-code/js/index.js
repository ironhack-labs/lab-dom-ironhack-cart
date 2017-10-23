function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var  price = document.getElementsByClassName(itemNode);
}

function updatePriceByProduct(productPrice, index, node){
  document.getElementsByClassName(node).[index]=productPrice;
}

function getTotalPrice(q) {
  var quantity = document.getElementsByClassName('quantity');
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
