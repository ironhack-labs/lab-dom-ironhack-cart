function updatePriceByProduct(){
  var totalPrices = document.getElementsByClassName("product-price");
  var list = document.getElementsByTagName('article');
  var itemPrices = document.getElementsByClassName('item-price');
  var quantities = document.getElementsByClassName('quantity-input');
  var totalPrice, individualPrice, individualQuantitie;
  for(var i=0; i < list.length; i++){
    individualQuantitie = quantities[i].value;
    individualPrice = itemPrices[i].textContent;
    individualPrice = parseFloat(individualPrice);
    totalPrice = individualPrice * individualQuantitie;
    totalPrice = totalPrice.toFixed(2);
    totalPrice = document.createTextNode(totalPrice);
    totalPrices[i].textContent = "";
    totalPrices[i].appendChild(totalPrice);
    list[i].children[2].insertAdjacentElement('afterend',totalPrices[i]);
  }
}

function getTotalPrice() {
  updatePriceByProduct();
  var priceList = document.getElementsByClassName('product-price');
  var total = 0;
  for(var i = 0; i <priceList.length; i++){
    total += parseFloat(priceList[i].textContent);
  }
  total = total.toFixed(2);
  total = "Total Price: "+total+"$";
  var h2 = document.getElementById('total-price');
  h2.innerHTML = total;
}



function createDeleteButton(){
  deleteDiv = document.createElement('div');
  deleteDiv.setAttribute('class', 'delete-container');
  deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'btn-delete btn');
  deleteItemText = document.createTextNode('Delete');
  deleteButton.appendChild(deleteItemText);
  deleteDiv.appendChild(deleteButton);
  return deleteDiv;
}

function createQuantityInput(){
  input = document.createElement('input');
  input.setAttribute('class', 'quantity-input');
  input.setAttribute('placeholder', 'How many items do you want?');
  input.setAttribute('type', 'number');
  return input;
}

function createQuantityNode(){
  var div = document.createElement('div');
  div.setAttribute('class', 'qty-node');
  var qtySpan = document.createElement('span');
  qtySpan.setAttribute('class', 'qty-text');
  var qtyText = document.createTextNode('QTY');
  qtySpan.appendChild(qtyText);
  var input = document.createElement('input');
  input.setAttribute('class', 'quantity-input');
  input.setAttribute('type', 'number');
  input.setAttribute('value', '0');
  div.appendChild(qtySpan);
  qtySpan.insertAdjacentElement('afterend', input);
  return div;
}

function createItemNameNode(){
  var nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'item-name');

  var itemName = document.getElementById('name-input').value;
  nameSpan = document.createElement('span');
  nameSpan.innerHTML = itemName;
  nameDiv.appendChild(nameSpan);
  return nameDiv;
}

function createItemPriceNode(){
  var priceDiv = document.createElement('div');
  priceDiv.setAttribute('class', 'item-price-container');

  var itemUnitPrice = document.getElementById('price-input').value;
  priceSpan = document.createElement('span');
  priceSpan.setAttribute('class', 'item-price money');
  priceSpan.innerHTML = itemUnitPrice;
  priceDiv.appendChild(priceSpan);
  return priceDiv;
}

function createTotalPriceNode(){
  var priceDiv = document.createElement('div');
  priceDiv.setAttribute('class', 'total-price');
  
  priceSpan = document.createElement('span');
  priceSpan.setAttribute('class', 'product-price money');
  priceSpan.innerHTML = "0.00";
  priceDiv.appendChild(priceSpan);
  return priceDiv;
}
function createNewItemRow(){
  var itemList = document.getElementById('item-list');
  var article = document.createElement('article');
  article.appendChild(createItemNameNode());
  article.appendChild(createItemPriceNode());
  article.appendChild(createQuantityNode());
  article.appendChild(createTotalPriceNode());
  article.appendChild(createDeleteButton());
  itemList.appendChild(article);
  addDeleteFunction();
}

function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
}

function addDeleteFunction(){
  var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var j = 0; j<deleteButtons.length ; j++){
    deleteButtons[j].onclick = deleteItem;
  }
}
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  addDeleteFunction();
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItemRow;
};
