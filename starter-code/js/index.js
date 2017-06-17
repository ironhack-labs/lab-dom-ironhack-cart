function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var quantities = document.getElementsByClassName("quantities");
  var prices = document.getElementsByClassName("costs");
  var totalPrice = 0;
  for (var i=0; i<quantities.length; i++) {
     var sumProduct = prices[i].innerHTML * quantities[i].value;
    totalPrice += sumProduct;
  }
  document.getElementById("showTotal").innerHTML = totalPrice;
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
  var calculatePriceButton = document.getElementById('btn-success');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

var totalPrice = document.createElement('total');
