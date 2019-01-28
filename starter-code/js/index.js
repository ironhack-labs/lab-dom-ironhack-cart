function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
var gumQuantity = document.getElementById('quantity-input').value;
var gumPrice = document.querySelector('#product-bubble-gum').getAttribute('data-price')
var doubleBubblePrice = document.querySelector('#product-double-gum').getAttribute('data-price')
var doubleQuantity = document.getElementById('product-double-gum').value;
var price = ( gumQuantity * parseFloat(gumPrice) + parseFloat(doubleBubblePrice)*doubleQuantity);


var priceDiv = document.getElementById('purchase-details')
priceDiv.innerHTML = price

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
  // unit-price

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}
var itemsForSale = document.getElementsByClassName('product-name')
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

};
