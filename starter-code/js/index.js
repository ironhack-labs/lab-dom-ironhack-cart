function getPriceByProduct(itemNode) {
  itemNode = document.getElementById(itemNode);
  var value = itemNode.value;
  console.log(value);
}

function getTotalPrice() {
  debugger;
  var items = document.getElementsByClassName('item');
  var total = 0;
  var totalOfProduct = 0;
  var qty = 0;
  var price = 0;

  for (var i = 0; i < items.length; i++) {
    qty = parseInt(document.getElementsByClassName('units')[i].value);
    price = document.getElementsByClassName('price')[i].innerHTML;
    price = price.split('$');
    price = parseInt(price[1]);

    totalOfProduct = qty * price;
    total += totalOfProduct;

    var elementTotal = document.getElementsByClassName('total')[i];
    elementTotal.innerHTML = "$" + total;
  }
  return total;
}

function createQuantityInput() {}
function createDeleteButton() {}
function createQuantityNode() {}
function createItemNode(dataType, itemData) {}
function createNewItemRow(itemName, itemUnitPrice) {}
function createNewItem() {}
function deleteItem(e) {}
function updatePriceByProduct(productPrice, index) {}


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
