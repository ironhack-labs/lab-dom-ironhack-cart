function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

// Iteration 1
// Calculating the total price for the product
// function getTotalPrice() {
//   var price = document.getElementsByClassName('price')[0];
//   var quantity = document.getElementsByTagName('input')[0];
//   var total = price.innerText * quantity.value
//   var totalPrice = document.getElementById("total")
//   totalPrice.innerText = total
// }

// Iteration 2: Add another product
function getTotalPrice() {
  var price = document.getElementsByClassName('price');
  var quantity = document.getElementsByTagName('input');
  var totalPrice = document.getElementsByClassName("total")
  // Calcular totales
  for (var i=0; i<price.length; i++){
    totalPrice[i].innerText = price[i].innerText * quantity[i].value
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
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
