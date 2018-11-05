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
// function getTotalPrice() {
//   var price = document.getElementsByClassName('price');
//   var quantity = document.getElementsByTagName('input');
//   var totalPrice = document.getElementsByClassName("total")
//   // Calcular totales
//   for (var i=0; i<price.length; i++){
//     totalPrice[i].innerText = price[i].innerText * quantity[i].value
//   }
// }

// Iteration 3: Calculating the total price of all products
function getTotalPrice() {
  var price = document.getElementsByClassName('price');
  var quantity = document.getElementsByTagName('input');
  var total = document.getElementsByClassName("total")
  var totalPrice = document.getElementById("total-price")
  // console.log(totalPrice)
  // Calcular subtotales y total
  var totalSum = 0
  for (var i=0; i<price.length; i++){
    total[i].innerText = price[i].innerText * quantity[i].value
    totalSum += Number(total[i].innerText)
  }
  // console.log(totalSum)
  totalPrice.innerText = totalSum
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
