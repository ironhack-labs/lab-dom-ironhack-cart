

// function deleteItem(e){
//   // var button = document.getElementsByClassName('delete-button');
//   // button.onclick = function () {

//   // }
// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

function getTotalPrice() {
  var totalPrice = document.getElementsByClassName('unit-price')[0].innerText;
  console.log(totalPrice);
  var quantifyOfItems= document.document.querySelector('input[placeholder]').innerText;
  console.log(quantifyOfItems);
}

window.onload = function() {
getTotalPrice();
}

// var unitPrice = document.getElementsByClassName('total-price');
  // unitPrice.textContent=totalPrice;

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
