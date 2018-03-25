
/*Función que borra un producto entero 
determinado (el asociado al botón de borrar que se pulsara)*/ 
function deleteItem(e) {
//e.currentTarget => el botón que se ha pulsado
  var contenedorProducto = e.currentTarget.parentNode.parentNode;
  contenedorProducto.remove();
}

//función que recoge el precio por unidad. Tiene esta forma: $0.00
function getPriceByProduct(itemNode) {
  var price = document
    .getElementsByClassName(itemNode)[0]
    .getElementsByTagName("span")[0].innerHTML;
  //deberia devolver el precio unitario
  var priceWithoutDolar = price.substring(1);

  //devuelve el numero sin el dolar
  return parseFloat(priceWithoutDolar);
}

/*Esta función actualiza el precio por producto (cantidad * precio unitario) */ 
function updatePriceByProduct(productPrice, index) {

  //accedemos a la cantidad que haya de ese producto en concreto
  var QTY = document
    .getElementsByClassName("QTY")
    [index].getElementsByTagName("input")[0].value;

  //accedemos al precio
  document
    .getElementsByClassName("total-product-price")
    [index].getElementsByTagName("span")[0].innerHTML =
    "$" + productPrice * QTY;

  return productPrice * QTY;
  
}

//función que calcula el precio total de todos los productos (y sus cantidades)
function getTotalPrice() {
  var cuantosProductsHay = document.getElementsByClassName("product").length;

  var precioTotal = 0;
  for (var i = 0; i < cuantosProductsHay; i++) {
    //dado que las clases que contienen a cada producto están numeradas del 0 - (length-1), 
    //hay que hacer un parseo i a String para que luego se pase directamente al getElementsByClassName. 
    var istring = String(i);
    precioTotal += updatePriceByProduct(getPriceByProduct(istring), i);
  }

  document
    .getElementsByClassName("total-price")[0]
    .getElementsByTagName("h2")[0]
    .getElementsByTagName("span")[0].innerHTML =
    "$" + precioTotal;

  return precioTotal;
}


function createQuantityInput() {
  //El div creado tiene que tener esta forma: 
  //   <div class="QTY"> QTY <input type="text" name="QTY" value="0"><br> </div>


  var item = document.getElementById("all-products").lastChild;

  var quantityInput = document.createElement("div");
  quantityInput.classList.add("QTY");
  quantityInput.innerHTML = "QTY";

  var input = document.createElement('input');

  input.setAttribute("type", "text");
  input.setAttribute("value", "0");
  input.setAttribute("name", "QTY");

  quantityInput.appendChild(document.createElement("input"));
  item.appendChild(quantityInput);
}

function createDeleteButton() {
//El botón creado tiene que tener esta forma: 
  // <div class="delete"> <button type="button" class="btn-delete btn">Delete </button></div>

  var item = document.getElementById("all-products").lastChild;
  var divDeleteBtn = document.createElement("div");
  divDeleteBtn.classList.add("delete");
  var boton = document.createElement("button");
  boton.classList.add("btn-delete");
  boton.classList.add("btn");
  boton.innerHTML = "Delete";
  boton.setAttribute("type", "button");
  divDeleteBtn.appendChild(boton)
  item.appendChild(divDeleteBtn);

}

function createQuantityNode() {
//El div creado tiene que tener esta forma: 
 // <div class="total-product-price"> <span> $0.00 </span></div>
 var item = document.getElementById("all-products").lastChild;
 var totalProductPrice = document.createElement("div");
 totalProductPrice.classList.add("total-product-price")
 var span = document.createElement("span")

 totalProductPrice.appendChild(span);
 span.innerHTML = "$0.00"
 item.appendChild(totalProductPrice);

}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {

  /*Tiene que tener esta forma
  <div> <span> IronBubble-head</span></div>
<div class="1"> <span value="25">$30.00</span></div>
 */
  var cuantosItemsHay = document.getElementsByClassName("product").length;

  var padre = document.createElement("div");
  padre.classList.add("product");
  padre.classList.add("horizontal");
  //div dentro del padre con el span
  var element = document.createElement("div");
  
  var span = document.createElement("span");
  span.value = itemName;
  //añadimos el itemName
  span.innerHTML = itemName;
  element.appendChild(span);
  padre.appendChild(element);

  //parte para el value
  var element = document.createElement("div");
  element.classList.add(cuantosItemsHay);
  var span = document.createElement("span");
  span.value = itemUnitPrice;

  //añadimos el itemUnitPrice
  span.innerHTML = "$"+itemUnitPrice;
  element.appendChild(span);
  padre.appendChild(element);

  var parent = document.getElementById("all-products").appendChild(padre);

  createQuantityInput();
  createQuantityNode() ;
  createDeleteButton();

actualizar();

}

function createNewItem() {
  //primero creamos el nombre del producto y el precio por unidad con la información
  //que el usuario ha puesto en la pagina
  var newItemName = document
    .getElementById("new-item-name")
    .getElementsByTagName("input")[0].value;
  var newUnitPrice = document
    .getElementById("new-price-unit")
    .getElementsByTagName("input")[0].value;
  createNewItemRow(newItemName, newUnitPrice);
}

//función genérica para actualizar => si se añade algún elemento en el DOM que se necesita que tenga 
//asociado una acción, se debe llamar a este método. 
//Ahora mismo solo contempla: Crear nuevos productos, Calcular el precio total y eliminar productos. 
function actualizar () {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;

  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

/*window.onload => se dispara cuando todo el documento se ha terminado de cargar
Si le asociamos una función, cuando se termine de cargar, se disparará esa función. 
En este caso, tiene asociado la función actualizar, que es la encargada de asociar eventos 
de determinadas funciones con los botónes creados. 
Si se crean nuevos botones.... sorpresa, hay que llamar a la función actualizar que creará dichas asociaciones. 
*/
window.onload = actualizar;