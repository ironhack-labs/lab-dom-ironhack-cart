var calculatePriceButton = document.getElementById("calculatePrices");

calculatePriceButton.onclick = function ()
{
  var priceTag = document.getElementsByClassName("PriceTag")[0];
  var quantity = document.getElementsByClassName("quantity-input")[0].value;
  var priceProduct1 = document.getElementsByClassName("priceProduct1")[0].innerText;
  var totalPrice = document.getElementsByClassName("PriceTag")[0].innerText;
  totalPrice = priceProduct1*quantity;
}


function deleteItem(e){
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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

