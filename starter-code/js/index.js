function deleteItem(e) {

}

function getPriceByProduct(itemNode) {
  return itemNode.textContent.slice(1);
}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  var prices = document.querySelectorAll('.product .product-price');
  var quantities = document.querySelectorAll('.product .product-quantity');
  var prodTotal = document.querySelectorAll('.product .product-total');
  var itemTotal = 0;
  var total = 0;

  for (i = 0; i < prices.length; i++) {
    itemTotal = getPriceByProduct(prices[i]) * quantities[i].value;
    prodTotal[i].innerHTML = itemTotal;
    total += itemTotal;
  }
  document.getElementById('total-price').innerHTML = total;
}

function createQuantityInput() {
  var input = document.createElement('input');
  input.type = 'number';
  input.className = 'product-input input';
  return input;
}

function createDeleteButton() {
  var buttonColumn = createProductColumn();
  var button = document.createElement('button');
  button.appendChild(document.createTextNode('DELETE'));
  button.className = 'btn btn-delete';
  buttonColumn.appendChild(button);
  return buttonColumn;
}

function createQuantityNode() {
  var quantityNode = createProductColumn();
  var qtySpan = document.createElement('span');

  qtySpan.appendChild(document.createTextNode('QTY'));
  quantityNode.appendChild(qtySpan);
  quantityNode.appendChild(createQuantityInput());
  return quantityNode;
}

function createProductColumn() {
  var column = document.createElement('div');
  column.className = 'column';
  return column;
}

function createNewProductTotal() {
  var column = createProductColumn();
  var productTotal = document.createElement('span');

  productTotal.appendChild(document.createTextNode('$0.00'));
  productTotal.className = 'product-total';
  column.appendChild(productTotal);
  return column;
}

function createNewItemName(itemName, itemUnitPrice) {
  var prodName = createProductColumn();
  var prodPrice = createProductColumn();
  var prodNameSpan = document.createElement('span');
  var prodPriceSpan = document.createElement('span');
  var namePriceFragment = document.createDocumentFragment();

  prodNameSpan.appendChild(document.createTextNode(itemName));
  prodNameSpan.className = 'product-name';
  prodPriceSpan.appendChild(document.createTextNode(`$${ parseFloat(itemUnitPrice) }`));
  prodPriceSpan.className = 'product-price';

  prodName.appendChild(prodNameSpan);
  prodPrice.appendChild(prodPriceSpan);

  namePriceFragment.appendChild(prodName);
  namePriceFragment.appendChild(prodPrice);
  return namePriceFragment;
}

function createNewItem() {
  var parent = document.querySelector('.product-container');
  var newProduct = document.createElement('div');
  var newProdName = document.getElementById('new-product-name').value;
  var newProdPrice = document.getElementById('new-product-price').value;

  newProduct.className = 'product flex';
  newProduct.appendChild(createNewItemName(newProdName, newProdPrice));
  newProduct.appendChild(createQuantityNode());
  newProduct.appendChild(createNewProductTotal());
  newProduct.appendChild(createDeleteButton());
  parent.appendChild(newProduct);
}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-product-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
