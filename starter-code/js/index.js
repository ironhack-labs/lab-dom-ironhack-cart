


function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  //cargo en una lista todos los productos que hay que son una item line
  var items = document.getElementsByClassName("item-line");
  console.log('ITEMS --> ', items);
  var result=0;
  // for(var i=0; i<items.length; i++){
  //   //entramos en la lista y la recorremos 
  //   var price =  
  // }

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
 // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    
    deleteButtons[i].onclick = deleteItem;
  }
};
