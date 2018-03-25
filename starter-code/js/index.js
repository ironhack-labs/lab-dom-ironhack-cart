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
  var productOnePrice = document
    .getElementById("product-one")
    .getAttribute("value");

  function getTotalPrice() {
    var productOneQuantity = document
      .getElementById("product-quantity-one")
      .value;
    var totalPrice = productOnePrice * productOneQuantity;
    console.log(productOnePrice);
    console.log(productOneQuantity);
    console.log(totalPrice);
    var parent = document.getElementById("price");
    console.log(totalPrice);
    parent.innerHTML = totalPrice.toFixed(2);
  }

  calculatePriceButton.onclick = getTotalPrice;

  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
