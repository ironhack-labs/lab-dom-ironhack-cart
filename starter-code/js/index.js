function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var unitPrice=document.getElementsByClassName("product-price");
  var qtItems = document.getElementsByClassName("total-of-products");
  var totalPrice = document.getElementsByClassName("total-price");
  var totalCost=0;

  for(var i = 0; i < totalPrice.length; i++){
    totalCost += unitPrice[i].innerHTML*qtItems[i].value;
    totalPrice[0].innerHTML = totalCost;


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
