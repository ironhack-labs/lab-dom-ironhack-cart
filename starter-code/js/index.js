function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}



function getTotalPrice() {
  var array = document.getElementsByClassName("total");
  
  for (i = 0; i<array.length; i++){
  document.getElementsByClassName("total")[i].innerHTML= 
  parseInt(document.getElementsByClassName("span-price-unit")[i].innerHTML) *
  parseInt(document.getElementsByClassName("input")[i].value)

   var resultado= [document.getElementsByClassName("span-price-unit")[i].innerHTML * 
   document.getElementsByClassName("input")[i].value]
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

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;



  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}