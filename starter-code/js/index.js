function deleteItem(e){
  var pathArray = e.path;
  pathArray[3].removeChild(pathArray[2]);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var rows = document.getElementsByClassName('main');

  var sum = 0;

  for (var i = 0; i < rows.length; i++) {
    var quantity = rows[i].querySelector('.input-quantity').value;
    quantity = parseInt(quantity);

    var price = rows[i].querySelector('.price').innerText;
    price = price.split('');
    price.shift();
    price = price.join('');
    price = parseFloat(price);

    var totalPrice = rows[i].querySelector('.total-price');
    totalPrice.innerText = '$' + parseFloat(quantity * price).toFixed(2);   

    sum += parseFloat(quantity * price);
  }

  var sumPrice = document.getElementsByClassName('sum-price');
  sumPrice[0].innerText = 'Total Price: $' + sum.toFixed(2);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  var rows = document.getElementsByClassName('list');

  var div = document.createElement('div');
  div.setAttribute('class', 'flex main');

  rows[rows.length-1].appendChild(div);

  var nameDiv = document.createElement('div');
  var nameSpan = document.createElement('span');
  nameSpan.innerText = itemName;

  nameDiv.appendChild(nameSpan);
  div.appendChild(nameDiv);

  var priceDiv = document.createElement('div');
  var priceSpan = document.createElement('span');
  priceSpan.setAttribute('class', 'price');
  priceSpan.innerText = '$' + itemUnitPrice + '.00';

  priceDiv.appendChild(priceSpan);
  div.appendChild(priceDiv);

  var qtyDiv = document.createElement('div');
  qtyDiv.setAttribute('class', 'flex');
  var qtyLabel = document.createElement('label');
  qtyLabel.setAttribute('for', 'quantity');
  qtyLabel.setAttribute('class', 'quantity');
  qtyLabel.innerText = 'QTY';
  var qtyInput = document.createElement('input');
  qtyInput.setAttribute('type', 'text');
  qtyInput.setAttribute('class', 'input-quantity');
  qtyInput.setAttribute('value', '0');

  qtyDiv.appendChild(qtyLabel);
  qtyDiv.appendChild(qtyInput);
  div.appendChild(qtyDiv);

  var totalPriceDiv = document.createElement('div');
  var totalPriceSpan = document.createElement('span');
  totalPriceSpan.setAttribute('class', 'total-price');
  totalPriceSpan.innerText = '$0.00';

  totalPriceDiv.appendChild(totalPriceSpan);
  div.appendChild(totalPriceDiv);

  var deleteButtonDiv = document.createElement('div');
  var deleteButtonButton = document.createElement('button');
  deleteButtonButton.setAttribute('class', 'btn');
  deleteButtonButton.setAttribute('class', 'btn-delete');
  deleteButtonButton.innerText = 'Delete';

  deleteButtonDiv.appendChild(deleteButtonButton);
  div.appendChild(deleteButtonDiv);
}

function createNewItem(){
  var newRow = document.getElementsByClassName('flex-new');

  var itemName = newRow[0].querySelector('.item-name');
  var itemUnitPrice = newRow[0].querySelector('.item-price');

  createNewItemRow(itemName.value, itemUnitPrice.value);

  itemName.innerHTML = '';
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