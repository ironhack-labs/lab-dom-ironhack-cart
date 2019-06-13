function deleteItem(e) {
  e.path[2].remove();
}

function getPriceByProduct(itemNode) {
  let qty = document.querySelectorAll("input[class=input]");
  let priceArr = [];
  for (i = 0; i < itemNode.length; i++) {
    p = parseInt(itemNode[i].innerText.replace(/\$/g, ""));
    q = parseInt(qty[i].value);
    priceArr.push(p * q);
    updatePriceByProduct(priceArr, i);
  }
}

function updatePriceByProduct(productPrice, index) {
  let total = document.querySelectorAll(".total");

  total[index].innerText = `$${productPrice[index]}.00`;
}

function getTotalPrice() {
  let price = document.querySelectorAll(".price");

  getPriceByProduct(price);

  let total_price = document.querySelectorAll(".total");
  let updatePrice = document.querySelector("#total_price");
  let total = 0;
  for (i = 0; i < total_price.length; i++) {
    total += parseInt(total_price[i].innerText.replace(/\$/g, ""));
  }
  updatePrice.innerText = `$${total}`;
  //total.innerText = `$${price * qty}.00`;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  //var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for (i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

//thingsi will use for later
/*
.innerText.
parseInt(
*/
