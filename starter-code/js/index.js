function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  price = document.getElementsByClassName("price");
  cuantity = document.getElementsByClassName("cuantity");
  result = document.getElementsByClassName("result");
  totalHTML = document.getElementById("total");
  for (var i = 0; i < price.length; i++) {
    var numPrice = parseFloat(price[i].innerHTML);
    var numCuantity = cuantity[i].value;

    var total = numPrice * numCuantity;

    result[i].innerHTML = total;
  }
  var totalPrice = 0;
  for (prices of result) {
    console.log(prices);
    totalPrice += parseFloat(prices.innerHTML);
  }
  console.log(totalPrice);
  totalHTML.innerHTML = totalPrice;
}

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
  //createItemButton.onclick = createNewItem();

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
