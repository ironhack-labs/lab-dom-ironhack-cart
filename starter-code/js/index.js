function deleteItem(e){
  var selectedRow = e.currentTarget.parentNode.parentNode;
  var producto = selectedRow.parentNode;
  producto.removeChild(selectedRow)
}

function getPriceByProduct(itemNode){

  var cantidad = document.getElementsByClassName ("quantity").value;
  var precio = document.getElementsByClassName ("productPrice").value;
  
  document.getElementById ("totalUnProd").innerHTML = cantidad * precio
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var totalPrice = 0;
  var totalUnProd = document.getElementsById ("totalUnProd")

  for (var i = 0; i < totalUnProd.length; i++){
    var price = getPriceByProduct(totalUnProd[i]);

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
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
