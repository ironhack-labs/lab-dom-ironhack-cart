function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

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

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

  var calculateButton = document.getElementsByClassName("btn-success")[0];
  console.log(calculateButton);
  calculateButton.onclick = function() {
    var singlePrice = document.getElementById("singlePrice").innerText;
    var quantity = document.getElementsByTagName("input")[0].value;
    var totalPrice = parseFloat(Number(singlePrice) * Number(quantity));
    console.log(totalPrice);
  };
};
