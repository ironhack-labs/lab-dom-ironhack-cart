function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var prices = []
  var units = []
  var quantities = []

  for(i = 0; i < document.getElementsByClassName('price').length; i++) {
    var rawPrice = document.getElementsByClassName('price')[i].innerHTML
    var price = parseFloat(rawPrice.substring(rawPrice.indexOf('$') + 1, rawPrice.length))
    prices.push(price)

    var unit = rawPrice.substring(rawPrice.indexOf('$'), rawPrice.indexOf('$') + 1)
    units.push(unit)

    var rawQuantity = document.getElementsByClassName('quantity')[i].value
    var quantity = parseInt(rawQuantity)
    quantities.push(quantity)

    document.getElementsByClassName('totalPrice')[i].innerHTML = unit + parseFloat(price * quantity).toFixed(2)
  }
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
