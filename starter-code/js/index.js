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

// Functions

/* 
  getPriceByProduct
    retrieves innerText of DOM element and converts it into a float
  args:
    itemNode (DOM Element)
  return
    priceProduct (float)

  ^  -> meta character to match beginning of input
  \d -> meta character to match any digit  
  +  -> meta character to match preceding pattern 1 or more times
  ?  -> meta character to optionally match preceding pattern
  () -> to group a pattern so it can be retrieved  
  \$ -> $ escaped
  \. -> . escaped
*/
function getPriceByProduct(itemNode){
  // creates a regular expression
  let regExp = /^\$?(\d+\.\d+)/;
  let priceString = itemNode.innerText;
  // if the test is true, a matching pattern was found
  if (regExp.test(priceString)) {
    let arrPattern = regExp.exec(priceString);
    // element 0 has the original string and element 1 has the first match
    return parseFloat(arrPattern[1]);
  } else{
    return undefined;
  }
}

/* 
  getPricesArray
    returns an array of floats extracting the inner text of a DOMCOllection
  args:
    DOMCollection (DOM Collection)
  return
    arrayPrices (array of floats)
*/
function getPricesArray(DOMCollection){
  let array = [];
  for (let index = 0; index < DOMCollection.length; index++) {
    array.push(getPriceByProduct(DOMCollection.item(index)));
  }
  return array;
}

/* 
  getQtyArray
    returns an array of integers extracting the value of a DOMCOllection of inputs
  args:
    DOMCollection (DOM Collection)
  return
    arrayQty (array of integers)
*/
function getQtyArray(DOMCollection){
  let array = [];
  for (let index = 0; index < DOMCollection.length; index++) {
    let qty = 0;
    // check for empty value -> ""
    if (DOMCollection.item(index).value !== ""){
      qty = parseInt(DOMCollection.item(index).value);
    }
    array.push(qty);
  }
  return array;
}


function deleteItem(e){
  /* current DOM structure
  div class="wrapper-prod" > div class="btn" 
  we select the node two levels up to have the wrapper*/
  let divWrapperNode = e.target.parentNode.parentNode;
  let bodyNode = divWrapperNode.parentNode;
  // remove whole wrapper
  bodyNode.removeChild(divWrapperNode);
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(event) {
  // retrieve all DOM elements of class cost
  let costsElems = document.getElementsByClassName("cost");
  let prices = getPricesArray(costsElems);
  
  // retrieve all DOM elements of class quantity
  let qtyElems = document.getElementsByClassName("quantity");
  let qties = getQtyArray(qtyElems);

  let cart = new Cart();

  for (let indexItem = 0; indexItem < prices.length; indexItem++) {
    cart.pushItem(new ItemCart(prices[indexItem], qties[indexItem]));
  }
  
  // retrieve all DOM elements of class total-price
  let totalElems = document.getElementsByClassName("total-prod");

  for (let totIx = 0; totIx < totalElems.length; totIx++) {
    // Remove current span
    totalElems.item(totIx).removeChild(totalElems.item(totIx).firstChild);
    // create and append new span
    let span = document.createElement("span");
    span.innerText = "$" + cart.itemList[totIx].total.toFixed(2);
    totalElems.item(totIx).appendChild(span);
  }

  let totalCart = document.getElementById("total-cart");
  totalCart.innerText = "$" + cart.getTotalCart().toFixed(2);
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