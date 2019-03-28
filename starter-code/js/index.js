//Constants declaration





//Functions declaration
function deleteItem(e) {

}


function updatePriceByProduct(productPrice, index) {


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

function getPriceByProduct() { //itemNode as argumen???
  var productPrice = document.getElementById('product-price').innerHTML;
  console.log(productPrice);
  return productPrice;
}

function getTotalPrice() {
  var totalPrice = createQuantityInput() * getPriceByProduct();
  var tPriceFinal = document.getElementById('total-price');
  tPriceFinal.innerHTML = totalPrice;
}

function createQuantityInput() {
  var qantityInput = Number(document.getElementById('input').value);
  console.log(qantityInput);
  return qantityInput;
}


window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for (var i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].onclick = deleteItem;
  // }
};