function getCart() {
  return document.getElementById('cart');
}

function calculateItem(itemNode) {
  const unitPrice = parseFloat(itemNode.getElementsByClassName('unit-price')[0].innerHTML);
  const qty = parseFloat(itemNode.getElementsByTagName('input')[0].value || 0);
  const subTotal = unitPrice * qty;

  itemNode.getElementsByClassName('cost')[0].innerHTML = parseFloat(subTotal).toFixed(2);

  return subTotal
}

function createTotal(cost) {

  let total;

  if (!!document.getElementById('total')) {
    total = document.getElementById('total');
  } else {
    total = document.createElement('h1');
    total.id = "total";
    total.className = "total"
  }
  
  total.innerText = `Total Price: $` + parseFloat(cost).toFixed(2);
  
  return document.getElementsByTagName('body')[0].appendChild(total);
}

function calculate(e) {
  if (!!e) e.preventDefault();

  const items = getCart().children
  let total = 0.00;

  for (let item of items) {
    total += calculateItem(item);
  }

  return void createTotal(total);
}

function deleteItem(e) {
  e.preventDefault();
  const cartNode = getCart();
  cartNode.removeChild(e.target.parentNode);
  calculate();
}

function createQuantityInput(qty) {
  const label = document.createElement('label');
  label.innerText = 'QTY';
  
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'enter a quantity';
  input.value = parseFloat(qty || 0);

  label.appendChild(input);

  return label;
}

function createNewItemNode(itemName, itemUnitPrice, itemQty) {

  const item = document.createElement('div');
  item.className = "item";

  const name = document.createElement('span');
  name.innerText = itemName || 'IronBubble-head';
  name.className = "name";
  item.appendChild(name);

  const unitPrice = document.createElement('span');
  unitPrice.className = "unit-price money";
  unitPrice.innerText = itemUnitPrice;
  item.appendChild(unitPrice);

  const quantity = createQuantityInput(itemQty);
  item.appendChild(quantity);

  const cost = document.createElement('span');
  cost.className = "cost money";
  cost.innerText = parseFloat(itemUnitPrice * itemQty).toFixed(2);
  item.appendChild(cost);

  const deleteButton = document.createElement('button');
  deleteButton.className = "btn btn-delete";
  deleteButton.onclick = deleteItem;
  deleteButton.innerText = "Delete";
  item.appendChild(deleteButton);

  return item;
}

function createNewItem(e) {
  e.preventDefault();

  const itemName = e.target.parentNode.children[0].value;
  const itemPrice = parseFloat(e.target.parentNode.children[1].value).toFixed(2);
  const qty = parseFloat(e.target.parentNode.children[2].value);

  getCart().appendChild(createNewItemNode(itemName, itemPrice, qty));

  calculate();
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = calculate;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
