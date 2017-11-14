var IronBubblePrice = 25;
var udCost = document.getElementById ("ud-cost");
udCost.innerHTML = IronBubblePrice + " €";

var productPrice = document.getElementById("calc-prices-button");
productPrice.onclick = function (){
  var units = document.getElementsByTagName("input")[0];
  var price = document.getElementsByClassName ("price");
  [].slice.call(price).forEach ( function(price) {
    price.innerHTML = units.value * IronBubblePrice + " €";
  });
};

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

//window.onload = function(){
//  var calculatePriceButton = document.getElementById("calc-prices-button");
//  var createItemButton = document.getElementById("new-item-create");
//  var deleteButtons = document.getElementsByClassName("btn-delete");

//  calculatePriceButton.onclick = getTotalPrice;
//  createItemButton.onclick = createNewItem;

//  for(var i = 0; i<deleteButtons.length ; i++){
//    deleteButtons[i].onclick = deleteItem;
//  }
//};
