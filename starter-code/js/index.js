function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

  let products = document.getElementsByClassName("product-wrapper")
  total = 0
  for (let i = 0; i < products.length; i++) {
    unitPrice = products[i].querySelector(".unit-price").innerHTML
    quantity = products[i].querySelector(".quantity").value
    products[i].querySelector(".total-product-price").innerHTML = unitPrice * quantity
    total += unitPrice * quantity
  };

  document.querySelector(".total-price").innerHTML = total
}


function createQuantityInput() {

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


