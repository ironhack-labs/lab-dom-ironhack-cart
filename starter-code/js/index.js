var calculatePriceButton = document.getElementById("calculate-price");
calculatePriceButton.onclick = function() {
  var unitPrice = document.getElementById('price').innerText;
  var priceNumber = Number(unitPrice.replace("$", " "));
  var totalItems = document.getElementById('unit-input').value;
  var Price = Number((priceNumber * totalItems).toFixed(2));
  var PriceProduct1 = "$" + Price
  document.getElementById('total-price').innerText = PriceProduct1;
  var unitPrice2= document.getElementById('price2').innerText;
  var priceNumber2 = Number(unitPrice2.replace("$", " "));
  var totalItems2 = document.getElementById('unit-input2').value;
  var Price2 = Number((priceNumber2 * totalItems2).toFixed(2));
  var PriceProduct2 = "$" + Price2
  document.getElementById('total-price2').innerText = PriceProduct2;
  var totalPrice = Price + Price2;
  document.getElementById("total-price-cart").innerText = '$' + totalPrice;
}


var deleteButtons = document.getElementsByClassName('btn-delete');
deleteButtons[0].onclick = function(){
  var container = document.getElementById('products');
  var product = document.getElementById('container1');
  container.removeChild(product);
}

deleteButtons[1].onclick = function(){
  var container = document.getElementById('products');
  var product = document.getElementById('container2');
  container.removeChild(product);
}


var createItemButton = document.getElementById('new-item-create');
createItemButton.onclick = function(){

//borrar los formularios de entrada de datos
var productNameValue = document.getElementById('product-name').value;
var productUnitPriceValue = document.getElementById('product-unit-price').value;
var container3 = document.getElementById("container3");
container3.innerHTML = "";

//Creamos el container div de todos los elementos
var productsContainer = document.getElementById('products');
var container = document.createElement('div');
container.classList.add("clear");
productsContainer.appendChild(container);

//Creamos el resto de elementos que van dentro del div
var productName = document.createElement('span');
productName.classList.add("float", "block", "margin");
productName.innerText = productNameValue;


var productUnitPrice = document.createElement('span');
productUnitPrice.classList.add("float", "margin");
productUnitPrice.innerText = "$" + productUnitPriceValue;


//formulario

var formContainer = document.createElement('div');
formContainer.classList.add("float", "margin");

var formUnit = document.createElement('form');
formUnit.classList.add("quantity");

var inputUnit = document.createElement('input');
inputUnit.classList.add("input");
inputUnit.setAttribute("type", "number");
inputUnit.setAttribute("name", "x");

var inputUnitLabel = document.createElement('label');
inputUnitLabel.setAttribute("for", "QTY");
inputUnitLabel.innerText = "QTY";

formContainer.appendChild(formUnit);
formContainer.appendChild(inputUnit);
formContainer.appendChild(inputUnitLabel);


var totalPriceContainer = document.createElement('div');
var totalPrice = document.createElement('span');
totalPrice.classList.add("float", "margin", "block");
totalPrice.innerText = "$0.00";
totalPriceContainer.appendChild(totalPrice);

var deleteButtonContainer = document.createElement('div');
var deleteButton = document.createElement('button');
deleteButton.classList.add("btn-delete", "float", "block", "margin");
deleteButton.setAttribute("type", "button");
deleteButton.innerText = "Delete";
deleteButtonContainer.appendChild(deleteButton);

//incluimos todos los elementos dentro del div contenedor
container.appendChild(productName);
container.appendChild(productUnitPrice);
container.appendChild(formContainer);
container.appendChild(totalPriceContainer);
container.appendChild(deleteButtonContainer);

//crear el formulario de entrada de otro elemento
var formProductName = document.createElement('form');
formProductName.classList.add("float");

var labelProductName = document.createElement('label');
labelProductName.classList.add("margin");
labelProductName.setAttribute("for", "product-name");
labelProductName.innerText = "Product Name";

var inputProductName = document.createElement('input');
inputProductName.classList.add("input", "margin");
inputProductName.setAttribute("type", "text");
inputProductName.setAttribute("name", "x");

formProductName.appendChild(labelProductName);
formProductName.appendChild(inputProductName);

var formProductPrice = document.createElement('form');
formProductPrice.classList.add("float");

var labelPoductPrice = document.createElement('label');
labelPoductPrice.classList.add("margin");
labelPoductPrice.setAttribute("for", "product-unit-price");
labelPoductPrice.innerText = "Product Unit Price";

var inputProductPrice = document.createElement('input');
inputProductPrice.classList.add("input", "margin");
inputProductPrice.setAttribute("name", "x");

formProductPrice.appendChild(labelPoductPrice);
formProductPrice.appendChild(inputProductPrice);

var buttonNewProduct = document.createElement('button');
buttonNewProduct.setAttribute("type", "button");
buttonNewProduct.classList.add("margin");
buttonNewProduct.innerText = "Create";

container3.appendChild(formProductName);
container3.appendChild(formProductPrice);
container3.appendChild(buttonNewProduct);

productsContainer.insertBefore(container, container3);
}







function getTotalPrice(id, totalPrice) {
document.getElementById(id).innerText= totalPrice;
}

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}


