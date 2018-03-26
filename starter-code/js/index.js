function deleteItem(e) {
  e.currentTarget.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode){
  var precio = document.getElementsByClassName("cost")[itemNode].innerHTML;
  return parseInt(precio);
}

function updatePriceByProduct(productPrice, index){
  //coge que cantidad hay del input y actualiza el total con la multiplicacion por el precio
  var cantidad = document.getElementsByClassName("quantity")[index].getElementsByTagName("input")[0].value;
  /* console.log(productPrice, index, cantidad) */
  document.getElementsByClassName("total-item")[index].innerHTML ="$" + productPrice * cantidad;
  
  return productPrice * cantidad;
}

function getTotalPrice() {
  var lista = document.getElementsByClassName("producto").length;
  /* console.log(lista); */
  var precioTotal = 0;
  for (var i=0; i<lista; i++) {
    precioTotal += updatePriceByProduct(getPriceByProduct(i),i);
  }
  /* console.log(precioTotal); */
  document.getElementById("total-price").getElementsByTagName("h2")[0].getElementsByTagName("span")[0].innerHTML = "$" + precioTotal;
  
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