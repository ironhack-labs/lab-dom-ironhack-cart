function deleteProduct(e) {
  var product = e.currentTarget.parentNode.parentNode;
  product.remove();
}

function getPriceByProduct(itemNode) {
  return parseFloat(itemNode.textContent).toFixed(2);
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
}

function createDeleteButton() {
}

function createQuantityNode() {
}

function createProductColumn() {
}

function createNewProductTotal() {
}

function createNewItemName(itemName, itemUnitPrice) {
}

function createNewItem() {
  var parent = document.querySelector('.product-container');
  var newProdName = document.getElementById('new-product-name').value;
  var newProdPrice = parseFloat(document.getElementById('new-product-price').value).toFixed(2);
  var newProduct = document.createElement('div');
  newProduct.className = 'product flex';
  newProduct.innerHTML = `<div class="column"><span class="product-name">${ newProdName }</span></div>
  <div class="column"><span>$</span><span class=product-price>${ newProdPrice }</span></div>
  <div class="column"><span>QTY </span><input type="number" placeholder=" 0" class="product-quantity input"></div>
  <div class="column"><span>$</span><span class="product-total">0.00</span></div>
  <div class="column"><button class="btn btn-delete">DELETE</button></div>`;
  parent.appendChild(newProduct);
}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-product-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteProduct;
  }
};
