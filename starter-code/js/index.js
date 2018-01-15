function deleteItem(e){

  var searchParent = e.currentTarget.parentNode.parentNode; 
  var foundParent = searchParent.parentNode;
  foundParent.removeChild(searchParent);

}

function getPriceByProduct(itemNode){


}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  console.log("He entrado");
  var calcularPrecio = document.getElementsByClassName('precio-producto')[0].innerText;
  console.log(calcularPrecio);
  var recogerProducto = document.getElementsByClassName('cantidad_input')[0].value;
  console.log(recogerProducto);

  document.getElementById('cantidad_total').innerHTML = calcularPrecio * recogerProducto + "€";
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

  var nodoNuevo = nodoDiv.cloneNode();

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
