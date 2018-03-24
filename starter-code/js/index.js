
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

var items = document.getElementsByClassName("item");
var prices = document.getElementsByClassName("price");
var inputs = document.getElementsByTagName("input");
var subtotals = document.getElementsByClassName("price-subtotal")

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = function () {
    this.setAttribute("value", "");
  }
}



  calculate.onclick = function () {
    for (var i = 0; i < items.length; i++) {
    var counter = 0;
    var inputValue = parseFloat(inputs[i].value);
    var priceValue = parseFloat(prices[i].innerHTML);
    counter = priceValue * inputValue;
    subtotals[i].innerHTML = counter;
    console.log("hola")
    }
    
}








