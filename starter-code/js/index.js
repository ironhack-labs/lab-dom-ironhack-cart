function deleteItem() {
  var parent = document.getElementById("body");
  var i = 0
  for (i; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function () {
      // El elemento padre esta dos niveles arriba que button
      // se sube con removeMid al primer nivel div y
      // con removePar hasta la clase "fila" que es la fila padre a eliminar
      var removeMid = event.currentTarget.parentElement;
      var removePar = removeMid.parentElement;
      parent.removeChild(removePar);
      // Se vuelve a llamar a la funcion para recalcular el precio
      getTotalPrice();
    };



  }


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

  // If cuando se borraron todos los elementos regresa 0 en suma
  if (inputValue.length == 0) totalPrice.innerHTML = 0;

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
var deleteButtons = document.getElementsByClassName('btn-delete');

// window.onload = function () { - SE ELIMINA EL window.onload COLOCANDO EL JS EN EL INDEX.HTML HASTA ABAJO EN EL BODY
var calculatePriceButton = document.getElementById('calc-prices-button');
// var createItemButton = document.getElementById('new-item-create');

calculatePriceButton.onclick = getTotalPrice;
// createItemButton.onclick = createNewItem;


for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = deleteItem;
  console.log(deleteButtons[i])
}
deleteItem();

// };