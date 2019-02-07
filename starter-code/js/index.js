var productUnitPrice = document.getElementsByClassName("price-unit");
var demo2 = document.getElementsByClassName("price-unit").innerText;

console.log(typeof (productUnitPrice)); // Me dice que es un objeto
console.log(productUnitPrice); //Me da el objeto definido
console.log(productUnitPrice[0].innerText); //Intento entrar al valor de 25

//¿Que hago mal?



function deleteItem(e) {

}
//Estoy tratando de declarar 2 variables, para poder multiplicarlas luego,
//pero intento consolearlas arriba, para ver que resultado me da cada variable,
//pero no consigo nada, que hago mal?

function getPriceByProduct(itemNode) {
  var productUnitPrice = document.getElementsByClassName("price-unit");
  var productUnits = document.getElementsByClassName("product-quantity");


}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

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

