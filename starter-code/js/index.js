var calculatePriceButton = document.getElementById("calculate-price");
calculatePriceButton.onclick = function() {
  var unitPrice = document.getElementById('price').innerText;
  var price = Number(unitPrice.replace("$", " "));
  var totalItems = document.getElementById('unit-input').value;
  var totalPrice = (price * totalItems).toFixed(2);
  document.getElementById('total-price').innerText = "$" + totalPrice;
}


function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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
