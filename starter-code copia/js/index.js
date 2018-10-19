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
  var calculatePriceButton = document.querySelector('#calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');
  var unitPrices = document.querySelectorAll(".unit-price");
  var quantities = document.querySelectorAll(".quantity");
  var totalPrices = document.querySelectorAll(".total-price");
  var objectClasses = document.querySelectorAll(".object");
  var finalTotal = document.querySelector(".finalTotal");


  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;


  //for(var i = 0; i<deleteButtons.length ; i++){
    //deleteButtons[i].onclick = deleteItem;
  //}
//};
calculatePriceButton.onclick = function () {
  console.log("hello!");
  var tempSum = 0;
  for ( var i = 0; i < objectClasses.length; i ++){
    totalPrices[i].innerHTML = Number(unitPrices[i].innerHTML) * Number(quantities[i].value);
 
    tempSum += Number(totalPrices[i].innerHTML);
  } 
finalTotal.innerHTML = tempSum;
};

//------------------------- 
