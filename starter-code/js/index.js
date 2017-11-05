function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  unitCost = document.getElementsByClassName("cost-unit-span");
  units = document.getElementsByClassName("quantity-input");
  totalCost = document.getElementsByClassName('span-total');
  totalPrice = 0;
  for (i = 0; i < unitCost.length; i++) {
    totalCost[i].innerHTML = unitCost[i].innerText * units[i].value;
    totalPrice += unitCost[i].innerText * units[i].value;
  }
  document.getElementById("total-price").innerHTML = totalPrice;
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
