function deleteItem(e){

}

function getPriceByProduct(){
  var input = document.querySelector("quantity");
  var productPriceSum = document.getElementById("productPrice");
  var total = document.createElement(number);

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var productQuantity = document.getElementById("quantity");
  var productNumber = productQuantity.value;
  var quantityNumber = parseInt(productNumber, 10);

  var singlePrice = document.getElementById("productPrice");
  var priceNumber = singlePrice.textContent;
  var priceDollar = parseFloat(priceDollar.replace(/[^0-9-.]/g, ''));

  var priceTotal = document.getElementById("totalPrice");
  priceTotal.innerText= "$" + (priceDollar * quantityNumber).toString() + ".00"; 

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

//window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

function main() {
  var calculatePriceButton = document.getElementById("calculate-btn");

  calculatePriceButton.addEventListener("click", getTotalPrice);
}

window.addEventListener("load", main);