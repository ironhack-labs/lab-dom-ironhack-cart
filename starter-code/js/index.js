function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var unitPrice = document.getElementsByClassName("price");
  var input = document.getElementsByTagName("input");
  var toPay = document.getElementsByClassName("total-amount");
  var finalPrice = document.getElementById("money");
  var sum = 0;
  for(var i=0; i<unitPrice.length; i++){
    var totalPrice = unitPrice[i].innerHTML * input[i].value;
    toPay[i].innerHTML = totalPrice;
    sum += totalPrice;
  }
  finalPrice.innerHTML = sum;
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

  for(var i = 0; i<deleteButtons.length ; i++)  {
    deleteButtons[i].onclick = deleteItem;
  }
};
