function deleteItem(e){

}

// function getPriceByProduct(itemNode){
function getPriceByProduct(){
 var productPrice = document.getElementById("product-price").innerHTML;
 updatePriceByProduct(productPrice);
}

function updatePriceByProduct(productPrice){
//function updatePriceByProduct(productPrice, index){
var quantity = document.getElementById("numbers").value;
var totalPrice = quantity * productPrice;
document.getElementById("final").innerHTML = totalPrice;
}

function getTotalPrice() {
  getPriceByProduct();
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
