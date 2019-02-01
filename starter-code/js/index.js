function deleteItem(event) {
  window.nunnapat = event;
  var li = event.target.parentNode;
  var ul = li.parentNode;
  ul.removeChild(li);
}

function getPriceByProduct(itemNode) {
  var itemNode = document.getElementsByClassName("cost")[0].innerText;
}

function updatePriceByProduct(productPrice, indexs) {
  var productPrice = document.getElementsByClassName("cost")[0].innerText;
var indexs = parseInt(document.getElementsByClassName("input").value);

}

function getTotalPrice() {
  
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

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
  getPriceByProduct();
  updatePriceByProduct();
};
