function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var productIndex = itemNode.getAttribute('data-index');

  var price = parseFloat(document.getElementById('product' + productIndex + '-price').innerText.replace('$', ''));
  var qty = parseInt(itemNode.getElementsByTagName('input')[0].value);

  return '$' + (price * qty).toFixed(2);
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = getProducts();

  for (var i = 0; i < products.length; i++) {
    var price = getPriceByProduct(products[i]);
    var productIndex = products[i].getAttribute('data-index');

    document.getElementById('product' + productIndex + '-total').innerText = price;
  }
}

function getProducts() {
  return document.getElementsByClassName('product');
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
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
