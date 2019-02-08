function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  //var productPrice = getElementByValue
 // var idPrice = document.getElementById('price');
 // console.log(idPrice);
 /* var prices = price.getAttribute('id');
  console.log(prices);*/
  var prices = document.getElementById('price').innerHTML;
// console.log(prices);
  var priceNumber = prices.substring(1);
 // console.log(priceNumber);
  var input = document.getElementsByTagName('input')[0];
 // console.log(input.value);
  var totalPrice = parseInt(priceNumber) * input.value;
 // console.log(totalPrice);
  var totalSum = document.getElementById('totalSumId');
  totalSum.innerHTML = '$' + totalPrice;

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
//  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
 // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
