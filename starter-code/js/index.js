function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var numOfProducts = document.querySelectorAll('.product-list-item');
  for (var i = 0; i < numOfProducts.length; i++) {
    
  }
  var productPrice = Number(document.querySelectorAll('.value')[0].innerText);
  var quantity = document.querySelectorAll('.quantity')[0].valueAsNumber;
  var totalField = document.querySelectorAll('.total-value')[0];
  var total = productPrice * quantity;
  totalField.innerText = total;
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
