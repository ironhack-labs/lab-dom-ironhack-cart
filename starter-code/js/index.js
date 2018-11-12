function deleteItem(e){
  
}

function getPriceByProduct(itemNode){
  var price = itemNode.getElementsByClassName('price-value')[0];
  return parseFloat(price.innerText.replace('$','')) || 0;
}

function getQuantityByProduct(itemNode){
  var quantity = itemNode.getElementsByClassName('quantity')[0];
  return parseInt(quantity.value) || 0;
}

function updatePriceByProduct(product, price) {
  var result = product.getElementsByClassName('result')[0];
  var price = document.createTextNode('$' + price.toFixed(2));
  result.innerText = '';
  result.appendChild(price);
  
}

function getTotalPrice() {
  var total = 0;
  var products = document.getElementsByClassName('product');
  for (var i=0; i< products.length; i++) {
    var product = products[i];
    var price = getPriceByProduct(product);
    var quantity = getQuantityByProduct(product);
    var totalPrice = price * quantity;
    updatePriceByProduct(product, totalPrice);
    total += totalPrice;
  }
  updateTotalPrice(total);
}

function updateTotalPrice(price) {
  var totalPrice = document.getElementById('total-price');
  var price = document.createTextNode('$'+ price.toFixed(2));
  totalPrice.innerText = '';
  totalPrice.appendChild(price);
}

function createName(name) {
  var nameDiv = document.createElement('div');
  var name = document.createTextNode(name);
  var nameSpan = document.createElement('span');
  nameDiv.classList.add('name');
  nameSpan.appendChild(name);
  nameDiv.appendChild(nameSpan);
  return nameDiv;
}

function createPriceValue(price) {
  var priceDiv = document.createElement('div');
  priceDiv.classList.add('price-value');
  var price = document.createTextNode(price);
  var priceSpan = document.createElement('span');
  priceSpan.appendChild(price);
  priceDiv.appendChild(priceSpan);
  return priceDiv;
}

function createQuantityInput(){
  var quantityDiv = document.createElement('div');
  var label = document.createElement('label');
  label.appendChild(document.createTextNode('QTY'));
  var quantityInput = document.createElement('input');
  quantityInput.setAttribute('type', 'number');
  quantityInput.setAttribute('placeholder', '0');
  quantityInput.setAttribute('class', 'quantity');
  quantityDiv.appendChild(label);
  quantityDiv.appendChild(quantityInput);
  return quantityDiv;
}

function createTotalPrice(){
  var totalDiv = document.createElement('div');
  var totalSpan = document.createElement('span')
  totalSpan.appendChild(document.createTextNode('$0.00'));
  totalSpan.classList.add('result');
  totalDiv.appendChild(totalSpan);
  return totalDiv;
}

function createDeleteButton(){
  var deleteDiv = document.createElement('div');
  var deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn');
  deleteBtn.classList.add('btn-delete');
  deleteBtn.appendChild(document.createTextNode('Delete'));
  deleteBtn.onclick = deleteItem();
  deleteDiv.appendChild(deleteBtn);
  return deleteDiv;
}

function createNewItemRow(itemName, itemUnitPrice){
  var product = document.createElement('div');
  product.classList.add('product');
  product.appendChild(createName(itemName));
  product.appendChild(createPriceValue(itemUnitPrice));
  product.appendChild(createQuantityInput());
  product.appendChild(createTotalPrice());
  product.appendChild(createDeleteButton());

  var chart = document.getElementById('chart');
  chart.appendChild(product);
}

function createNewItem(){
  var itemName = document.querySelector('.new-name').value;
  var itemUnitPrice = parseFloat(document.querySelector('.new-price').value);
  if (itemUnitPrice >= 0) {
    createNewItemRow(itemName, itemUnitPrice);
  } else {
    alert('Introduce a correct price for your product.');
  }
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
