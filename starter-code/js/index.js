/* Use at least 3 onclick events
Use at least one getElementById
Use at least one getElementsByTagName

Use at least one getElementsByClassName */

function deleteItem(e){
  let element = e.currentTarget.parentNode.parentNode;
  let parent = element.parentNode;
  parent.removeChild(element);
  getTotalPrice();
}

function getPriceByProduct(itemNode){
  let quantity = 0;
  let sum = 0;
  for (let i= 0; i < itemNode.length; i++) {
    let price = parseFloat(itemNode[i].getElementsByClassName('price')[0].textContent);
    if (itemNode[i].querySelector('.qty').value != '') {
      quantity = parseFloat(itemNode[i].querySelector('.qty').value);
      result = price * quantity;
      sum += result;
      updatePriceByProduct(result, i);
    }
    quantity = 0;
  }
  document.getElementById('total').innerHTML = sum;
}

function updatePriceByProduct(productPrice, index){
  document.getElementsByClassName('tot-prod')[index].innerHTML = productPrice;
}

function getTotalPrice() {
  let productList = document.querySelectorAll(".product-row");
  getPriceByProduct(productList);
}

function createQuantityInput(){
  let quantityContainer = createItemNode('div','');
  quantityContainer.setAttribute('class', 'quantity-container')
  let quantLabel = createItemNode('label', 'QTY');
  quantLabel.setAttribute('for', 'quantity');

  let quantInput = createItemNode('input', '');
  quantInput.setAttribute('type', 'text');
  quantInput.setAttribute('name', 'quantity');
  quantInput.setAttribute('class', 'qty');
  quantInput.setAttribute('placeholder', 'Add quantity...');
  
  quantityContainer.appendChild(quantLabel);
  quantityContainer.appendChild(quantInput);

  return quantityContainer;

}

function createDeleteButton(){
  let btnContainer = createItemNode('div', '');
  let deleteBtn = createItemNode('button', 'Delete');
  deleteBtn.setAttribute('class', 'btn btn-delete');

  btnContainer.appendChild(deleteBtn);

  return btnContainer;

}

function createQuantityNode(){
  
  let quantityNode = createItemNode('div', '');
  let quantParag = createItemNode('p', '$');
  let quantSpan = createItemNode('span', '0.00');
  quantSpan.setAttribute('class', 'tot-prod');

  quantityNode.appendChild(quantParag);
  quantityNode.appendChild(quantSpan);

  return quantityNode;
  

}

function createItemNode(dataType, itemData){
  let elem = document.createElement(dataType);
  elem.innerHTML = itemData;

  return elem;
}

function createNewItemRow(itemName, itemUnitPrice){
  let deleteButtons = document.getElementsByClassName('btn-delete');
  let parentContainer = document.getElementsByClassName('container')[0];
  let rowElement = createItemNode('div','');
  rowElement.setAttribute('class', 'product-row');
  
  let quantity = createQuantityInput();
  let quantNode = createQuantityNode();
  let btnDelete = createDeleteButton();
  
  rowElement.appendChild(itemName);
  rowElement.appendChild(itemUnitPrice);
  rowElement.appendChild(quantity);
  rowElement.appendChild(quantNode);
  rowElement.appendChild(btnDelete);

  let before = document.getElementById('create');

  parentContainer.insertBefore(rowElement, before);

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  
  
}

function createNewItem(){
  let prodName = document.getElementById('item-name').value;
  let prodPrice = document.getElementById('item-price').value;
  let itemName = createItemNode('div', '');
  let paragName = createItemNode('p', '');
  let nameSpan = createItemNode('span', prodName);
  nameSpan.setAttribute('class', 'product-name');
  let itemPrice = createItemNode('div', '');
  let paragPrice = createItemNode('p', '$');
  let priceSpan = createItemNode('span', prodPrice);
  priceSpan.setAttribute('class', 'price');

  paragName.appendChild(nameSpan)
  itemName.appendChild(paragName);
  
  paragPrice.appendChild(priceSpan);
  itemPrice.appendChild(paragPrice);

  createNewItemRow(itemName, itemPrice);

}

function calculatePrices() {
  
  let productList = document.querySelectorAll(".product-row");
  let price = parseFloat(productList[0].getElementsByClassName('price')[0].textContent);
  let quantity = parseFloat(productList[0].querySelector('.qty').getAttribute('value'));
  result = price * quantity;
  
  let prodTot = document.getElementsByClassName('tot-prod');
  prodTot[0].innerHTML = '';
  prodTot[0].innerHTML = result;
  
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
