// general functions

// Extract a float from a price string
function convertPrice(priceText){
  return parseFloat(priceText.slice(priceText.indexOf("$")+1,priceText.length));
}

// Clasess

// Class to store Item data
function ItemCart(price, qty){
  this.price = price;
  this.qty = qty;
  this.total = price * qty;
}

// Class to store items
function Cart(){
  this.itemList = [];
}

// prototype function to push an item into cart
Cart.prototype.pushItem = function (item){
  this.itemList.push(item);
}

// prototype function to get cart's total
Cart.prototype.getTotalCart = function(){
  return this.itemList.reduce((acc, item) => acc += item.total, 0);
}

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(event) {
  let costsElems = document.getElementsByClassName("cost");
  let prices = [];
  for (let index = 0; index < costsElems.length; index++) {
    // retrieves element innerText
    let priceFloat = convertPrice(costsElems.item(index).innerText);
    prices.push(priceFloat);
  }
  
  let qtyElems = document.getElementsByClassName("quantity");
  let qties = [];
  for (let index = 0; index < qtyElems.length; index++) {
    // retrieves element innerText
    let qtyInt = parseInt(qtyElems.item(index).value);
    qties.push(qtyInt);
  }

  let cart = new Cart();

  for (let indexItem = 0; indexItem < prices.length; indexItem++) {
    cart.pushItem(new ItemCart(prices[indexItem], qties[indexItem]));
  }
  
  let totalElems = document.getElementsByClassName("total-price");

  for (let totIx = 0; totIx < totalElems.length; totIx++) {
    // Remove current span
    totalElems.item(totIx).removeChild(totalElems.item(totIx).firstChild);
    // append new span
    let span = document.createElement("span");
    span.innerText = cart.itemList[totIx].total
    totalElems.item(totIx).appendChild(span);
  }
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
