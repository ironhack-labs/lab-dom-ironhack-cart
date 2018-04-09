// Use at least 3 onclick events

// Use at least one getElementById

// Use at least one getElementsByTagName

// Use at least one getElementsByClassName
var getProduct = document.getElementsByClassName('product-name');
var getUnitPrice = document.getElementsByClassName('unit-cost');
var getQuantity = document.getElementsByClassName('quantity')[0];
var getTotalProductPrice = document.getElementsByClassName('total-product-price')
var deleteButtons = document.getElementsByClassName('btn-delete');

var unitPrice = getUnitPrice[0].innerHTML.split("$")[1];
var quantity = getQuantity.nodeValue;
getTotalProductPrice[0].setAttribute('total-product-price', getTotalPrice());

function getTotalPrice(){
  for (var i = 0; i < getProduct.length; i++){
    var totalCost = unitPrice[i] * quantity[i];
  }
  return totalCost;
}

function deleteItem(e){
  var row = document.getElementsByClassName('row');
  for (var i = 0; i < row.length; i++){
  }
  document.appendChild(row)
}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

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
