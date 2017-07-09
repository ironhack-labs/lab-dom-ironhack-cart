var createButton = document.getElementById("new-item-create");
var productDiv = document.getElementsByClassName("product");
//create div

var productName = document.getElementsByClassName("product-name");
var productCost = document.getElementsByClassName("price");
var productQuantity = document.getElementsByClassName("quantity");
var productTotalPrice = document.getElementsByClassName("total-price");
var productDelete = document.getElementsByClassName("delete-button");

function getTotalPrice() {
  for (var i = 0; i < productDiv.length; i++) {
    productTotalPrice[i].innerHTML =
      parseInt(productCost[i].innerText) * parseInt(productQuantity[i].value);
  }
  var grandTotalPrice = document.getElementById("total-price");
  var grandTotal = 0;
  for (var i = 0; i < productTotalPrice.length; i++) {
    grandTotal += parseInt(productTotalPrice[i].innerText);
  }
  grandTotalPrice.innerHTML = grandTotal;
}

function createNewItem(itemName, itemUnitPrice) {
  var itemName = $('#name-input').val();
  var itemUnitPrice = $('#px-input').val();
  var newItem = '<div class="row product"><div class="col-xs-2"><span class="product-name">' +
    itemName +
    '</span></div><div class="col-xs-2">$<span class="price">' +
    itemUnitPrice +
    '</span></div><div class="col-xs-3"><label for="quantity">QTY</label><input value="3" class="quantity" type="text" placeholder="0"></div><div class="col-xs-2">$<span class="total-price"></span></div><div class="col-sm-2 pull-right"><button class="btn btn-delete delete-button new-delete-button">Delete</button></div></div>';
  var products = $("#products");
  products.append(newItem);
  listenerOnDelete();
  getTotalPrice();

}

function deleteItem(e) {
  console.log(e)
  // e.path[2].innerHTML = "";
  var parentNode = e.currentTarget.parentNode.parentElement;
  //getElementById doesn't work here
  var productContainer = parentNode.parentElement
  productContainer.removeChild(parentNode);

}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  listenerOnDelete();
};

function listenerOnDelete() {
  var deleteButtons = document.getElementsByClassName("btn-delete");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  };
}
for (var i = 0; i < productDiv.length; i++) {
  productQuantity[i].addEventListener('keyup', getTotalPrice);
}
