function deleteItem(e) {
  const selfRow = e.target.parentElement.parentElement;
  const parent = selfRow.parentElement;
  parent.removeChild(selfRow);
}

function getPriceByProduct(itemNode) {
  const price = Number(itemNode.innerText.slice(1));

  return price;
}

function updatePriceByProduct(productPrice, index) {
  const itemTotalPriceSpan = index.getElementsByClassName(
    'item-subtotal-price'
  )[0];

  itemTotalPriceSpan.innerText = `$${productPrice}`;
}

function getTotalPrice() {
  const items = document.getElementsByClassName('item-subtotal-price');
  const prices = [...items].map(node => getPriceByProduct(node));
  const totalPrice = prices.reduce((acc, sum) => acc + sum, 0);

  const totalPriceEl = document.getElementById('total-price');

  totalPriceEl.innerText = totalPrice;
}

function createQuantityInput() {
  const itemQuantityInput = document.createElement('input');
  itemQuantityInput.type = 'number';
  itemQuantityInput.value = 1;
  itemQuantityInput.onchange = onChange;

  return itemQuantityInput;
}

function createDeleteButton() {
  const itemDeleteButton = document.createElement('button');
  itemDeleteButton.classList.add('btn');
  itemDeleteButton.classList.add('btn-delete');
  itemDeleteButton.onclick = deleteItem;
  itemDeleteButton.innerText = 'Delete';

  return itemDeleteButton;
}

function createQuantityNode() {
  const itemQuantityLabel = document.createElement('label');
  itemQuantityLabel.innerText = `QTY`;

  return itemQuantityLabel;
}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {
  const cartItems = document.getElementById('cart-items');

  const row = document.createElement('div');
  row.classList.add('row');
  const itemNameSpan = document.createElement('span');
  itemNameSpan.innerText = itemName;
  const itemUnitPriceSpan = document.createElement('span');
  itemUnitPriceSpan.innerText = `$${itemUnitPrice}`;
  itemUnitPriceSpan.classList.add('item-unit-price');
  const itemTotalPriceSpan = document.createElement('span');
  itemTotalPriceSpan.classList.add('item-subtotal-price');
  itemTotalPriceSpan.innerText = `$${itemUnitPrice}`;

  [
    itemNameSpan,
    itemUnitPriceSpan,
    [createQuantityNode(), createQuantityInput()],
    itemTotalPriceSpan,
    createDeleteButton()
  ].forEach(el => {
    const div = document.createElement('div');

    if (el.length !== 2) {
      div.appendChild(el);
    } else {
      div.appendChild(el[0]);
      div.appendChild(el[1]);
    }

    row.appendChild(div);
  });

  cartItems.appendChild(row);
}

function createNewItem() {
  const newItemName = document.getElementById('new-item-name');
  const newItemPrice = document.getElementById('new-item-price');

  const newItemNameValue = newItemName.value;
  const newItemPriceValue = newItemPrice.value;

  if (newItemNameValue !== '' && newItemPriceValue !== '') {
    createNewItemRow(newItemName.value, Number(newItemPrice.value));

    newItemName.value = '';
    newItemPrice.value = '';
  } else {
    alert('Add some info!');
  }
}

function onChange(e) {
  const value = Number(e.target.value);
  const selfRow = e.target.parentElement.parentElement;
  const unitPriceEl = selfRow.getElementsByClassName('item-unit-price')[0];

  const price = getPriceByProduct(unitPriceEl) * value;

  updatePriceByProduct(price, selfRow);
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
