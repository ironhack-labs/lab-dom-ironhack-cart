function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  // Obtenemos la cantidad de productos a comprar -- Array
  var inputValue = document.getElementsByClassName("qty");

  // Obtenemos el precio de cada producto - Array
  var valueQ = document.getElementsByClassName("values");

  // Obtenemos el elemento de la columna total por producto - Array
  var totalByProduct = document.getElementsByClassName("total-by-product");
  var totalPrice = document.getElementById("total-price");
  var total = 0;
  for (i = 0; i < inputValue.length; i++) {
    var antTotal = total;
    total = inputValue[i].value * valueQ[i].innerHTML;
    // Calculo del precio total por artículo
    totalByProduct[i].innerHTML = total;
    // Calculo de Precio Total
    totalPrice.innerHTML = total + antTotal;
  };


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

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};