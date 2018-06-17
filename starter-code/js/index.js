function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
}

function createDeleteButton(){
  deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'btn-delete btn');
  deleteItemText = document.createTextNode('Delete Item');
  deleteButton.appendChild(deleteItemText);
  return document.body.appendChild(deleteButton);
}

function getPriceByProduct(itemNode){
  
}

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

function createQuantityInput(){
  input = document.createElement('input');
  input.setAttribute('class', 'quantity-input');
  input.setAttribute('placeholder', 'How many items do you want?');
  input.setAttribute('type', 'number');
  return document.body.appendChild(input);
}

function createQuantityNode(){
  var div = document.createElement('div');
  div.setAttribute('class', 'qty-node');
  document.body.appendChild(div);
  qtySpan = document.createElement('span');
  qtySpan.setAttribute('class', 'qty-text');
  qtyText = document.createTextNode('QTY');
  qtySpan.appendChild(qtyText);
  div.appendChild(qtySpan);
  qtySpan.insertAdjacentElement('afterend', createQuantityInput());
}


function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  var nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'item-name');
  document.body.appendChild(nameDiv);

  nameSpan = document.createElement('span');
  name = document.createTextNode(itemName);
  nameDiv.appendChild(nameSpan);
  nameSpan.appendChild(name);
  var priceDiv = document.createElement('div');
  priceDiv.setAttribute('class', 'item-price');
  nameDiv.insertAdjacentElement('afterend', priceDiv);
  priceSpan = document.createElement('span');
  price = documen.createTextNode(itemUnitPrice);
  priceSpan.appendChild(price);
  priceDiv.appendChild(priceSpan);
}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var j = 0; j<deleteButtons.length ; j++){
    deleteButtons[j].onclick = deleteItem;
  }
};
