var calculatePriceButton = document.getElementById("calculate-price");
calculatePriceButton.onclick = function() {
  var unitPrice = document.getElementById('price').innerText;
  var price = Number(unitPrice.replace("$", " "));
  var totalItems = document.getElementById('unit-input').value;
  var totalPrice = (price * totalItems).toFixed(2);
  document.getElementById('total-price').innerText = "$" + totalPrice;
  var unitPrice2= document.getElementById('price2').innerText;
  var price2 = Number(unitPrice2.replace("$", " "));
  var totalItems2 = document.getElementById('unit-input2').value;
  var totalPrice2 = (price2 * totalItems2).toFixed(2);
  document.getElementById('total-price2').innerText = "$" + totalPrice2;
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
