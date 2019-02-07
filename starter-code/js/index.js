function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var qty = document.getElementsByTagName('input')[0];
  var price = document.getElementsByClassName('product-price')[0].textContent;
  //var arrPrice = [].slice.call(price)
  console.log(qty.value);
  //console.log( arrPrice );
  var a = price.substr(1);
  console.log( parseFloat(a) );
  var totalPrice = a * qty.value;
  console.log(totalPrice);
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
  //var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  /*for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }*/
};
