function calculateLinePrice(){
var UnitPrice = document.getElementById("productPrice");
var UnitQuantity = document.getElementById("UnitQuantity");
var totalUnitPrice = document.getElementById("totalUnitPrice");
var totalPrice = UnitPrice*UnitQuantity;
totalUnitPrice.innerHTML = totalPrice;
}



function deleteItem(e){



}

function getPriceByProduct(itemNode){
var element
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

  //calculatePriceButton.onclick = getTotalPrice;//
  calculatePriceButton.onclick = calculateLinePrice();
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
