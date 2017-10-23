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
  var calculatePriceButton = document.getElementById('calculate-price');
  var quantityInput = document.getElementsByClassName('qty-input');
  var deleteButton = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  quantityInput.onclick = createNewItem;

  for(var i = 0; i<deleteButton.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
