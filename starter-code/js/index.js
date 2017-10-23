

function getPriceByProduct(itemNode) {
  unitPrice = document.getElementsByClassName(itemNode);
  return unitPrice;
}


function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  getPriceByProduct('unit-price');
  var quantity = document.getElementsByClassName('input');
  var subTotalPrice = document.getElementsByClassName('sub-total');
  var totalPrice = document.getElementById('total');
  totalPrice.innerHTML = parseInt(0);
  for (var ix = 0; ix < unitPrice.length; ix++) {
    subTotalPrice[ix].innerHTML = parseInt(unitPrice[ix].innerHTML * quantity[ix].value);
  }
  for (var jx = 0; jx < unitPrice.length; jx++) {
    totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(subTotalPrice[jx].innerHTML);
  }
}

function deleteItem(e) {
  var products = e.currentTarget.parentNode.parentNode;
  var deleteLine = e.currentTarget.parentNode;
  products.removeChild(deleteLine);
  getTotalPrice();
}


function createNewItemRow(itemName, itemUnitPrice) {
  var orgProduct = document.querySelector('.product-line');
  var newProductLine = orgProduct.cloneNode(true);

  var newProductName = newProductLine.children[0];
  newProductName.innerHTML = document.getElementsByClassName('new-product-name')[0].value;

  var newProductPrice = newProductLine.children[1].children[0];
  newProductPrice.innerHTML = document.getElementsByClassName('new-product-price')[0].value;
  console.log(newProductPrice);

  var parent = document.getElementById('products');
  parent.appendChild(newProductLine);

 
}

function createNewItem() {
  createNewItemRow();
  createDeleteButton();
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

