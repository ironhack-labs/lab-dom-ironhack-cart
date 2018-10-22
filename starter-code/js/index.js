// function deleteItem(e){

// }

// Create a click event for the Calculate Prices button
// This event will execute a function that:
// Retrieves the unit price of the product
// Retrieves the quantity of items desired
// Calculates the total price based on this data
// Updates the total price in the DOM


// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

var price = document.querySelectorAll(".cost");
var inputTag = document.querySelectorAll("input");
var totalPrice = document.querySelectorAll(".total-price");
var calculateBtn = document.querySelector(".btn-success");
var bigPrice = document.querySelector(".big-price");


function getTotalPrice() {
  for (var i = 0; i < price.length; i++) {
    totalPrice[i].innerHTML = price[i].innerHTML * inputTag[i].value;
  }

};
calculateBtn.onclick = getTotalPrice;



var temp = 0;
var getInput = document.querySelector(".total");

function getBigTotalPrice() {
  for (var i = 0; i < price.length; i++) {
    totalPrice[i].innerHTML += temp;
  }
};
getInput.innerHTML = temp;




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

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
