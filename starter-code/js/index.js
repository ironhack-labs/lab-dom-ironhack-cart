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

  //antes habrá que borrar los formularios de entrada de datos y volverlos a poner debajo
  

  //Recoger valores del formuario y crear los nuevos elementos
  //1. Crear las tags del DOM donde se van a incluir los elementos
  var productName = document.createElement('span');
  var productUnitPrice = document.createElement('span');
  
  //2. Recoger valor de los formularios de nombre y precio unitario
  var productNameValue = document.getElementById('product-name').value;
  var productUnitPriceValue = document.getElementById('product-unit-price').value;

  //3. Crear los nuevos TextNode con los valores del formulario y meterlos en las tags
  productName.innerText = document.createTextNode(productNameValue);
  productUnitPrice.innerText = document.createTextNode(productUnitPriceValue);


  //Crear nuevo formulario para recoger cantidad de producto
  //1. Crear tags del DOM donde se van a recoger los valores
  var formContainer = document.createElement('div');
  var formUnit = document.createElement('form');
  var inputUnit = document.createElement('input');
  var inputUnitLabel = document.createElement('label');

  //Meter tags dentro de sus tags correspndientes

  formContainer.appendChild(formUnit, inputUnit, inputUnitLabel);

  //Meter todos los elementos en el DIV
  var container = document.createElement('div');
  
  container.appendChild(productName, productUnitPrice, formContainer);
  var productsContainer = document.getElementById('products');

  productsContainer.appendChild(container);
  
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


