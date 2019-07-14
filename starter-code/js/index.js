function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {



}

function getTotalPrice() {

  let input = parseInt(document.getElementsByTagName("input")[0].value);

  let itemUnitPrice = parseFloat(document.getElementsByClassName("unit-price")[0].innerText);


  let total = document.getElementsByClassName("totalPrice")[0];

  total.innerHTML = input * itemUnitPrice

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
  /* var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  } */
  let calculatePriceButton = document.getElementsByClassName("btn-sucess")[0];

  calculatePriceButton.onclick = getTotalPrice
};

