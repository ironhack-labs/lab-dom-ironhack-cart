
// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// // }

function getTotalPrice() {
let itemQuantity = document.querySelector(".itemQty").value;
let itemUnitPrice = document.querySelector(".price");
let totalProdPrice = document.querySelector(".totalPrice");
// let unitParse = parseFloat(itemUnitPrice);
totalProdPrice.innerHTML = itemQuantity * itemUnitPrice.innerHTML;
console.log(itemQuantity);  
// console.log(unitParse);
console.log(totalProdPrice);
}
// getTotalPrice();
// console.log(totalProdPrice);
// console.log(itemQuantity);
// console.log(itemUnitPrice);
//   (document.getElementById("itemQty").value) * 
// }

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

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice  ;
  // createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }


// document.querySelector(".btn-success").onclick = getTotalPrice();

// document.getElementById("randomPrice").onclick = function() {
// document.getElementById("price").value = Math.random();
};
