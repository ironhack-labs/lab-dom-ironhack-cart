function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

var qtyItems = document.querySelectorAll("input");
var finalPrice = document.querySelectorAll(".result")
var allPrices= document.querySelectorAll(".price") ;
var allProduct = document.querySelectorAll(".wrapper");
var btnSuccess = document.querySelector(".btn-success");


btnSuccess.onclick = function getTotalPrice (){
allProduct.forEach(function (oneProduct){
  var totalPrice = oneProduct.querySelector("input").value * oneProduct.querySelector(".price").innerHTML;
  oneProduct.querySelector(".result").innerHTML = "$" + totalPrice.toFixed(2);
});
};

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

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
