function productsPriceTotal() {
  var myNodelist = document.querySelectorAll(".product");
  for (var i = 0; i < myNodelist.length; i++) {
  var eachProduct = myNodelist.item(i);

  var priceProduct = eachProduct.querySelector('.product-price span');
  var priceProductNum = priceProduct.textContent;
  var quantityProduct = eachProduct.querySelector('.product-quantity .qyt');
  var quantityProductNum = quantityProduct.value;
  var productPrice = priceProductNum * quantityProductNum;
  var finalProductPrice = eachProduct.querySelector('.product-total-price span');

  finalProductPrice.innerText = productPrice;
  }
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

  calculatePriceButton.onclick = productsPriceTotal;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};