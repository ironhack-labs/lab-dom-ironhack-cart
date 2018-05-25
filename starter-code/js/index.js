function deleteItem(e) {

}

function getPriceByProduct(itemNode) {
  return itemNode.getElementsByClassName("productCost")[0].getAttribute("value");
}

function updatePriceByProduct(productPrice, index) {
  var product = document.getElementById(index);
  var totalProductCostNode = product.getElementsByClassName("totalProductCost")[0];
  var quantityNode = product.getElementsByClassName("productQuantity")[0];
  totalProductCostNode.value = productPrice;
  totalProductCostNode.innerHTML = productPrice + "€";

  return totalProductCostNode.value;
}

function getTotalPrice() {
  var products = document.getElementsByClassName("product");

  var totalCost = 0;

  for (i = 0; i < products.length; i++) {
    var productPrice = getPriceByProduct(products[i]);

    var productQuantity = products[i].getElementsByClassName("productQuantity")[0].value;

    totalCost += updatePriceByProduct(productPrice * productQuantity, i);
    console.log(totalCost);

    document.getElementById("totalShoppingPrice").value = totalCost;

    document.getElementById("totalShoppingPrice").innerHTML = totalCost + "€";

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
