/////////////////////////////////
////////  DELETE BUTTON  ////////
/////////////////////////////////

var deleteButtons = []
deleteButtons.push(document.getElementsByClassName('btn-delete'));

function botonBorrar(x){
  var list = x.currentTarget.parentNode;
  var remove = list.parentNode;
  return document.getElementsByClassName.removeChild(remove);
}	  

/////////////////////////////////
////////  PRECIO TOTAL  /////////
/////////////////////////////////


function getTotalPrice() {
var precios = document.getElementsByClassName("costo");
var preciosArray = [];
for (var i=0; i < precios.length; i++) {
  var total = precios[i];
  preciosArray.push(total);
  }
}
///////////////////////////////////////
////////  PRECIO POR PRODUCTO  ////////
///////////////////////////////////////

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}

/////////////////////////////////
////////////  TOTAL  ////////////
/////////////////////////////////

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
  var deleteButtons = document.getElementsByClassName("btn-delete");

  

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
