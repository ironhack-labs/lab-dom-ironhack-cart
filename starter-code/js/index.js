'use strict';


function deleteItem(event){
  event.currentTarget.parentNode.remove();
  getTotalPrice();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var productPrice = document.getElementsByClassName('product-cost');
  var productQty = document.getElementsByClassName('product-quantity');
  var productTotal = document.getElementsByClassName('product-total');
  var totalPriceContainer = document.getElementById('total-price');
  var totalPrice = 0;

  for(var i = 0; i < productPrice.length; i++){

    var totalProductPrice = Math.round((Number(productPrice[i].textContent) * Number(productQty[i].value))*100)/100;
    totalPrice += totalProductPrice;    
    productTotal[i].innerHTML = totalProductPrice;
    
  }
  
  totalPriceContainer.innerHTML = totalPrice;
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
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
