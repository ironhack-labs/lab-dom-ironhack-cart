
// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }


// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
  
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   // calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
  
//   document.getElementsByClassName("btn").onclick = function() {
//     console.log("fdsadvsdv")
//   } 
// };
console.log("connected");

var calculate = document.getElementById("calculate");
var total = document.getElementById("price-total");
var container = document.getElementById("container");
var create = document.getElementById("create")
var doom = document.getElementsByClassName("btn-delete");
var items = document.getElementsByClassName("item");
var prices = document.getElementsByClassName("price");
var subtotals = document.getElementsByClassName("price-subtotal")
var rows = document.getElementsByClassName("row");
var button = document.getElementsByTagName("button");
var inputs = document.getElementsByTagName("input");


for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = function () {
    this.setAttribute("value", "");
  }
};

calculate.onclick = function () {
  var counterTotal = 0;
  for (var i = 0; i < rows.length; i++) {
    subtotals[i].innerHTML = parseFloat(inputs[i].value) * parseFloat(prices[i].innerHTML);
    counterTotal += +subtotals[i].innerHTML;
    total.innerHTML = counterTotal;
  } 
};

for (var i = 0; i < doom.length; i++) {
  doom[i].onclick = function (e) {
    container.removeChild(e.currentTarget.parentNode.parentNode);
  }

};












