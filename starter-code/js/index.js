function deleteItem(e){

}
var btn = document.getElementsByClassName("btn-success");
var price = document.getElementsByClassName("price");
var input = document.getElementsByTagName("input");
btn.onclick = function(){
  getPriceByProduct();
}
function getPriceByProduct(){
  var span = document.getElementsByClassName("dolar");
  var priceInpu = price * input;
  span.innerHTML = priceInpu;  
  ; 
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

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
