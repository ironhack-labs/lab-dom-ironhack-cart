function deleteItem(e) {
  console.log(e.path[2]);
  e.path[2].remove();
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  // Saca todos los precios unitarios que hay
  var unitPrice = document.querySelectorAll(".unit-price span");

  // Saca todas las cantidades que hay
  var quantity = document.querySelectorAll(".quantity input");

  // Consigue todos los elementos del precio total del producto
  var totalPriceDomElem = document.querySelectorAll(".total-price span");

  // Selecciona el precio global
  var totalGlobalPriceDomElem = document.querySelector("#global-price span");

  // Recibe todos los precios unitarios
  var globalPrice = [];

  // Recorre todos los precios
  for (var i = 0; i < unitPrice.length; i++) {
    //Consigue el string del precio unitario y lo transforma en número
    var unitValueString = unitPrice[i].textContent;
    var unitValue = parseFloat(
      unitValueString.substring(1, unitValueString.length - 1)
    );

    // Consigue el número de la cantidad
    var unitQuantity = parseInt(quantity[i].value);

    // Consigue el precio total del producto
    var totalPrice = unitValue * unitQuantity;

    // Transforma el dom para cambiar el precio total del producto
    totalPriceDomElem[i].textContent = "$" + totalPrice.toFixed(2);

    globalPrice.push(totalPrice);
  }

  // Consigue el precio de todos los productos
  var totalGlobalPrice = globalPrice.reduce((a, cv) => a + cv, 0);
  // Transforma en el DOM el precio de todos los productos
  totalGlobalPriceDomElem.textContent = "$" + totalGlobalPrice.toFixed(2);
}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {
  //Consigue el elemento del DOM del nuevo nombre del producto y recupera su valor
  var newProductName = document.querySelector("#product-name").value;

  // Consigue el elemento del DOM del precio unitario del producto y recupera su valor
  var newProductPrice = document.querySelector("#product-price").value;

  newProductPrice = newProductPrice ? newProductPrice : '0.00'

  // Consigue toda la lista de productos que hay
  var productList = document.querySelector("#product-list");

  // Creamos un nuevo div para insertarlo en la lista de productos después
  var div = document.createElement("div");
  var newProductList = `
<div>
  <span>${newProductName}</span>
</div>
<div class="unit-price">
  <span>$${newProductPrice}</span>
</div>
<div class="quantity">
  <label for="quantity">QTY</label>
  <input type="text" value="0" name="quantity">
</div>
<div class="total-price">
  <span>$0.00</span>
</div>
<div>
  <button class="btn btn-delete">Delete</button>
</div>`;
  
  div.innerHTML = newProductList;
  div.setAttribute("class", "container");
  div.querySelector('button').onclick = deleteItem

  // Se añade el div a la lista de productos
  productList.append(div);
}

function loadDOMElements() {
}

window.onload = function() {
  // Al no actualizar la lista de productos no es necesario cambiar el evento onclick cada vez que se añade un producto nuevo
  var calculatePriceButton = document.getElementById("calc-prices-button");
  calculatePriceButton.onclick = getTotalPrice;
  
  // Lo mismo para este botón, ya que es el mismo siempre
  var createItemButton = document.getElementById("new-item-create");
  createItemButton.onclick = createNewItem;
  
  var deleteButtons = document.getElementsByClassName("btn-delete");
  
  
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
