
var newButton = document.createElement('button');
var parent = document.getElementsByTagName('section')[0];
var getUnitPrice = document.getElementById('unit-price');
var unitPrice = getUnitPrice.innerText;
var totalPrice = document.getElementById('total-price');


newButton.className = 'btn-success';
newButton.innerText = 'Calculate Price';
parent.appendChild(newButton);



newButton.onclick = function () {
  var input = document.getElementsByTagName('input')[0];
  var subTotalPrice = unitPrice*input.value;
  totalPrice.innerText = subTotalPrice; 
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
*/