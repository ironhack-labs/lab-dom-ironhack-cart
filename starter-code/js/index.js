function deleteItem(e) {
  var element = e.currentTarget.parentNode;
  console.log(element);

  element.parentNode.removeChild(element);
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  var price = document.getElementsByClassName("price");
  var quantity = document.getElementsByClassName("quantity");
  var totalProduct = document.getElementsByClassName("total-product");
  var totalPrice = document.getElementById("total-price");

  var total = 0;

  for (var i = 0; i < price.length; i++) {
    totalProduct[i].innerHTML = price[i].textContent * quantity[i].value;

    total += parseInt(totalProduct[i].textContent);
  }
  totalPrice.innerHTML = total;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  var newProductName = document.getElementById("new-product-name");
  var newProductPrice = document.getElementById("new-product-price");
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
  createItemButton.onclick = createNewItem;
};
