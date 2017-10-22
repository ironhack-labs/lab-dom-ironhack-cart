function deleteItem(e) {

}


function getTotalPrice() {
  var precioProducto = document.getElementsByClassName("product-price");
  var quantityProduct = document.getElementsByClassName("numbers");
  var precioTotal = document.getElementsByClassName("final");
  for (var i = 0; i < precioProducto.length; i++) {
    var mult = precioProducto[i].innerHTML * quantityProduct[i].value;
    precioTotal[i].innerHTML = mult;
  }
  getFinalPrice();
}

function getFinalPrice() {
  var precioProducto = document.getElementsByClassName("product-price");
  var precioTotalProd = document.getElementsByClassName("final");
  for (var i = 0; i < precioProducto.length; i++) {
    var total = '$';
    total += precioTotalProd[i].innerHTML;
    document.getElementsByClassName("totalPrice")[0].innerHTML = total;
  }
}

function mix() {
  getTotalPrice();
  getFinalPrice();
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

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = mix;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
