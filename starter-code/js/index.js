function deleteItem(e){

}

var numberOfItems = document.getElementsByTagName('input').length;
var arrayOfSubtotals = [];

function getPriceByProduct(itemNode){
  var price = document.getElementsByClassName("unit-price");
  price = parseInt(price[itemNode].innerText);
  return price;
}

function getQuantityByProduct (itemNode){
  var quantity = document.getElementsByTagName("input");
  quantity = parseInt(quantity[itemNode].value);
  return quantity;
}

function getTotalPrice (){
  for (var i = 0; i < numberOfItems; i++) {
    var subtotal = getPriceByProduct(i) * getQuantityByProduct(i);
    arrayOfSubtotals.push(subtotal);
  }
  arrayOfSubtotal.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  }
  )
}


function updatePriceByProduct(productPrice, index){
}

function getTotalPrice() {

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

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
