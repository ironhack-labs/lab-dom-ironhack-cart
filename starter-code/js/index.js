// Código inicial pero luego descartado
//var IronBubblePrice = 25;
//var udCost = document.getElementById ("ud-cost");
//udCost.innerHTML = IronBubblePrice + " €";

var totalPrice = 0;

var productPrice = document.getElementById("calc-prices-button");
productPrice.onclick = function (){

for (var i=0; i< document.getElementsByClassName("ud-cost").length; i++){
    var udCost = document.getElementsByClassName("ud-cost")[i];
    var units = document.getElementsByClassName("quantity")[i];
    var price = document.getElementsByClassName ("price")[i];
//    [].slice.call(units).forEach (function (units){
//      [].slice.call(udCost).forEach (function(udCost){
//        [].slice.call(price).forEach (function(price) {
          price.innerHTML = units.value * udCost.innerHTML + " €";
//        });
//      });
//    });
    totalPrice += (units.value * udCost.innerHTML);
    }
    var showTotalPrice = document.getElementById ("precio-total");
    showTotalPrice.innerHTML = "";
    showTotalPrice.innerHTML = totalPrice + " €";
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
