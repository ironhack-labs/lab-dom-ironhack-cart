function deleteItem(e) {}

var productPrice = [];

function getPriceByProduct(itemNode) {
  var price = document.getElementsByClassName("prices");
  for (i = 0; i < price.length; i++) {
    productPrice.push(parseFloat(price[i].innerHTML));
  }
  return productPrice;
}

function updatePriceByProduct(productPrice, index) {
  var quantity = document.getElementsByClassName("qty");
  // console.log(quantity);
  var quantityInput = [];
  for (i = 0; i < quantity.length; i++) {
    quantityInput.push(parseInt(quantity[i].value))
  }
  console.log(productPrice);
  console.log(quantityInput);

 
function getTotalPrice() {
price=lemento.donde este ep price
cantidad=elemet.donde estecanti
elemen.donde esta el total.innerHTML=price*cantidad



elemento=documente,maoxawimawoii
price=getPriceByProduct(elemento)
 console.log()
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

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
