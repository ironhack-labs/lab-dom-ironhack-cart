'use.strict';

function deleteItem(e) {
  var chooseParent = e.currentTarget.parentNode; // var deleteProduct = e.currentTarget.parentNode; chooseParent.removeChild(deleteProduct);
  chooseParent.remove();
  getTotalPrice();
}

function getPriceByProduct(itemNode) {
  unitPrice = document.getElementsByClassName(itemNode);
  return unitPrice;
}

function getTotalPrice() {
  getPriceByProduct('unit-price');
  var unitQTY = document.getElementsByClassName('unit-qty');
  var totalUnitPrice = document.getElementsByClassName('total-price');
  var total = document.getElementById('total');
  total.innerHTML = parseInt(0);
  for (var ix = 0; ix < unitPrice.length; ix++) {
    totalUnitPrice[ix].innerHTML = unitPrice[ix].innerHTML * unitQTY[ix].value;
  }
  for (var iy = 0; iy < unitPrice.length; iy++) {
    total.innerHTML = parseInt(total.innerHTML) + parseInt(totalUnitPrice[iy].innerHTML);
  }
}

function createItemNode(dataType, itemData) {
  var product = document.querySelector('.product-line');
  var newProductLine = product.cloneNode(true);
  var newProductName = newProductLine.children[0];
  newProductName.innerHTML = document.getElementsByClassName("new-item-name")[0].value;
  var newProductPrice = newProductLine.children[1].children[1];
  newProductPrice.innerHTML = document.getElementsByClassName("new-item-price")[0].value;
  var parent = document.getElementById('products');
  parent.appendChild(newProductLine);
}

function createNewItem() {
  createItemNode();
  window.onload();
}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};


// function createQuantityInput() {
//
// }
//
// function createDeleteButton() {
// }
//
// function createQuantityNode() {
// }

// function createNewItemRow(itemName, itemUnitPrice) {
//
// }

// function updatePriceByProduct(productPrice, index) {
//
// }
