function deleteItem(e) {

}

function getPriceByProduct(itemNode) {
  let prices = document.querySelectorAll(".price");
  let unitPrice = [];
  for (const unit of prices) {
    unitPrice.push(parseInt(unit.innerText));

  }
  console.log(unitPrice);
  return unitPrice;
}

function updatePriceByProduct(productPrice) {
  let total = document.querySelectorAll(".total-price");
  for (let i = 0; i < total.length; i++) {
    total[i].innerText = productPrice[i];
  }
}

function getTotalPrice(price, quantity) {
  ;
  let totalPrice = [];

  for (let i = 0; i < price.length; i++) {
    totalPrice[i] = price[i] * quantity[i];
  }

  console.log(totalPrice);
  return totalPrice;
}

function createQuantityInput() {
  let unit = document.querySelectorAll(".quantity");
  let quantity = [];
  for (const qty of unit) {
    quantity.push(parseFloat(qty.value));
  }
  console.log(quantity);
  return quantity;

}

function finalPrice(totalPrice) {
  tlprice = 0;
  totalPrice.reduce(function (acc, val) {
    tl = acc + val;
  }, 0)
  return tlprice;
  console.log(tlprice)
}

function getFinalPrice(finalNumber) {
  document.querySelector(".finalNumber").innerText = finalNumber;
}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
getPriceByProduct();
document.querySelector(".btn-success").onclick = function () {


    updatePriceByProduct(getTotalPrice(getPriceByProduct(), createQuantityInput());




    }