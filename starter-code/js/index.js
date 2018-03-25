function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
    /* console.log("Hello"); */

    var precio = document.getElementById("cost").innerHTML ;
    var cantidad = document.getElementById("quantity").value;
    var precioLimpio = parseInt(precio.slice(10));
  
    /* console.log(precio+" "+cantidad);
    console.log("PrecioLimpio " + precioLimpio); */

    var precioTotal = precioLimpio * cantidad;
    /* console.log(precioTotal); */

    document.getElementById('total').innerHTML = '$' + precioTotal; 
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
