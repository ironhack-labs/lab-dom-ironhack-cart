'use.strict';

function deleteItem(e) {
  var chooseParent = e.currentTarget.parentNode.parentNode;
  var deleteProduct = e.currentTarget.parentNode;
  chooseParent.removeChild(deleteProduct);
  getTotalPrice();
}



function getPriceByProduct(itemNode) {
  unitPrice = document.getElementsByClassName(itemNode);
  return unitPrice;
}

function updatePriceByProduct(productPrice, index) {

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

function createQuantityInput() {
  var newQuantity = document.createElement('input');
  newQuantity.type = "text";
  newQuantity.setAttribute('class', 'input');
  var parent1 = document.getElementById('products').lastChild;
  parent1.appendChild(newQuantity);
  var newProductTotalPrice = document.createElement('div');
  var newProductTotalPriceContent = document.createElement('p');
  newProductTotalPriceContent.innerHTML = "$";
  var newProductTotalPriceNumber = document.createElement('span');
  newProductTotalPriceNumber.innerHTML = "0";
  newProductTotalPrice.innerHTML = newProductTotalPriceContent.innerHTML + newProductTotalPriceNumber.innerHTML ;
  var parent2 = document.getElementById('products').lastChild;
  parent2.appendChild(newProductTotalPrice);
}

function createDeleteButton() {
  var newButton = document.createElement('button');
  newButton.setAttribute('class', 'btn btn-delete');
  newButton.innerHTML = "Delete";
  var parent = document.getElementById('products').lastChild;
  parent.appendChild(newButton);
}

function createQuantityNode() {
  var newQuantityLabel = document.createElement('label');
  newQuantityLabel.innerHTML = "QTY";
  var parent = document.getElementById('products').lastChild;
  parent.appendChild(newQuantityLabel);
}

function createItemNode(dataType, itemData) {
  var newProductPrice = document.createElement('div');

  newProductPrice.setAttribute('class', 'product-price price');
  newProductPrice.innerHTML = "$"+document.getElementsByClassName("new-item-price")[0].value;
  var newProductName = document.createElement('div');
  newProductName.setAttribute('class', 'product-name');
  newProductName.innerHTML = document.getElementsByClassName("new-item-name")[0].value;
  var parent = document.getElementById('products').lastChild;
  parent.appendChild(newProductName);
  parent.appendChild(newProductPrice);



  //P-Tag with Dollar-Sign, in Produt-Price-Div

}

function createNewItemRow(itemName, itemUnitPrice) {
  var newItemRow = document.createElement('div');
  newItemRow.setAttribute('class', 'product-line');
  var parent = document.getElementById('products');
  parent.appendChild(newItemRow);
}

function createNewItem() {
  createNewItemRow();
  createItemNode();
  createQuantityNode();
  createQuantityInput();
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
