function deleteItem(e){

}

function getPriceByProduct(){
var total = document.getElementsByClassName("totalproducto")
var precio = document.getElementsByClassName("precio");
var cantidad = document.getElementsByClassName("cantidad")

for(var i = 0; i<total.length; i++){
  var precio2 = precio[i].innerHTML;
  var cantidad2 = cantidad[i].value
  console.log(precio2);
  console.log(cantidad2);
  var total1 = parseInt(precio2)*parseInt(cantidad2)
  console.log(total1)
  total[i].innerHTML = total1
}
}

function updatePriceByProduct(productPrice, index){

}


//calcularprecios.onclick = document.getElementsByClassName("calcular")
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
