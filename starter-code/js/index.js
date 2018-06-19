
 // Wasn't working so just changed input="text" to input="number" to continue. 

/* var quantityInput = document.getElementById('quantity').value;

var deleteItem = function(){
var qtyNumber = Number(quantityInput);

qtyNumber --;

document.getElementById("quantity").value = qtyNumber;

};  */

function getPriceByProduct(itemId){
  var price = document.getElementById(itemId).innerText; 
  return Number(price);
}



function updatePriceByProduct(productPrice, index){  // don't know how to use the index parameter

  var quantityInput = document.getElementById('quantity').value;
  var totalEachProduct = productPrice * quantityInput; 

  document.getElementsByClassName('total-price').innerText = totalEachProduct; 
}


function getTotalPrice() {
  var quantityInput = document.getElementById('quantity').value;

}

function createQuantityInput(){
  var section = document.querySelector(section);
  var div = document.createElement('div'); 
  var span = document.createElement('span'); 
  var input = document.createElement('input'); 

  section.appendChild(div);
  section.appendChild(span);
  section.appendChild(input);

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

function main () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;
  
  //for(var i = 0; i < deleteButtons.length ; i++){
  // deleteButtons[i].addEventListener('click', deleteItem);
  //}
  
}

window.addEventListener('load', main);
