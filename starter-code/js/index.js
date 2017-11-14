/*function deleteItem(e) {
  var btnRemove = document.getElementById('removeBtn');
  var removing = document.getElementsByClassName("container");
  btnRemove.removeChild(container);
}*/


/*function getPriceByProduct(element) {

}*/

/*function getPriceByProduct(itemNode) {

}*/

/*function updatePriceByProduct(productPrice, index) {

}*/

function getTotalPrice() {
  var totalPrice = 0;
  for (i = 0; i < document.getElementsByClassName("cost").length; i++) {
    var price = document.getElementsByClassName("cost")[i].innerHTML;
    var quantity = document.getElementsByClassName("QTY")[i].value;
    var totals = (price * quantity);
    document.getElementsByClassName("totalCost")[i].innerHTML = totals;
    totalPrice += totals;
  }

  document.getElementById("super-total-price").innerHTML = totalPrice;
}


function createQuantityInput() {}

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
