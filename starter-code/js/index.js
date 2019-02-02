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
    text (string)
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
function getPriceByProduct(text){
  // creates a regular expression
  let regExp = /^\$?(\d+\.?\d*)/;
  let priceString = text;
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
    array.push(getPriceByProduct(DOMCollection.item(index).innerText));
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

/* 
  deleteItem
    remove product row from principal section
  args:
    e (onclick Mouse Event)
  return
    nothing
*/
function deleteItem(e){
  /* current DOM structure
  div class="wrapper-prod" > div class="btn" 
  we select the node two levels up to have the wrapper*/
  let divWrapperNode = e.target.parentNode.parentNode;
  let sectionNode = divWrapperNode.parentNode;
  // remove whole wrapper
  sectionNode.removeChild(divWrapperNode);
  // update total in cart
  getTotalPrice();
}

/* 
  getTotalPrice
    calculate total price per product and grand total
  args:
    event (onclick Mouse Event)
  return
    nothing
*/
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

/* 
  createNewItem
    create a new item row in main section
  args:
    event (onclick Mouse Event)
  return
    undefined if input values are invalid
*/
function createNewItem(event){
  // select section of products
  let productSection = document.getElementsByTagName("section");

  // select input of class item-data
  let itemInputs = document.getElementsByClassName("item-data");

  // if any of inputs is empty, return
  if (itemInputs.item(0).value === "" || itemInputs.item(1).value === "")
    return undefined;
  
  let itemPrice = getPriceByProduct(itemInputs.item(1).value);

  // if price is invalid, return
  if (itemPrice === undefined) return undefined;

  let itemName = itemInputs.item(0).value;
  // create new item
  productSection[0].appendChild(createNewItemRow(itemName,itemPrice));

  // clean inputs
  itemInputs.item(0).value = "";
  itemInputs.item(1).value = "";
}


/* function to create DOM Nodes */
function createQuantityInput(){
  // create parent div
  let divInput = document.createElement("div");
  // set corresponding class
  divInput.setAttribute("class","input");

  // create span Node
  let span = document.createElement("span");
  span.innerText = "QTY";

  // create input Node
  let input = document.createElement("input");
  input.setAttribute("class","quantity");
  input.setAttribute("type","text");
  input.setAttribute("placeholder","0");

  // create final node
  divInput.appendChild(span);
  divInput.appendChild(input);

  return divInput;
}

function createDeleteButton(){
  // create parent div
  let divBtnDelete = document.createElement("div");

  // create delete button
  let btnDelete = document.createElement("button");
  btnDelete.setAttribute("class","btn-delete btn");
  btnDelete.innerText="Delete";
  // add function to onclick event
  btnDelete.onclick = deleteItem

  // create final node
  divBtnDelete.appendChild(btnDelete);

  return divBtnDelete;
}

function createSpan(classAttr, text){
  // create parent div
  let divSpan = document.createElement("div");
  divSpan.setAttribute("class",classAttr);

  // create span
  let span = document.createElement("span");
  span.innerText = text;

  // create final node
  divSpan.appendChild(span);

  return divSpan;
}

function createNewItemRow(itemName, itemUnitPrice){
  // create wrapper div
  let divWrapper = document.createElement("div");
  divWrapper.setAttribute("class","wrapper-prod");

  // append all node childs
  // first span with itemName
  divWrapper.appendChild(createSpan("product",itemName));
  // second span with cost
  divWrapper.appendChild(createSpan("cost","$" + itemUnitPrice,toString()));
  // input child
  divWrapper.appendChild(createQuantityInput());
  // third span with total of product
  divWrapper.appendChild(createSpan("total-prod","$0.00"));
  // delete button
  divWrapper.appendChild(createDeleteButton());

  return divWrapper;
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