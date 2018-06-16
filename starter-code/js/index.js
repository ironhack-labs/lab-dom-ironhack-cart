function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var productIndex = itemNode.getAttribute('data-index');

  var price = parseFloat(document.getElementById('product' + productIndex + '-price').innerText.replace('$', ''));
  var qty = parseInt(itemNode.getElementsByTagName('input')[0].value);
  var total = (price * qty).toFixed(2);

  document.getElementById('product' + productIndex + '-total').innerText = '$' + total;
  return total;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = getProducts();
  var total = 0;

  for (var i = 0; i < products.length; i++) {
    total += parseFloat(getPriceByProduct(products[i]));
  }

  document.getElementById('total-price').innerHTML = '$' + total.toFixed(2);
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
