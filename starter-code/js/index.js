var createButton = document.getElementById("new-item-create");
var productDiv = document.getElementsByClassName("product");
//create div

var productName = document.getElementsByClassName("product-name");
var productCost = document.getElementsByClassName("price");
var productQuantity = document.getElementsByClassName("quantity");
var productTotalPrice = document.getElementsByClassName("total-price");
var productDelete = document.getElementsByClassName("delete-button");


function deleteItem(e) {
  e.path[2].innerHTML = "";
  //remove item from array
  // console.log(e.currentTarget)
  // productDiv.splice(productDiv[1])
}
//
// for (var i = 0; i < productQuantity.length; i++) {
// productQuantity[i].addEventListener("keyup", getPriceByProduct());
// }


function getTotalPrice() {
  for (var i = 0; i < productDiv.length; i++) {
    productTotalPrice[i].innerHTML = parseInt(productCost[i].innerText) * parseInt(productQuantity[i].value);
  }
  var grandTotalPrice = document.getElementById("total-price");
  var grandTotal = 0;

  for (var i = 0; i < productTotalPrice.length; i++) {
    grandTotal += parseInt(productTotalPrice[i].innerText);
  };
  grandTotalPrice.innerHTML = grandTotal;
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
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
