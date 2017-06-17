function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  totalItemPrice = [];
  var totalPrice = 0;
  for (var i = 0; i < document.getElementsByClassName('price').length; i++) {
    var itemPrice = document.getElementsByClassName('price');
    var quantity = document.getElementsByTagName('input');
    totalItemPrice[i] = itemPrice[i].innerHTML * parseInt(quantity[i].value);
    document.getElementsByClassName('total-price')[i].innerHTML = totalItemPrice[i];
    totalPrice += totalItemPrice[i];
  }
    document.getElementsByClassName('sum-prices')[0].innerHTML = totalPrice;
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
