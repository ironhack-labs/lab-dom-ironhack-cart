function deleteItem(e){
  var elementParent = document.getElementById('container');
  var elementChild = document.getElementsByClassName('product1');
  elementParent.removeChild(elementChild[e]);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

//Calcular precio total final
function getTotalPrice() {
  var precioCosas = document.getElementsByClassName('precio');
  //console.log(precioCosas[0].innerHTML);
  var cajaInput = document.getElementsByClassName('quantity');
  //console.log(cajaInput[0].value);
  var precioFinal = document.getElementsByClassName('precio-final');
  var total = 0;

  for (var i = 0; i < precioCosas.length; i++) {
    var cadaPrecio = precioCosas[i].innerHTML * cajaInput[i].value;
    total += cadaPrecio;
    precioFinal[i].innerHTML = "$" + cadaPrecio;
    //console.log(total);
    console.log(precioFinal);
  }
  document.getElementById('precio-total').innerHTML = "$" + total;
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
  //createItemButton.onclick = createNewItem;

  /*for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }*/
};
