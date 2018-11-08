function productPriceTotal() {

  var priceProduct = document.querySelector('.product .product-price span');
  var priceProductNum = priceProduct.textContent;

  var quantityProduct = document.querySelector('.product .product-quantity .qyt');
  var quantityProductNum = quantityProduct.value;

  var productPrice = priceProductNum * quantityProductNum;

  var finalProductPrice = document.querySelector('.product .product-total-price span');
  finalProductPrice.innerText = productPrice;
}

function deleteItem(event){
  var deleteBtn = event.target;

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

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = productPriceTotal;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};