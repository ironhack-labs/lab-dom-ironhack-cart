
var parentElement = document.getElementsByTagName('body')[0];
//console.log(parentElement);
var parentDiv = document.getElementById("main-div")
//console.log(parentDiv);

var nameOfProductDiv = document.getElementById("nameOfProduct");
var spanNameOfProduct = document.createElement("span");
var nameOfProduct = document.createTextNode("IronBubble-head");
//console.log(spanNameOfProduct);
spanNameOfProduct.appendChild(nameOfProduct);
nameOfProductDiv.appendChild(spanNameOfProduct);

var singlePriceDiv = document.getElementById("singlePrice");
//console.log(singlePriceDiv);
var spanSingleCost = document.createElement("span");
var singleCost = document.createTextNode("$25.00")
spanSingleCost.appendChild(singleCost);
singlePriceDiv.appendChild(spanSingleCost);

var qtyInputDiv = document.getElementById("qty");
var labelQTY = document.createElement("label");
var qtyText = document.createTextNode("QTY");
labelQTY.appendChild(qtyText);
var inputQTY = document.createElement("input");
inputQTY.setAttribute("type", "text");
qtyInputDiv.appendChild(labelQTY);
qtyInputDiv.appendChild(inputQTY);




function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var gettingSinglePrice = document.getElementById("single-price").textContent.split("$");
  var singlePrice = parseInt(gettingSinglePrice[1])
  //console.log(singlePrice);
  return singlePrice;
}
//getPriceByProduct('<span id="single-price">$27.00</span>');



function updatePriceByProduct(productPrice, index){
  

}

function getTotalPrice() {
 var totalPrice = createQuantityInput * getPriceByProduct;
 console.log(totalPrice);
}
//getTotalPrice()

 function createQuantityInput(){
   var calcPricesBtn = document.getElementById("calculate-prices-button");

  calcPricesBtn.onclick = function(){
    var input = document.getElementsByTagName("input")[0];
    console.log(input.value);
    return input.value
  }
}

//createQuantityInput();

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
