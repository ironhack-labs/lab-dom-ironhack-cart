function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var totalPrice = document.getElementsByClassName('totalPrice');
  var price = document.getElementsByClassName('itemCost');
  var quantity = document.getElementsByClassName('quantity');
  var numberOfItems = document.getElementsByClassName('itemRow');

  //do a loop
  for(var i =0; i<numberOfItems.length; i++){
  price = Number(price.innerText.replace(/\$/, ""))
  quantity = quantity.value
  totalPrice.innerText = '$' + price * quantity;
  }
}

function changestuff() {
  var totalPrice = document.getElementsByClassName('totalPrice');
  var price = document.getElementsByClassName('itemCost');
  var quantity = document.getElementsByClassName('quantity');
  var numberOfItems = document.getElementsByClassName('itemRow');

  //do a loop
  for(var i =0; i<numberOfItems.length; i++){
  price = Number(price.innerText.replace(/\$/, ""))
  quantity = quantity.value
  totalPrice.innerText = '$' + price * quantity;
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

function somestufff(){
console.log("I was clicked");
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calculatePricesButton');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('deleteButton');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}