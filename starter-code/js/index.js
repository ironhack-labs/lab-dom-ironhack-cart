function deleteItem(e) {}

function getPriceByProduct(itemNode) {
  let row = document.getElementsByTagName("tr")[itemNode];
  let priceCell = row.getElementsByTagName("td")[1].innerText;
  let productPrice = priceCell.replace("$", "");
  return productPrice;
}

function updatePriceByProduct(productPrice, index) {
  let idString = "qty" + index;
  let quantity = document.getElementById(idString).value;
  let productCost = quantity * productPrice;
  return productCost;
}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
