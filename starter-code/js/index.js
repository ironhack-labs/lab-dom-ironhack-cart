function deleteItem(e){
  var parent = document.getElementById('all-items');
  var items = document.getElementsByClassName("item");
  parent.removeChild(items[e]);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var quantities = document.getElementsByClassName("quantities");
  var prices = document.getElementsByClassName("costs");
  var totalProductPrice = document.getElementsByClassName("price");
  var totalPrice = 0;
  for (var i=0; i<quantities.length; i++) {
    var eachProduct = quantities[i].value * prices[i].innerHTML;
    totalPrice += eachProduct;
    totalProductPrice[i].innerHTML = eachProduct;
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

  /*for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }*/
};
