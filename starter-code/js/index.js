function deleteItem(e){

}

function getPriceByProduct(itemNode){
  productPrices * productQuantities;

}

let productPrices = document.getElementsByClassName("productPrice");
console.log(productPrices[0].innerHTML);

let productQuantities = document.getElementsByClassName("productQuantity");
console.log(productQuantities[0].value);

console.log(productPrices * productQuantities);


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



