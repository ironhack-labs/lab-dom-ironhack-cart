function deleteItem(e) {
  var element = e.currentTarget.parentElement.parentElement;
  element.remove();
  }

//itera por todos los productos, coge precio, cantidad y saca subtotal y total
function getTotalPrice() {
  var items = document.getElementsByClassName('item');
  var count = 0;

  for (var i = 0; i < items.length; i++) {
    //[0] pq el byClassName devuelve una array, con 0 te refieres al primero
    var unitPrice = items[i].getElementsByClassName('unit-price')[0].innerHTML;
    var qty = items[i].getElementsByClassName('quantity')[0].value;
    var totalUnit = parseFloat(unitPrice) * parseFloat(qty);

    items[i].getElementsByClassName('total-price')[0].innerHTML = totalUnit;

    count += totalUnit;
  }
  document.getElementById('total-cart').innerHTML = count; 
}

//creo el input para QTY
function createQuantityInput(){
  var input = document.createElement('input')

  input.setAttribute('type', 'number')
  input.setAttribute('value', '0')

  return input
}

//boton delete
function createDeleteButton(){
  var btnDiv = document.createElement('div');
  var btn = document.createElement('button');

  btn.innerText = 'Delete';
  btn.setAttribute('class', 'btn btn-delete');
 
  btnDiv.appendChild(btn);

  return btnDiv;
}

//conjunto de QTY (incluye input llamando fucnión "createQuantityInput()"
function createQuantityNode(){
  var div = document.createElement('div');
  var span = document.createElement('span');
  var input = createQuantityInput();

  span.innerText = 'QTY';
  input.setAttribute('class', 'quantity')

  div.appendChild(span);
  div.appendChild(input);

  return div;
}

//nodo para nombre del item
function createItemNode(dataType, itemData) {
  var div = document.createElement('div');
  var span = document.createElement('span');

  span.innerText = itemData;
  div.appendChild(span);

  return div;
}

//nodo para precio del item
function createPriceNode(dataType, itemData){
  var div = document.createElement('div');
  var span = document.createElement('span');

  if(dataType === 'number'){
    div.innerText = '$';
  }
  span.innerText = itemData;
  span.setAttribute('class','unit-price');
  div.appendChild(span);

  return div;
}

//nodo para subtotal 
function createTotalNode(dataType, itemData) {
  var div = document.createElement('div');
  var span = document.createElement('span');

  div.innerText = '$';
  span.innerText = itemData;
  span.setAttribute('class', 'total-price')
  
  div.appendChild(span);

  return div;
}


function createNewItemRow(itemName, itemUnitPrice){
  var div = document.createElement('div')
  div.setAttribute('class', 'item') //class general para cada producto
  div.appendChild(createItemNode('text', itemName)) //item name
  div.appendChild(createPriceNode('number', itemUnitPrice)) //item price 
  div.appendChild(createQuantityNode()) //quantity
  div.appendChild(createTotalNode('number', '0.00')) //total price
  div.appendChild(createDeleteButton())

  var parent = document.getElementsByClassName('cart')[0]
  parent.appendChild(div) 

  onClicks()
}

function createNewItem(){
  createDeleteButton();

  var addName = document.getElementById('createName')
  var addPrice = document.getElementById('createPrice')
  
  //doy parametros a funct, son los que da el usuario al escribir
  createNewItemRow(addName.value, addPrice.value)
}


onClicks = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

window.onload = onClicks;