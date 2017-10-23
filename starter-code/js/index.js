function deleteItem(e) {
  var products = e.currentTarget.parentNode;
  // var deleteLine = e.currentTarget.parentNode;
  products.remove();
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

function createQuantityInput() {
  // var newInputDiv = document.createElement('div');
  // newInputDiv.setAttribute('class', 'qty');
  //
  // var newQuantity = document.createElement('input');
  // newQuantity.type = "text";
  // newQuantity.setAttribute('class', 'input');
  //
  // var parent = document.getElementById('products').lastChild;
  // parent.appendChild(newQuantity);
}

function createDeleteButton() {
  // var newDeleteButton = document.createElement('button');
  // newDeleteButton.innerHTML = 'Delete';
  // newDeleteButton.setAttribute('class', 'btn btn-delete');
  //
  //
  // var parent = document.getElementById('products').lastChild;
  // parent.appendChild(newDeleteButton);
}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {
  // var newProductPrice = document.createElement('div');
  // newProductPrice.setAttribute('class', 'product-cost');
  // newProductPrice.innerHTML = document.getElementsByClassName("new-product-price")[0].value + '$';
  // var newProductName = document.createElement('div');
  // newProductName.setAttribute('class', 'product-name');
  // newProductName.innerHTML = document.getElementsByClassName("new-product-name")[0].value;
  // var parent = document.getElementById('products').lastChild;
  // parent.appendChild(newProductName);
  // parent.appendChild(newProductPrice);
}

function createNewItemRow(itemName, itemUnitPrice) {
  var orgProduct = document.querySelector('.product-line');
  var newProductLine = orgProduct.cloneNode(true);
  newProductLine.removeAttribute('id');

  var newProductName = newProductLine.children[0];

  newProductName.innerHTML = document.getElementsByClassName('new-product-name')[0].value;

  var newProductPrice = newProductLine.children[1].children[0];
  newProductPrice.innerHTML = document.getElementsByClassName('new-product-price')[0].value;
  console.log(newProductPrice);

  var parent = document.getElementById('products');
  parent.appendChild(newProductLine);

  // var newItemRow = document.createElement('div');
  // newItemRow.setAttribute('class', 'product-line');
  // var parent = document.getElementById('products');
  // parent.appendChild(newItemRow).lastChild;
}

function createNewItem() {
  createNewItemRow();
  // createItemNode();
  // createQuantityNode();
  // createQuantityInput();
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
