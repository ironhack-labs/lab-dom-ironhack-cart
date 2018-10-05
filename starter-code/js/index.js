/*function deleteItem(e){

}

*/
function getPriceByProduct(itemNode){

var productPrice = itemNode.getElementByClass("product-price");
var productQuantity = itemNode.getElementByClass("product-quantity");

var totalPriceObject[0] = productPrice[0].textContext * productQuantity[0].textContext;

return totalPriceObject[0];
}

 
function updatePriceByProduct(productPrices, index){
var productPrice = itemNode.getElementByClass("product-price");
var productQuantity = itemNode.getElementByClass("product-quantity");

var totalPriceObject[i] = productPrice[i].textContext * productQuantity[i].textContext;
  
var element = document.getElementByClass("product-total-price");
element.innerHTML = totalPriceObject[i];

}
/*
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
*/
