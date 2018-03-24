function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  // accedemos y guardamos en una variable los valores
  var costeUnitario = document.getElementsByClassName("coste-unitario").getAttribute("value");
  for (i=0; i<costeUnitario.length; i++) {
    costeUnitario[i]
  }
  var quantity = document.getElementsByClassName("quantity").value;
  var totalPrecio = document.getElementsByClassName("total-precio");

  //Le añadimos a la etiqueta total-precio el atributo value, con el valor de la multiplicación.
  totalPrecio.setAttribute("value", costeUnitario * quantity);
  //Modificamos el valor en el html
  totalPrecio.innerHTML = costeUnitario * quantity;

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