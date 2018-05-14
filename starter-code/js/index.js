function deleteItem(e) {
  console.log(e);
  var remove = e.currentTarget.parentNode.parentNode;
  var container = remove.parentNode;
  container.removeChild(remove);

}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  var quantityArray = document.getElementsByClassName("quantity-input");
  var priceArray = document.getElementsByClassName("price");
  for (var i = 0; i < quantityArray.length; i++) {
    document.getElementsByClassName("total-line")[i].innerText =
      quantityArray[i].value * priceArray[i].innerHTML;
  }
  var totalLine = document.getElementsByClassName("total-line");
  var total = document.getElementById("total").innerHTML;
  for (var i = 0; i < totalLine.length; i++) {
    total = parseInt(total) + parseInt(totalLine[i].innerText);
  }
  document.getElementById("total").innerText = parseInt(total);
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  var newProduct = document
    .getElementsByClassName("product")[0]
    .cloneNode(true);
    console.log(newProduct);
  var newName = document.getElementsByClassName("input-name-create")[0].value;
  var newPrice = document.getElementsByClassName("price-create")[0].value;
  newProduct.getElementsByClassName("name")[0].innerHTML = newName;
  newProduct.getElementsByClassName("price")[0].innerHTML = newPrice;
  var lastProduct = document.getElementsByClassName("product");
  lastProduct[lastProduct.length - 1].appendChild(newProduct);
  deleteRun();
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  deleteRun();
};
var deleteButtons = document.getElementsByClassName("btn-delete");
var deleteRun = function() {
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
