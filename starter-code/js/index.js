function deleteItem(e){
  var parent = e.path[3];
  var child = e.path[2];
  var curr = e.currentTarget.parentNode;
  //console.log("Entro al delete",parent,child,curr);
  parent.removeChild(child);
}

function getPriceByProduct(itemNode){
  return parseFloat(itemNode.textContent.replace('$',''));
}

function updatePriceByProduct(productPrice, index){
  var totalPriceColle = document.getElementsByClassName('totalPrice');
  var totalPrice = totalPriceColle[index];
  totalPrice.innerHTML = '$ ' + productPrice;
}

function getTotalPrice() {
  var unitPriceColle = document.getElementsByClassName('unitPrice');
  var qoutityColle = document.getElementsByClassName('inputQuatity');
  var totalPrice = 0;
  for(var i=0;i<unitPriceColle.length;i++){
    var unitPrice = unitPriceColle[i];
    var qoutity = qoutityColle[i];
    var multiply = getPriceByProduct(unitPrice) * parseFloat(qoutity.value == "" ? 0 : qoutity.value);
    updatePriceByProduct(multiply,i);
    totalPrice += multiply;
  }
  var totaFinal = document.getElementById('totalFinal');
  totaFinal.innerText = '$ ' + totalPrice;
}

function createQuantityInput(){
  var div = document.createElement('div');
  var label = document.createElement('label');
  var input = document.createElement('input');
  var data = document.createTextNode('Qty ');
  input.setAttribute('class','inputQuatity');
  input.setAttribute('type','number');
  label.setAttribute('for','inputQuatity');
  label.appendChild(data);
  div.appendChild(label);
  div.appendChild(input);
  return div;

}

function createDeleteButton(){
  var div = document.createElement('div');
  var button = document.createElement('button');
  var del = document.createTextNode('Delete');
  button.setAttribute('class','btn btn-delete');
  button.appendChild(del);
  div.appendChild(button);
  return div;
}

function createQuantityNode(){
  var div = document.createElement('div');
  var label = document.createElement('label');
  var price = document.createTextNode('$0.00');
  label.setAttribute('class','totalPrice');
  label.appendChild(price);
  div.appendChild(label);
  return div;
}

function createItemNode(dataType, itemData){
  var div = document.createElement('div');
  var label = document.createElement('label');
  var data = document.createTextNode(itemData);
  if(dataType == 'number') {
    data = document.createTextNode('$ ' + itemData);
    label.setAttribute('class','unitPrice');
  }
  label.appendChild(data);
  div.appendChild(label);
  return div;
}

function createNewItemRow(itemName, itemUnitPrice){
  var div = document.createElement('div');
  div.appendChild(createItemNode('text',itemName));
  div.appendChild(createItemNode('number',itemUnitPrice));
  div.appendChild(createQuantityInput());
  div.appendChild(createQuantityNode());  
  div.appendChild(createDeleteButton());
  console.log(div)
  return div;
}

function createNewItem(){
  var itemName = document.getElementById('newProductName').value;
  var itemUnitPrice = document.getElementById('newProductPrice').value;
  if(itemName == '' || itemUnitPrice == ''){
    alert('Falta capturar valores');
    return;
  }
  var parent = document.getElementById('productsList');
  var row = createNewItemRow(itemName,itemUnitPrice);
  row.setAttribute('class','content');
  parent.appendChild(row);
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
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

