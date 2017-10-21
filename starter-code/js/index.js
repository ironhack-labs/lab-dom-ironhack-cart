function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

/* Function for calculating the total price of one product.
   Gets the number of items the user wants of this product,
   the unit price*/
function getTotalPrice() {
  var price = document.getElementsByClassName("prodPrice");
  var quantity = document.getElementsByClassName("prodQuantity");
  var prodPrice = price[0].getElementsByTagName("span")[0].innerHTML.substr(1);
  var prodQty = quantity[0].getElementsByTagName("input")[0].value;
  var totalPrice = prodPrice*prodQty;
  document.getElementsByClassName("prodTotalPrice")[0].innerHTML = "$"+totalPrice.toFixed(2);
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
