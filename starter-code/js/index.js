function deleteItem(e) {

}

function getPriceByProduct() {

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var precios = document.getElementsByClassName("prices");
  var cantidad = document.getElementsByName("qty");
  var totalPrecios = document.getElementsByClassName("total");

  for(var i = 0; i < precios.length; i+=1){
    var total= 0
    var numPrecio = parseFloat(precios[i].innerHTML.replace("$",""));
    var numCantidad = parseFloat(cantidad[i].value);
    total = numCantidad * numPrecio;
    totalPrecios[i].innerHTML = '$'+ total.toFixed(2);
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
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;

  //createItemButton.onclick = createNewItem;

  //for(var i = 0; i<deleteButtons.length ; i++){
  //  deleteButtons[i].onclick = deleteItem;
  //}
};
