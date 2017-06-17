function deleteItem() {
  document.getElementsByClassName("row").style.display = "0";
  return console.log("easdq");

}

function getPriceByProduct(itemNode) {
  itemNode = document.getElementsByClassName("price-product")[0].value;
  return itemNode;

}

function updatePriceByProduct(productPrice, index) {

  getPriceByProduct(productPrice);

}

function getTotalPrice() {

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
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

};
