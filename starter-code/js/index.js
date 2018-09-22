/* 
var calculateButton = document.getElementById('botonOn');

var priceUnit = parseFloat(document.getElementById('priceUnit').innerHTML);

var productTotal = document.getElementById('productTotal');

calculateButton.onclick = function() {
  var quantity = parseFloat(document.getElementsByTagName('input')[0].value);
  productTotal.innerHTML = priceUnit * quantity;
}
*/


function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var calculateButton = document.getElementById('botonOn');
  var priceUnit = parseFloat(document.getElementById('priceUnit').innerHTML);
  var productTotal = document.getElementById('productTotal');

  var totalPrice=0;
  for (var i=0;i<priceUnit.length;i++){
    var totalPrice = priceUnit[i] * quantity[i].value);
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
