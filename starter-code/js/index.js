function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

  //var itemPrice = document.getElementsByClassName('price')[0].innerHTML;
  //var quantity = parseInt(document.getElementsByTagName('input')[0].value);
  //var totalItemPrice = itemPrice * quantity;
  //document.getElementsByClassName('total-price')[0].innerHTML = totalItemPrice;

  for (var i = 0; i < document.getElementsByClassName('price').length; i++) {
    var itemPrice = document.getElementsByClassName('price');
    var quantity = document.getElementsByTagName('input');
    var totalItemPrice[i] = itemPrice[i].innerHTML * parseInt(quantity[i].value);

    document.getElementsByClassName('total-price')[i].innerHTML = totalItemPrice[i];
  }

}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
