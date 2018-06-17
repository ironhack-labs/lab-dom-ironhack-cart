function deleteItem(e){



}

function getPriceByProduct(){
var total = document.getElementsByClassName("totalproducto")
var precio = document.getElementsByClassName("precio");
var cantidad = document.getElementsByClassName("cantidad")

for(var i = 0; i<total.length; i++){
  var precio2 = precio[i].innerHTML;
  var cantidad2 = cantidad[i].value
  var total1 = parseInt(precio2)*parseInt(cantidad2)
  total[i].innerHTML = total1
}
}

function updatePriceByProduct(productPrice, index){

}


function getTotalPrice() { 
var precios = document.getElementsByClassName("totalproducto");
var preciototal = 0
for(var j = 0; j<precios.length; j++){
preciototal += parseInt(precios[j].innerHTML);

}
var global = document.getElementById('global');
global.innerHTML = preciototal;

}

preciototal=document.getElementsByClassName("global").value;

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
  var deleteButtons = document.getElementsByClassName('delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
