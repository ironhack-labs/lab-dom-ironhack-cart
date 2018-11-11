function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var price = itemNode.getElementsByClassName('price-value')[0];
  return parseFloat(price.innerText.replace('$','')) || 0;
}

function getQuantityByProduct(itemNode){
  var quantity = itemNode.getElementsByClassName('quantity')[0];
  return parseInt(quantity.value) || 0;
}

function updatePriceByProduct(product, price) {
  var result = document.getElementById('result');
  var price = document.createTextNode('$' + price.toFixed(2));
  result.innerText = '';
  result.appendChild(price);
  
}

function getTotalPrice() {
  var total = 0;
  var products = document.getElementsByClassName('product');
  for (var i=0; i< products.length; i++) {
    var product = products[i];
    var price = getPriceByProduct(product);
    var quantity = getQuantityByProduct(product);
    var totalPrice = price * quantity;
    updatePriceByProduct(product, totalPrice);
    total += totalPrice;
  }
  updateTotalPrice(total);
}

function updateTotalPrice(price) {
  var totalPrice = document.getElementById('total-price');
  var price = document.createTextNode('$'+ price.toFixed(2));
  totalPrice.innerText = '';
  totalPrice.appendChild(price);
}

function calculateProductPrice(product) {

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
