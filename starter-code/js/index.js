function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var price = itemNode.getAttribute('value');
  return price;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var prices = document.getElementsByClassName('price');
  var sum = 0;
  
  for (var i = 0; i < prices.length; i++) {
    var price = getPriceByProduct(prices[i]);
    var qty = document.getElementsByClassName('quantity')[i].getAttribute('value');
    var sumPrice = price * qty;
    sum += sumPrice;
  }
  document.getElementById("total-price").innerHTML=sum;

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
