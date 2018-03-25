//selection element
//var buttonCalc = document.getElementsByClassName("btn-success")[0];
/*Calculating total price for one product 
buttonCalc.onclick = function () {
  var inPut1 = document.querySelector(".quantity").value;
  var inPut2 = document.querySelector(".cost").innerHTML;
  var qty = Number (inPut1);
  var prc = Number (inPut2);

    
  var costItem = document.querySelector(".total-price");
  costItem.innerHTML = qty * prc;
  
  console.log(costItem);
};

/* update price*/
//var buttonCalc = document.getElementsByClassName("btn-success")[0];

 /*Calculating total price for 2 products
 
  var inPut1 = document.querySelector(".quantity").value;
  var inPut2 = document.querySelector(".cost").innerHTML;
  var inPut3 = document.querySelector(".quantity").value; 
  var inPut4 = document.querySelector(".cost").innerHTML;
  var qty = Number (inPut1);
  var prc = Number (inPut2);
  var qty2 = Number (inPut3);
  var prc2 = Number (inPut4);

  var costItem = document.querySelector(".total-price");
  costItem.innerHTML = qty * prc;
  
  var costItem2 = document.querySelector(".total-price");
  costItem2.innerHTML = qty * prc;
  
  console.log(Number(costItem2.innerHTML) + Number(costItem.innerHTML));*/

/* Calculating total price for all */
var buttonCalc = document.getElementsByClassName("btn-success")[0];
buttonCalc.onclick = function () {

var quantityUnit = document.querySelectorAll(".quantity");
var costUnit = document.querySelectorAll(".cost");
var priceUnit = document.querySelectorAll(".total-price");

var counter = 0;

for (i = 0; i < quantityUnit.length; i++) {
  priceUnit[i].innerHTML = Number(quantityUnit[i].value) * Number(costUnit[i].innerHTML);
  
  counter += Number(priceUnit[i].innerHTML);
}

var bigTotal = counter;

}



/*
function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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

/*window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};*/
