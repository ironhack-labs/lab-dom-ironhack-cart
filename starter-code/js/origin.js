function deleteItem(e){

}

function getPriceByProduct(itemNode){
 
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var items = document.getElementsByClassName("wrapper");
  var totalPrice = 0;
  for (i=0; i<items.length; i++) {
    var unitPrice = parseInt(items[i].getElementsByClassName("unitPrice")[0].innerHTML);
    var unitQty = parseInt(items[i].getElementsByClassName("unitQty")[0].value);
    var productPrice = unitPrice * unitQty;
    items[i].getElementsByClassName("totalPerProduct")[0].innerHTML = productPrice;
    totalPrice += productPrice;
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
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};