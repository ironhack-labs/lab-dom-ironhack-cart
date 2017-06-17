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

function deleteItem(e){
  var parent = document.getElementById('container');
  var item = document.getElementsByClassName("item");
  parent.removeChild(item[e]);
}

// Función DELETE! Funciona, pero elimina el primer ITEM y nunca sobre el que pulso

// function deleteItem() {
//   var parent = document.getElementById('container');
//   var item = document.getElementsByClassName("item");
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//   for (var i = 0; i < deleteButtons.length; i++) {
//     console.log(i);
//     deleteButtons[i].onclick = parent.removeChild(item[i]);
//     console.log(deleteButtons);
//   }
// }
window.onload = function() {
  // var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;
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
