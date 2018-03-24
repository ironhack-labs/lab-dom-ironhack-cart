function deleteItem(e) {
  var contenedorProducto = e.currentTarget.parentNode.parentNode;
  contenedorProducto.remove();
}

function getPriceByProduct(itemNode) {
  var price = document
    .getElementsByClassName(itemNode)[0]
    .getElementsByTagName("span")[0].innerHTML;
  //deberia devolver el precio unitario
  var priceWithoutDolar = price.substring(1);

  return parseFloat(priceWithoutDolar);
}

//function updatePriceByProduct(productPrice, index){
function updatePriceByProduct(productPrice, index) {
  // function updatePriceByProduct(){

  //accedemos a la cantidad que haya de ese producto en concreto
  var QTY = document
    .getElementsByClassName("QTY")
    [index].getElementsByTagName("input")[0].value;

  //accedemos al precio
  // var  priceByProduct = getPriceByProduct(index);

  document
    .getElementsByClassName("total-product-price")
    [index].getElementsByTagName("span")[0].innerHTML =
    "$" + productPrice * QTY;
  return productPrice * QTY;
  // console.log(totalPerProduct);
}

function getTotalPrice() {
  var cuantosProductsHay = document.getElementsByClassName("product").length;

  var precioTotal = 0;
  for (var i = 0; i < cuantosProductsHay; i++) {
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
  //   <div class="QTY"> QTY <input type="text" name="QTY" value="0"><br> </div>

  var quantityInput = document.createElement("div");
  quantityInput.classList.add("QTY");
  quantityInput.innerHTML = "QTY";

  var item = document.getElementById("all-products").lastChild;
  quantityInput.appendChild(document.createElement("input"));
  item.appendChild(quantityInput);
}

function createDeleteButton() {
  alert("entra");

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

  // <div class="delete"> <button type="button" class="btn-delete btn">Delete </button></div>
}

function createQuantityNode() {

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
  //añadimos el value
  span.innerHTML = itemUnitPrice;
  element.appendChild(span);
  padre.appendChild(element);

  var parent = document.getElementById("all-products").appendChild(padre);

  createQuantityInput();
  createQuantityNode() ;
  createDeleteButton();


  /* var parent = document.getElementsByTagName('body')[0]
 parent.appendChild(element); */
  /* 
<div> <span> IronBubble-head</span></div>
<div class="1"> <span value="25">$30.00</span></div>
 */
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

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;

  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
