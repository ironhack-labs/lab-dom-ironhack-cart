function deleteItem(e){  //[3] agrega funcional boton de borrar
var selectedRow = e.currentTarget.parentNode.parentNode; //agrega funcionalidad de borrar al boton de delete(parentNode y currentTarget)
var listaObjetos = selectedRow.parentNode;//ayudan a posicionarse en la seleccion del boton 
    listaObjetos.removeChild(selectedRow); //borra la seleccion de fila que contiene a todo el boton
}


function getPriceByProduct(itemNode){ //[1] con  las selecciones tomandolas como arreglo valor parcial por objeto 
  var productInfo = itemNode.getElementsByTagName('div');
  var productUnidad = productInfo[1].getElementsByTagName('span')[0];
  var valorObjeto = productUnidad.innerHTML.substring(1);
  var qty = productInfo[2].getElementsByClassName('cantidad')[0].value;
   
  return parseFloat(valorObjeto)*parseFloat(qty);

} //final de getPriceByProduct


function updatePriceByProduct(productPrice, index){ //[2] ya con la operacion y la seleccion se actualiza el precio parcial
var pricePobject = document.getElementsByClassName('valorparcial')[index];
 pricePobject.innerHTML = "$" + productPrice.toFixed(2); //valor parcial
} // final de updatePrice

function getTotalPrice() { // [0]se llena primero de acuerdo al boton de calcular
var totalPrice = 0; 
var objetos = document.getElementsByClassName('objetos');
for(var i = 0; i< objetos.length; i++){//recorre los div en forma de array
  var productPrice = getPriceByProduct(objetos[i]);
  updatePriceByProduct(productPrice, i);
  totalPrice += productPrice;
}
  var precioFinal = document.getElementById('total'); //valor total por seleccion de id total
  precioFinal.innerText = "$" + totalPrice.toFixed(2);//valor total
} //final de updatePriceByProduct


function createQuantityInput(){
var inputNode = document.createElement('input');
inputNode.className = "cantidad";
inputNode.value = 0;
}

function createDeleteButton(){
var div = document.createElement('div');
div.className = "item-delete";
var buttonNode = document.createElement('button');
buttonNode.className = "btn btn-delete";
buttonNode.innerHTML = "Delete";
buttonNode.onclick = deleteItem;
div.appendChild(buttonNode);
return div;
}

function createQuantityNode(){
var element = document.createElement('div');
element.className = "objeto";

var label = document.createElement('label');
label.innerHTML = "QTY";
var input = createQuantityInput();

element.appendChild(label);
element.appendChild(input);

return element;
}

function createItemNode(dataType, itemData){
itemData = itemData || "$0.00";
var element = document.createElement('div');
var span = document.createElement('span');
var textNode = document.createTextNode(itemData);
span.appendChild(textNode);
element.appendChild(span);
element.className= "objetos" + dataType;
}

function createNewItemRow(newItemName, nuevoPrecio){
var nuevaFila = document.createElement('div');
nuevaFila.className = ('objetos');

var nuevoNode = createItemNode("name", newItemName);
var precioNodo = createItemNode("price", nuevoPrecio);
var qtyNodo = createQuantityNode();
var precioProducto = createItemNode("subtotal");
var button = createDeleteButton();

nuevaFila.appendChild(nuevoNode);
nuevaFila.appendChild(precioNodo);
nuevaFila.appendChild(qtyNodo);
nuevaFila.appendChild(precioProducto);
nuevaFila.appendChild(button);
return nuevaFila;
}


function createNewItem(){ //[4] funcion que toma valores de las clases e id 
var product = document.getElementById('product');
var objetosTamanio = product.getElementsByClassName('objetos').length;
var ultimolista = product.getElementsByClassName('objetos')[objetosTamanio-1];

var newItemName = document.getElementById('new-item-name').value;
var nuevoPrecio = document.getElementById('nuevo-precio').value;
var nuevaFila = createNewItemRow(newItemName, nuevoPrecio);
product.insertBefore(nuevaFila, ultimolista);


}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
 
 var createItemButton = document.getElementById('crear');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
