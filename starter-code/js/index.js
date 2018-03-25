function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var producto = document.getElementsByClassName("producto");
  console.log(producto);
  for(var i = 0; i < producto.length; i++){
    
    var costeUnitario = producto[i].getElementsByClassName("coste-unitario")[0].getAttribute("value");
    console.log(costeUnitario)
    var quantity = producto[i].getElementsByClassName("quantity")[0].value;
    console.log(quantity)
    var totalPrecio = producto[i].getElementsByClassName("total-precio")[0];
    console.log(totalPrecio)

    totalPrecio.setAttribute("value", costeUnitario * quantity);
    totalPrecio.innerHTML = costeUnitario * quantity;
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
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};