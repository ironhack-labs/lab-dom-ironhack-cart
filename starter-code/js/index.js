function deleteItem(e) {
  var btn = e.currentTarget;
  var padreBtn = btn.parentElement;
  var producto = padreBtn.parentElement;
  var productContainer = producto.parentElement;

  productContainer.removeChild(producto);
}
function deleteNewItem(e){
  var btn = e.currentTarget;
  var producto = btn.parentElement;
  var productContainer = producto.parentElement;

  productContainer.removeChild(producto);
}
function getPriceByProduct() {

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var precios = document.getElementsByClassName("prices");
  var cantidad = document.getElementsByName("qty");
  var totalPrecios = document.getElementsByClassName("total");
  var tituloPrecio = document.getElementById("totalPrice");
  var precioFinal = 0;

  for(var i = 0; i < precios.length; i+=1){
    var totalProducto = 0
    var numPrecio = parseFloat(precios[i].innerHTML.replace("$",""));
    var numCantidad = parseFloat(cantidad[i].value);
    totalProducto = numCantidad * numPrecio;
    precioFinal += totalProducto;
    totalPrecios[i].innerHTML = '$'+ totalProducto.toFixed(2);
    cantidad[i].value='';
  }

  tituloPrecio.innerHTML = 'Total Price $'+ precioFinal.toFixed(2);
}

function createQuantityInput(){ 
  var input = document.createElement('input');

  input.setAttribute('name', 'qty');
  input.setAttribute('type', 'number');

  return input;
}

function createDeleteButton(){
  var deleteDiv = document.createElement('div');
  var deleteButton = document.createElement('button');
  var deleteItemText = document.createTextNode('Delete');
  deleteButton.setAttribute('class', 'btn-delete btn');
  deleteButton.appendChild(deleteItemText);
  deleteDiv.appendChild(deleteButton);
  deleteDiv.onclick = deleteNewItem;
  return deleteDiv;

}
function createTotalPrice(){
  var contenedorPrecio = document.createElement('div');
  var precio = document.createElement('span');
  var texto = document.createTextNode('$0.00');
  precio.setAttribute('class', 'total');
  precio.appendChild(texto);
  contenedorPrecio.appendChild(precio);
  return contenedorPrecio;
}

function createQuantityNode(){
  var contenedorInput = document.createElement('div');
  var label = document.createElement('label');
  var textLabel =document.createTextNode('QTY');

  label.setAttribute('for', 'qty');
  label.appendChild(textLabel);
  contenedorInput.appendChild(label);
  contenedorInput.appendChild(createQuantityInput());

  return contenedorInput;
}

function createItemPrice(ditemUnitPrice){
  var div = document.createElement('div');
  var span = document.createElement('span');
  span.setAttribute('class', 'prices');
  span.innerHTML= '$' + parseFloat(ditemUnitPrice).toFixed(2);
  div.appendChild(span);
  return div;
}

function createNewItemName(itemName ){
  var div = document.createElement('div');
  var span = document.createElement('span');
  var texto = document.createTextNode(itemName);
  span.appendChild(texto);
  div.appendChild(span);
  return div;
}

function createNewItem(){
  var padre = document.createElement('div');
  var contenedor = document.getElementById('item-container');
  var newItem = createNewItemName(document.getElementById('productName').value);
  var newPrice = createItemPrice(document.getElementById('productPrice').value);

  padre.appendChild(newItem);
  padre.appendChild(newPrice);
  padre.appendChild(createQuantityNode());
  padre.appendChild(createTotalPrice());
  padre.appendChild(createDeleteButton());
  contenedor.appendChild(padre);
  document.getElementById('productName').value ='';
  document.getElementById('productPrice').value = '';
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
