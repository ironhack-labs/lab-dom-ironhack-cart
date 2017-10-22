function deleteItem(e){

}

function getPriceByProduct(itemNode, i){
  var itemQTY = document.getElementsByClassName("item-quantity");
  return Math.floor(itemQTY[i].value) * itemNode;
}

function updatePriceByProduct(productPrice, index) {

}

//button event

var button = document.getElementById("btn-success");

function getTotalPrice () {

  var productPrice = document.getElementsByClassName("product-price");
  var totalPrice = document.getElementsByClassName("total-price");
  var sum = 0;
  for (var i = 0; i < productPrice.length; i++) {
   var finalPrice = getPriceByProduct(productPrice[i].innerHTML, i);
   totalPrice[i].innerHTML = parseFloat(finalPrice).toFixed(2);
   sum += Number(parseFloat(finalPrice).toFixed(2));
    }
    var finalSum = document.getElementById("finalSum");
    finalSum.innerHTML = sum;
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
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
