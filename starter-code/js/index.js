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
    .getElementById("product-one-price")
    .getAttribute("value");
    
  var productTwoPrice = document
    .getElementById("product-two-price")
    .getAttribute("value");

  function getTotalPrice() {
    var productOneQuantity = document
      .getElementById("product-one-quantity").value;
    document.getElementById("price-one").innerHTML = (productOnePrice * productOneQuantity).toFixed(2);

    var productTwoQuantity = document
      .getElementById("product-two-quantity").value;
    document.getElementById("price-two").innerHTML = (productTwoPrice * productTwoQuantity).toFixed(2);
  }

  calculatePriceButton.onclick = getTotalPrice;

  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
