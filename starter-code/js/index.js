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
  var tituloPrecio = document.getElementById("totalPrice");
  var precioFinal = 0;

  for(var i = 0; i < precios.length; i+=1){
    var totalProducto = 0
    var numPrecio = parseFloat(precios[i].innerHTML.replace("$",""));
    var numCantidad = parseFloat(cantidad[i].value);
    totalProducto = numCantidad * numPrecio;
    precioFinal += totalProducto;
    totalPrecios[i].innerHTML = '$'+ totalProducto.toFixed(2);
  }
  
  tituloPrecio.innerHTML = 'Total Price $'+ precioFinal.toFixed(2);
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
