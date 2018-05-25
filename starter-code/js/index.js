function deleteItem(e) {

}

function getPriceByProduct(itemNode) {
  return itemNode.getElementsByClassName("productCost")[0].getAttribute("value");
}

function updatePriceByProduct(productPrice, index) {
  var totalProductCostNode = document.getElementById(index).getElementsByClassName("totalProductCost")[0];
  var quantityNode = document.getElementById(index).getElementsByClassName("productQuantity")[0];
  console.log(quantityNode);
  totalProductCostNode.value = productPrice * quantityNode.value;
  totalProductCostNode.innerHTML = productPrice + "€";
}

function getTotalPrice() {
  var products = document.getElementsByClassName("product");

  for (i = 0; i < products.length; i++) {
    var productPrice = getPriceByProduct(products[i]);

    var productQuantity = products[i].getElementsByClassName("productQuantity")[0].value;

    updatePriceByProduct(productPrice * productQuantity, i);

  }

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
