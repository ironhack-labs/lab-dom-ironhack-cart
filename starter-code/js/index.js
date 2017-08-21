function deleteItem(e) {

}

function getPriceByProduct() {
  var precio = document.getElementsByClassName("price1");
  var cantidad = document.getElementsByClassName("QTY");
  var total = document.getElementsByClassName("firstTotal");


  var todoslosprecios = []
  for (var i = 0; i < precio.length; i++) {
    x = precio[i].innerHTML * cantidad[i].value;
    todoslosprecios.push(x)
  }

  for (var i = 0; i < todoslosprecios.length; i++) {
    total[i].innerHTML = todoslosprecios[i];
  }


  var cuantoEs = document.getElementById("precioFinal");

  var superTotal = 0;

  for (var i = 0; i < todoslosprecios.length; i++) {
    superTotal += todoslosprecios[i];
  };
  cuantoEs.innerHTML = "$" + superTotal;
}


/*

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

}*/

window.onload = function(){
var calculatePriceButton = document.getElementById('calc-prices-button');
var createItemButton = document.getElementById('new-item-create');
var deleteButtons = document.getElementsByClassName('btn-delete');

/*calculatePriceButton.onclick = getTotalPrice;
createItemButton.onclick = createNewItem;*/
calculatePriceButton.onclick = function() {
  getPriceByProduct();
}


/*
for(var i = 0; i<deleteButtons.length ; i++){
  deleteButtons[i].onclick = deleteItem;
}*/
};
