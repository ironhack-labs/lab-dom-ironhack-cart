// //Use at least 3 onclick events
// Use at least one getElementById
// Use at least one getElementsByTagName
// Use at least one getElementsByClassName

function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  var lines = document.getElementsByClassName("price").length;
  //console.log(lines)

  for (i = 0; i < lines; i++) {
    var itemUnitPrice = +document.getElementsByClassName("price")[i].innerHTML
    var qtyItems = +document.getElementsByClassName("qty")[i].value;
    //var totalUnitPrice = +document.getElementsByClassName("total-price")[i].innerHTML;
    document.getElementsByClassName("total-price")[i].innerHTML = itemUnitPrice * qtyItems;
  }
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
