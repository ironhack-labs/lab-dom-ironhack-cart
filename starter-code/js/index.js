function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}



function getTotalPrice() {
  var productArray = [document.getElementsByClassName('product')]
  var priceProduct = document.getElementsByClassName('price');
  var quantityProduct = document.getElementsByClassName('quantity');
  var totalPrice = document.getElementsByClassName('total-price');

  console.log(productArray)



  var totalResult = 0;

  for (var i = 0; i <= productArray.length; i++) {

    var result = priceProduct[i].innerHTML * quantityProduct[i].value;
    totalPrice[i].innerHTML = result;

    totalResult += result;
  }

  document.getElementById('final-price').innerHTML = totalResult;


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
