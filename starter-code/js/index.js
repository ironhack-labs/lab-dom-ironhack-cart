function deleteItem(e){

console.log(e.target.parentNode.parentNode.parentNode)
e.target.parentNode.parentNode.parentNode.remove()

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var total = 0

  for(i = 0; i < document.getElementsByClassName('price').length; i++) {
    var rawPrice = document.getElementsByClassName('price')[i].innerHTML
    var price = parseFloat(rawPrice.substring(rawPrice.indexOf('$') + 1, rawPrice.length))

    var unit = rawPrice.substring(rawPrice.indexOf('$'), rawPrice.indexOf('$') + 1)

    var rawQuantity = document.getElementsByClassName('quantity')[i].value
    var quantity = parseInt(rawQuantity)

    if (isNaN(quantity)) {
      break;
    }

    var pricesByItemType = parseFloat(price * quantity).toFixed(2)
    total += parseFloat(price * quantity)
    document.getElementsByClassName('totalPrice')[i].innerHTML = unit + pricesByItemType
  }

  document.getElementsByTagName('h2')[1].childNodes[1].innerHTML = unit + total

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
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
