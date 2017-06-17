function calculatePrice() {
  var costUnit = document.getElementsByClassName("oneUnitPrice");
  var quantity = document.getElementsByClassName("quantity");
  var totalPrice = 0;
  for (var i = 0; i < quantity.length; i++) {
    var eachItem = costUnit[i].innerHTML * quantity[i].value;
    totalPrice += eachItem;
    var valorProductoIndividual = document.getElementsByClassName("totalProductPrice");
    valorProductoIndividual[i].innerHTML = eachItem;
  }
  document.getElementById('totalPriceGlobal').innerHTML = totalPrice;
}

function deleteItem(e) {
  parent.removeChild(e);
}

window.onload = function() {
  // var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  var deleteButtons = document.getElementsByClassName('btn-delete');
  var parent = document.getElementsByClassName('container');
  var child = document.getElementsByClassName("item");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem(itemNumber[i]);
  }
};
//
// function getPriceByProduct(itemNode){
//
// }
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
//
