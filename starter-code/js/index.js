var count = 0;
var currentProd = "";
var prevProd = "";
var inputprod = "";
var inputprice = "";
var inputqty = 0;
var itemDiv = "";
var itemSpan = "";

function getinputThenCreate() {
  inputprod = document.querySelector('input[name="createme"]').value;
  inputprice = document.querySelector('input[name="createprice"]').value;
  createNewItemRow(inputprod, inputprice);
  console.log(`Stored - ${inputprod} - $${inputprice}`);
}


//start creating all of the ELements needed

function createNewItemRow(itemName, itemUnitPrice){
  //refers to previous element
  var currentElement = document.getElementsByClassName('product')[count];

  count++;
  //before inserting the new element need to update the currenet element
  currentElement = currentElement;
  //create a row
  currentElement.insertAdjacentHTML('afterend', `<div class = "row product"</div>`);
  //create columns, but this is a bit of a hack cause I haave to create them in reverse order.
  currentElement.insertAdjacentHTML('afterend', `<div class = "col-xs-2 pricecol"><span class = "item">${itemUnitPrice}</span></div>`);
  currentElement.insertAdjacentHTML('afterend', `<div class = "col-xs-2"><span class = "item">${itemName}</span></div>`);
  // also a hack to give these elements time to construct
  setTimeout(createQuantityInput(currentElement), 50);
  console.log(`Created Row for: ${itemName} which cost ${itemUnitPrice}`);
}

function createQuantityInput(currentE){
  //there is always one less pricecol than the amount of products cause...another hack
  var elementTarget = document.getElementsByClassName('pricecol')[count-1];

  console.log(elementTarget);
  elementTarget.insertAdjacentHTML('afterend', `<div class = "col-xs-4 inputcol"><span class ="item">QTY<input type ="text" name="calculateme-${count}"></span></div>`);
  console.log(`Created: Input-${count}`);
}

function getPriceByProduct(itemNode){
var inputClass = document.getElementsByClassName('inputcol')[count-1];  // :) I know... I know I need to seriously re-factor this
}



function deleteItem(e){

  console.log(e);
}


function updatePriceByProduct(productPrice, index){


}

function getTotalPrice() {
  var product1Price = 25;
  var inputqty = document.querySelector('input[name="calculateme"]').value;
  inputqty = parseInt(inputqty);
  var total = product1Price * inputqty;
  console.log(total);
}



function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
var initial = document.getElementById('product-1');


itemDiv.dataType
// var divContent = document.createTextNode()
console.log(initial.childNodes);
console.log(dataType);
console.log(itemData);
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
