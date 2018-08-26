function deleteItem(e) {}

function getPriceByProduct(itemNode) {
  let row = document.getElementsByTagName("tr")[itemNode];
  let priceCell = row.getElementsByTagName("td")[1].innerText;
  let price = priceCell.replace("$", "");
  // let firstRowPrice = firstRow.getElementsByTagName("td")[1];
  // return firstRowPrice;
  return price;
}

function updatePriceByProduct(productPrice, index) {
  let row = document.getElementsByTagName("tr")[rowNumber];
  let quantity = row.getElementsByTagName("td")[2];
  return quantity;
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
