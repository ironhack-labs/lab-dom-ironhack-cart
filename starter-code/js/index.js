/* function deleteItem(e){
  borrara una linea
} */

function getPriceByProduct(itemNode){
  var priceList = documen.getElementsByClassName("cost");
}

function updatePriceByProduct(productPrice, index){
    /* actualiza el total */
for (var index = 0; index < productPrice.length ; i++) {
  document.getElementsByClassName("total[index]").innerHTML = '$' + productPrice;
}

    
}

function getTotalPrice() {
    /* console.log("Hello"); */

    var precio = document.getElementById("cost").innerHTML ;
    var cantidad = document.getElementById("quantity").value;
    var precioLimpio = precio.slice(1);
  
    /* console.log(precio+" "+cantidad);
    console.log("PrecioLimpio " + precioLimpio); */

    var precioTotal = precioLimpio * cantidad;
    /* console.log(precioTotal); */ 

    document.getElementById('total').innerHTML = '$' + precioTotal; 
}


/* function createQuantityInput(){
    coge la cantidad
}

function createDeleteButton(){

}

function createQuantityNode(){  
  var quantityList = document.getElementsByClassName("quantity");

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  nueva linea
}

function createNewItem(){
  crea un nuevo item
} */

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
