function deleteItem(e){
  var cart = document.getElementById('cart');
  var products = document.getElementsByClassName('btn');
  var product = e.currentTarget;
  cart.removeChild(product.parentNode);
  getTotalPrice();
}

function getTotalPrice() {
  var product = document.getElementsByClassName('btn');
  for(var i=0; i<product.length; i++){
    var price = product[i].children[1].children[0].innerHTML;
    var quantity = product[i].children[2].children[0].value;
    var totalPrice = parseInt(quantity) * parseInt(price);
    product[i].children[3].children[0].innerHTML = totalPrice;
  }
  var totalCart = 0;
  for(var j=0; j<product.length; j++){
    var totalProduct = product[j].children[3].children[0].innerHTML;
    var totalCart = parseInt(totalCart) + parseInt(totalProduct);
  }
  document.getElementById('total-cart').innerHTML = "$" + totalCart;
}

function createQuantityInput(){
  var newInput = document.createElement('input');
  newInput.setAttribute('type','number');
  newInput.setAttribute('id','quantity');
  newInput.setAttribute('value', 0);
  return newInput;
}

function createDeleteButton(){
  var button = document.createElement('button');
  button.setAttribute('class', 'btn-delete');
  button.innerHTML = 'Delete';
  return button;
}

function createQuantityNode(){
  var newDivInput = document.createElement('div');
  newDivInput.setAttribute('class', 'quantity');
  newDivInput.innerHTML = "QTY";
  newDivInput.appendChild(createQuantityInput());
  return newDivInput;
}

function createItemNode(dataType, itemData){
  var newInputName = document.getElementById('input-name').value;
  var newInputPrice = document.getElementById('input-price').value;
  var item = document.createElement(dataType);
  item.setAttribute('class',itemData);
  createNewItemRow(newInputName, newInputPrice, item);
  item.appendChild(createQuantityNode());
  var newDivTotal = document.createElement('div');
  newDivTotal.setAttribute('class', 'price-total');
  newDivTotal.innerHTML = '$';
  var newSpanTotal = document.createElement('span');
  newSpanTotal.setAttribute('id', 'total-price');
  newSpanTotal.innerHTML = "0";
  newDivTotal.appendChild(newSpanTotal);
  item.appendChild(newDivTotal);
  item.appendChild(createDeleteButton());
  return item;
}

function createNewItemRow(itemName, itemUnitPrice, item){
  var newDivName = document.createElement('div');
  newDivName.setAttribute('class', 'name');
  var newSpanName = document.createElement('span');
  newSpanName.innerHTML = itemName;
  newDivName.appendChild(newSpanName);
  var newDivPrice = document.createElement('div');
  newDivPrice.setAttribute('class', 'price-unit');
  newDivPrice.innerHTML = "$";
  var newSpanPrice = document.createElement('span');
  newSpanPrice.setAttribute('id', 'price');
  newSpanPrice.setAttribute('value', itemUnitPrice);
  newSpanPrice.innerHTML = itemUnitPrice;
  newDivPrice.appendChild(newSpanPrice);
  item.appendChild(newDivName);
  item.appendChild(newDivPrice);
}

function createNewItem(){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var parent = document.getElementById('cart');
  parent.appendChild(createItemNode('div','btn'));
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  document.getElementById('input-name').value = "";
  document.getElementById('input-price').value = "";
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
