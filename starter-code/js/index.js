function deleteItem(e){
  var producto = e.currentTarget.parentNode.parentNode;
  document.getElementsByTagName('body')[0].removeChild(producto);
}

function getPriceByProduct(i){
  var precio = parseFloat(document.getElementsByClassName('product')[i].getElementsByClassName('precio')[0].innerText);
  var cantidad = 0;
  if(document.getElementsByClassName('product')[i].getElementsByClassName('quantity')[0].value != ""){
    cantidad = parseFloat(document.getElementsByClassName('product')[i].getElementsByClassName('quantity')[0].value);
  }
  return precio * cantidad;
}

function updatePriceByProduct(productPrice, i){
  document.getElementsByClassName('product')[i].getElementsByClassName('total')[0].innerText = productPrice;
}

function getTotalPrice() {
  var products = document.getElementsByClassName('product');
  var precioTotal = 0;
  var i;
  for (i = 0; i < products.length; i++){
    var precio = getPriceByProduct(i);
    precioTotal += precio;
    updatePriceByProduct(precio, i);
  }
  document.getElementsByClassName('total-all')[0].innerText = "$" + precioTotal;
}

function createQuantityInput(){
  var input = document.createElement('input');
  var label = document.createElement('label');
  var div = document.createElement('div');
  label.innerHTML = 'QTY';
  label.setAttribute('for', 'quantity');
  input.setAttribute('type', 'number');
  input.setAttribute('placeholder', '0');
  input.setAttribute('class', 'quantity');
  div.appendChild(label);
  div.appendChild(input);
  return div;
}

function createDeleteButton(){
  var div = document.createElement('div');
  var button = document.createElement('button');

  button.setAttribute('class', 'btn btn-delete');
  button.innerHTML = 'Delete';

  div.appendChild(button);

  return div;
}

function createQuantityNode(){
  var div = document.createElement('div');
  var totalLinea = document.createElement('span');

  div.innerHTML = '$';
  totalLinea.setAttribute('class', 'total');
  totalLinea.innerHTML = '0.00';

  div.appendChild(totalLinea);

  return div;
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  var divProd = document.createElement('div');
  var div1 = document.createElement('div');
  var nombre =document.createElement('span');
  var div2 = document.createElement('div');
  var precioUnitario = document.createElement('span');

  nombre.innerHTML = itemName;
  div1.appendChild(nombre);

  div2.innerHTML = '$';
  precioUnitario.setAttribute('class', 'precio');
  precioUnitario.innerHTML = itemUnitPrice;
  div2.appendChild(precioUnitario);
  
  var qty = createQuantityInput();

  var totalLinea = createQuantityNode();

  var button = createDeleteButton();

  divProd.setAttribute('class', 'product');
  divProd.appendChild(div1);
  divProd.appendChild(div2);
  divProd.appendChild(qty);
  divProd.appendChild(totalLinea);
  divProd.appendChild(button);

  return divProd;
}

function createNewItem(){
  var nombre = document.getElementById('prodName').value;
  var precioUni = document.getElementById('unitPrice').value;
  var newProd = createNewItemRow(nombre, precioUni);
  var getNode = document.getElementsByClassName('create')[0];
  document.getElementsByTagName('body')[0].insertBefore(newProd, getNode);

  document.getElementById('prodName').value = '';
  document.getElementById('unitPrice').value = 0;
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
