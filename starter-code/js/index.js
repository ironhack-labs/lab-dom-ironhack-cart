function deleteItem(e) {}

function getPriceByProduct(itemNode) {
  // div.innerHtml --> coger valor (su texto) del div seleccionado
  // div.innerHtml='nuevoTexto' --> cambiar el texto de dentro de ese div
  var priceUnit = document.querySelector('.prices span').innerHTML;
  var priceNumber = priceUnit.split('$');
  var price = priceNumber[1];

  var quantityProduct = document.querySelector('.quantity input').value;
  console.log(quantityProduct);

  var pricemultiply = price * quantityProduct;

  var totalPrice = document.querySelector(".sum-prices span").innerHTML = pricemultiply;

  console.log(totalPrice);

  //parseFloat(cadena);
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  var priceButton = document.getElementById('btn-calculate');
  priceButton.onclick = getPriceByProduct;

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
