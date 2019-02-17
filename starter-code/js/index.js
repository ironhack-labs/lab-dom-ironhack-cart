function deleteItem(e){

}


var button = document.getElementById("calculate-button");
button.onclick = function(){
  var precio= document.getElementById("product-price").innerHTML;
  var cantidad= document.getElementById("qty").value;
  var total=parseFloat(precio.replace('$', ''))*cantidad;
  var finalPrice = document.getElementById('final-price');
  contentDiv.setAttribute('final-price', total);

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
