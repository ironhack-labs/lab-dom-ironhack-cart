function deleteItem(e){
  var product = document.querySelector(".container"); 
  product.removeChild(e.currentTarget.parentNode.parentNode.parentNode); 
   getTotalPrice();
}

// eliminamos el hijo de product, seleccionando el boton con e.currentTarget + su padre(span) + su padre(div) + su padre(div product line)

function getPriceByProduct(product){
  var priceProduct = product.querySelector('.price-und span').innerHTML;
  var qtyProduct =  product.querySelector('input[name="qty"]').value;
  return priceProduct * qtyProduct;
}

// seleccionamos el precio y las unidades del producto y las multiplicamos

function updatePriceByProduct(product, productPrice){
  product.querySelector('.total-price span').innerHTML = productPrice;
}

//actualizamos el total de ese producto, pero cuando pulsemos para calcular el total de toda lista

function getTotalPrice() {
  var products = document.querySelectorAll('.product');
  var priceTotal = 0;
  for (var i = 0, l = products.length; i < l; i++){
    var productPrice = getPriceByProduct(products[i]);
    updatePriceByProduct(products[i], productPrice);
    priceTotal += productPrice;
   }
   document.querySelector('h2 span').innerHTML = priceTotal;
}

// Aqui itineramos por los totales de los productos, que se van actualizando según itinera, actualizamos el importe del carrito

function createNewItemName(name){
  var divTag = document.createElement("div");
  divTag.classList.add("name");
  var spanTag = document.createElement("span");
  spanTag.appendChild(document.createTextNode(name))
  divTag.appendChild(spanTag)

  return divTag;
}

// Creamos la casilla dond nombraremos el producto

function createPriceInput(price){
  var divTag = document.createElement("div");
  divTag.classList.add("price-und");
  var spanTag = document.createElement("span");
  spanTag.appendChild(document.createTextNode(price))
  divTag.appendChild(spanTag)

  return divTag;
}

// Creamos la casilla donde añadiremos el precio de nuestro producto 

function createQuantityInput(){
  var divTag = document.createElement("div");
  divTag.classList.add("number-und");

  var labelTag = document.createElement("label");
  labelTag.appendChild(document.createTextNode("QTY"));
  divTag.appendChild(labelTag);

  var inputTag = document.createElement("input");
  inputTag.classList.add("qty");
  inputTag.setAttribute("name","qty");
  inputTag.setAttribute("type","number");
  inputTag.setAttribute("value","0");
  inputTag.setAttribute("placeholder","0");
  divTag.appendChild(inputTag);

  return divTag;
}

// Creamos la casilla de las unidades del producto creado

function createDeleteButton(){
  var divTag = document.createElement("div");
  var spanTag = document.createElement("span");
  divTag.appendChild(spanTag);
  var btnTag = document.createElement("button");
  btnTag.classList.add("btn-delete");
  btnTag.appendChild(document.createTextNode("Delete"));
  spanTag.appendChild(btnTag)
  btnTag.addEventListener("click", deleteItem)

  return divTag;
}

// Creamos el boton delete

function createTotalProduct(){
  var divTag = document.createElement("div");
  divTag.classList.add("total-price");
  var spanTag = document.createElement("span");
  spanTag.appendChild(document.createTextNode("0"))
  divTag.appendChild(spanTag)

  return divTag;
}

// Creamos la casilla donde actualizaremos el precio talta de ese producto

function createNewItem(){
  var name = document.getElementById("input-name").value;
  var price = document.getElementById("input-price").value;
  var container = document.querySelector(".container");
  if (name !== "" && price > 0){
    container.appendChild(createNewItemRow(name, price))
  } 
}

// Aqui mandamos a la función createNewItemRow si se cumple ambas condiciones

function createNewItemRow(name, price){
  var newProductRow = document.createElement("div");
  newProductRow.classList.add("product");
  newProductRow.setAttribute("id", "line");
  newProductRow.appendChild(createNewItemName(name));
  newProductRow.appendChild(createPriceInput(price));
  newProductRow.appendChild(createQuantityInput(qty));
  newProductRow.appendChild(createTotalProduct());
  newProductRow.appendChild(createDeleteButton());
  
  return newProductRow;
}

// Creamos la línea completa del producto despés de pulsar create


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
 
  var total = document.getElementsByClassName(".calc-prices-button span");
  var priceProduct = document.getElementsByClassName(".price-und");
 
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

 for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};