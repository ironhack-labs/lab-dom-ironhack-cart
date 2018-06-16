function deleteItem(e){
  var container = document.getElementById('products-wrp');
  var productNode = e.currentTarget.parentNode.parentNode;

  container.removeChild(productNode);
}

function getPriceByProduct(itemNode){
  var productIndex = itemNode.getAttribute('data-index');

  var price = parseFloat(document.getElementById('product' + productIndex + '-price').innerText.replace('$', ''));
  var qty = parseInt(itemNode.getElementsByTagName('input')[0].value);
  var total = (price * qty).toFixed(2);

  updatePriceByProduct(total, productIndex);
  return total;
}

function updatePriceByProduct(productPrice, index){
  document.getElementById('product' + index + '-total').innerText = '$' + productPrice;
}

function getTotalPrice() {
  var products = getProducts();
  var total = 0;

  for (var i = 0; i < products.length; i++) {
    total += parseFloat(getPriceByProduct(products[i]));
  }

  document.getElementById('total-price').innerHTML = '$' + total.toFixed(2);
}

function createQuantityInput(index){
  var input = createItemNode('input', {
    type: 'number',
    name: 'product' + index + '-qty',
    id: 'product' + index + '-qty',
    value: 0
  });

  return input;
}

function createDeleteButton(){
  var btn = createItemNode('button', {
    type: 'button',
    class: 'btn btn-delete'
  });
  btn.appendChild(document.createTextNode('Delete'));
  btn.onclick = deleteItem;

  var div = createItemNode('div');
  div.appendChild(btn);

  return div;
}

function createQuantityNode(index){
  var label = createItemNode('label', {
    for: 'product' + index + '-qty'
  });
  label.appendChild(document.createTextNode('Qty'));

  var div = createItemNode('div');
  div.appendChild(label);
  div.appendChild(createQuantityInput(index));

  return div;
}

function createNameNode(name) {
  var div = createItemNode('div');
  var span = createItemNode('span');

  span.appendChild(document.createTextNode(name));
  div.appendChild(span);

  return div;
}

function createPriceNode(price, index) {
  var div = createItemNode('div');
  var span = createItemNode('span', { 
    id: 'product' + index + '-price' 
  });

  span.appendChild(document.createTextNode('$' + parseFloat(price).toFixed(2)));
  div.appendChild(span);

  return div;
}

function createTotalNode(index) {
  var div = createItemNode('div');
  var span = createItemNode('span', { 
    id: 'product' + index + '-total' 
  });

  span.appendChild(document.createTextNode('$0.00'));
  div.appendChild(span);

  return div;
}

/**
 * Returns an HTML Element with the attributes given
 * @param {string} dataType - Type of HTML element to create (p, div...)
 * @param {Object} itemData - Object with the attributes
 * @returns {Element}
 */
function createItemNode(dataType, itemData){
  var itemNode = document.createElement(dataType);

  for (var attr in itemData) {
    itemNode.setAttribute(attr, itemData[attr]);
  }

  return itemNode;
}

function createNewItemRow(itemName, itemUnitPrice){
  var index = getCurrentIndex();
  
  var row = createItemNode('div', {
    class: 'product',
    'data-index': index
  });

  row.appendChild(createNameNode(itemName));
  row.appendChild(createPriceNode(itemUnitPrice, index));
  row.appendChild(createQuantityNode(index));
  row.appendChild(createTotalNode(index));
  row.appendChild(createDeleteButton());

  document.getElementById('products-wrp').appendChild(row);
}

function createNewItem(){
  var nameInput = document.getElementById('product-name');
  var priceInput = document.getElementById('product-price');

  if (nameInput.value !== '' && priceInput.value !== '') {
    createNewItemRow(nameInput.value, priceInput.value);

    // Dejamos los input vacíos
    nameInput.value = '';
    priceInput.value = '';
  }
}

/**
 * Returns the next index available to assign to the new product
 * @returns {number}
 */
function getCurrentIndex() {
  var products = getProducts();
  if (products.length > 0) {
    var lastItem = products[products.length - 1];
  
    return parseInt(lastItem.getAttribute('data-index')) + 1;
  } else {
    return 0;
  }
}

/**
 * Returns an HTMLCollection with the products in the cart
 * @returns {HTMLCollection}
 */
function getProducts() {
  return document.getElementsByClassName('product');
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
