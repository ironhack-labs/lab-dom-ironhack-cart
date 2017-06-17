function deleteItem(parentDiv, childDiv){
    var child = document.getElementById(childDiv);
    var parent = document.getElementById(parentDiv);
    parent.removeChild(child);
}

function getPriceByProduct(itemNode){


}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var unitPrice = document.getElementsByClassName("unitPrice");
  var qty = document.getElementsByClassName("qty");
  var totalPrice = document.getElementsByClassName("totalPrice");
  var totalPriceItems = 0;
  for(var i=0; i < 2; i++) {
    var total = Number(unitPrice[i].innerHTML) * qty[i].value;
    totalPrice[i].innerHTML = total;
    totalPriceItems += total;
  }
  document.getElementById("totalPriceItems").innerHTML = totalPriceItems;

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
