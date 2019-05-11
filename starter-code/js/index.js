function deleteItem(e) {
    let itemElement = e.currentTarget.parentElement.parentElement;
    document.getElementById(itemElement.id).parentNode.removeChild(itemElement);
}

function getPriceByProduct(itemNode) {
  let cost = itemNode.getElementsByClassName('unit-cost')[0].innerText.replace('$', '');
  let qty = itemNode.getElementsByClassName('quantity')[0].value;
  return (parseFloat(cost) * Number(qty));
}

function updatePriceByProduct(productPrice, index) {
  document.getElementById(index).getElementsByClassName('total-price')[0].innerText = '$' + productPrice.toFixed(2);
}

function getTotalPrice() {
  
  let arrayLineItem = [];
  let total = 0.0;
  arrayLineItem = document.getElementsByClassName('item-container');

  Array.from(arrayLineItem).forEach((lineItem) => {
    let result = getPriceByProduct(lineItem);
    updatePriceByProduct(result, lineItem.id);
    total += result;
  });

  let totalElement = document.getElementById('total');
  totalElement.innerText = '$' + total.toFixed(2);
}

function createQuantityInput() {
  let input = document.createElement('input');
  input.className = 'quantity';
  input.type = 'text';
  return input;
}

function createDeleteButton() {
  let button = document.createElement('button');
  button.className = 'btn btn-delete';
  button.innerText = 'Delete';
  button.click = deleteItem;

  let div = document.createElement('div');
  div.appendChild(button);

  return div;
}

function createQuantityNode() {
  let label = document.createElement('label');
  label.setAttribute('for', 'qty');
  label.innerText = 'QTY';
   
  let div = document.createElement('div');
  div.appendChild(label);
  div.appendChild(createQuantityInput());

  return div;
}

function createItemNode(dataType, itemData) {

  let div = document.createElement('div');
  let type = document.createElement(dataType);
  type.className = itemData;
  div.appendChild(type);
  return div;
}

function createNewItemRow(itemName, itemUnitPrice) {
  let divItemContainer = document.createElement('div');
  divItemContainer.className = 'item-container';
  let lastId = document.getElementsByClassName('containter')[0].lastElementChild.id;
  divItemContainer.id = Number(lastId) + 1;

  let divProductName = createItemNode('span', 'product-name');
  divProductName.getElementsByClassName('product-name')[0].innerText = itemName;

  let divTotalPrice = createItemNode('span', 'total-price');

  let divUnitCost = createItemNode('span', 'unit-cost');
  divUnitCost.getElementsByClassName('unit-cost')[0].innerText =  '$' + itemUnitPrice;

  divItemContainer.appendChild(divProductName);
  divItemContainer.appendChild(divUnitCost);
  divItemContainer.appendChild(createQuantityNode());
  divItemContainer.appendChild(divTotalPrice);
  divItemContainer.appendChild(createDeleteButton());

  document.getElementsByClassName('containter')[0].appendChild(divItemContainer);

}

function createNewItem() {
  let productName = document.getElementById('name').value;
  let productPrice = document.getElementById('price').value;

  createNewItemRow(productName, productPrice);

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
