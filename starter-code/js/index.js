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
  var element = document.getElementById("product1");
  var itemPrice = element.getAttribute("value");

  
  function getTotalPrice() {
    var totalPrice = itemPrice * itemQuantity;
    var noPrice = document.getElementById("no-price");
    var parent = document.getElementById("price-tag");
    noPrice.innerHTML = "$ " + totalPrice.toFixed(2);
    console.log(totalPrice);
    console.log(itemPrice);
    console.log(itemQuantity);
  }

  calculatePriceButton.onclick = getTotalPrice;

  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
