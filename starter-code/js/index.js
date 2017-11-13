// DOM elements
productContainer = document.getElementsByClassName("product-wrapper");
itemPrice = document.getElementsByClassName("item-price");
amount = document.getElementsByClassName("get-quantity");
subTotal = document.getElementsByClassName("subtotal");
totalPrice = document.getElementById("total-price");
allProducts = document.getElementById("products");




//function deleteItem(e) {

//}

function getPriceByProduct() {
  for (i = 0; i < productContainer.length; i++) {
    var sum = itemPrice[i].innerHTML * amount[i].value;
    subTotal[i].innerHTML = sum.toFixed(2);
  }
  getTotalPrice();
}

//function updatePriceByProduct(productPrice, index) {

//}

function getTotalPrice() {
  var subTotalPerProduct = 0;
  for (var i = 0; i < productContainer.length; i++) {
    subTotalPerProduct += parseInt(subTotal[i].innerHTML);
  }
  totalPrice.innerHTML = subTotalPerProduct.toFixed(2);
}

//function createQuantityInput() {

//}

//function createDeleteButton() {

//}

//function createQuantityNode() {

//}

//function createItemNode(dataType, itemData) {

//}

//function createNewItemRow() {
//var element = document.getElementsByTagName("div")[2];
//var cln = element.cloneNode(true);
//allProducts.appendChild(cln);
//}

//function createNewItem() {
//createNewItemRow();

//}

window.onload = function() {
  var calculatePriceButton = document.getElementsByClassName('btn-success')[0];
  var createItemButton = document.getElementById('btn-add');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getPriceByProduct;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
