function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var productSpan = document.getElementsByClassName("product-price");
  var arr = [].slice.call(productSpan)
  var priceProduct = parseFloat(arr[0].innerHTML, 10);
  var amount = document.getElementsByClassName("units");
  var arr2 = [].slice.call(amount)
  var amountTotal = parseInt(arr2[0].getAttribute("value"), 10);
  var priceLabel = document.getElementsByClassName(itemNode);
  var arr3 = [].slice.call(priceLabel);
  var finalProductPrice = priceProduct * amountTotal;
  finalProductPrice = finalProductPrice.toFixed(2);
  console.log(finalProductPrice);
  finalProductPrice = finalProductPrice.toString();
  console.log(finalProductPrice);
  priceLabel.innerHTML =  finalProductPrice;
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
getPriceByProduct();
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
