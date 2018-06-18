function deleteItem(element) {
  var parentProductNode = element.currentTarget.parentNode.parentNode;
  var cartNode = document.querySelector(".shopping-cart");
  cartNode.removeChild(parentProductNode);
}

function getPriceByProduct(itemNode) {
  var priceNode = itemNode.querySelector(".product-price");
  var priceString = priceNode.innerText;
  var price = parseFloat(priceString.replace(/[$,]+/g, ""));
  return price;
}

function getQuantityByProduct(itemNode) {
  var quantity = itemNode.querySelector(".product-qty input").value;
  return quantity;
}

function getTotalPrice(price, quantity) {
  return price * quantity;
}

function getTotalPriceByProduct(itemNode) {
  return getTotalPrice(
    getPriceByProduct(itemNode),
    getQuantityByProduct(itemNode)
  );
}

function updateTotalPriceByProduct(itemNode) {
  var totalPrice = getTotalPrice(
    getPriceByProduct(itemNode),
    getQuantityByProduct(itemNode)
  );
  var totalPriceNode = itemNode.querySelector(".total-price");
  if (totalPrice) {
    totalPriceNode.innerText = "$" + totalPrice;
  }
}

function updateAll() {
  var productNodes = document.querySelectorAll(".product");
  productNodes.forEach(function(node) {
    updateTotalPriceByProduct(node);
  });
  updateCartTotal(getCartTotal());
}

function getCartTotal() {
  var totalPrice = 0;
  var productNodes = document.querySelectorAll(".product");
  productNodes.forEach(function(node) {
    var price = getTotalPriceByProduct(node);
    totalPrice += price;
  });
  return totalPrice;
}

function updateCartTotal(total) {
  var totalNode = document.getElementById("total");
  totalNode.innerHTML = "<h1>$" + total + "</h1>";
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.addEventListener("load", function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.addEventListener("click", function() {
    console.log("button clicked");
    updateAll();
  });

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
});
