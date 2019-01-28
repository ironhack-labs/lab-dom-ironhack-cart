function deleteItem(e){
  e.currentTarget.parentNode.parentNode.innerHTML = ''
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
var bubbleQuantity = document.getElementById('bubble-quantity-input').value
var gumPrice = document.querySelector('#product-bubble-gum').getAttribute('data-price')
var dubBubbleQuantity = document.getElementById('dub-bubble-quantity-input').value
var dubleGumPrice = document.querySelector('#product-double-gum').getAttribute('data-price')
var price = ( bubbleQuantity * parseFloat(gumPrice) + (dubBubbleQuantity * parseFloat(dubleGumPrice)))

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
