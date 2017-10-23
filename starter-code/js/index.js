var quantities = document.getElementsByClassName("amount-value");
var initialPrices = document.getElementsByClassName("unit-price-number");
var totalPrices = document.getElementsByClassName("final-price-value");

var product = document.getElementsByClassName("product")

function deleteItem(e){

}

function getPriceByProduct(itemNode){
  return itemNode.innerText;
}

function getQuantityByProduct(itemNode) {
  return itemNode.valueAsNumber;
}

function multiplyPerQuantityAndUpdate(productPrice, quantity, index){
  var finalPrice = productPrice * quantity;
  totalPrices[index].textContent = finalPrice;
  return finalPrice;
}

function getTotalPrice() {
  var totalValue = 0;
  for (var i = 0; i < product.length; i++) {
    var initialPrice = getPriceByProduct(initialPrices[i]);
    var quantity = getQuantityByProduct(quantities[i]);
    totalValue += multiplyPerQuantityAndUpdate(initialPrice, quantity, i)
  } 
  document.getElementById("total-price").textContent = totalValue;
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
  document.getElementById('calculate-button').onclick = getTotalPrice;
  // var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
