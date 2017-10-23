

var button = document.getElementsByClassName('btn-success');


button.onclick = function() {
  var itemPrice = document.getElementById('itemPrice');
  var quantity = document.getElementById('quantity');
  var totalProductypeCost = (itemPrice * quantity);

  var sumPrice = document.getElementById('sumPrice');
  sumPrice.innerHTML = totalProductypeCost;
};


//Intento






// function deleteItem(e){
//
// }
//


//
// function updatePriceByProduct(productPrice, index){
//
// }
//
// function getTotalPrice() {
//
// }
//
// function createQuantityInput(){
//
// }
//
// function createDeleteButton(){
//
// }
//
// function createQuantityNode(){
//
// }
//
// function createItemNode(dataType, itemData){
//
// }
//
// function createNewItemRow(itemName, itemUnitPrice){
//
// }
//
// function createNewItem(){
//
// }

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;
  //
  // for (var i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].onclick = deleteItem;
  // }

  var button = document.getElementsByClassName('btn-success');
  console.log(button);
};
