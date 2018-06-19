var getProductPrice = function(productNode) {
  var priceNode = productNode.querySelector(".price");
  var price = priceNode.innerText;
  return price;
};

var getQuantity = function(productNode) {
  var quantityNode = productNode.querySelector(".quantity");
  var quantityInputBox = quantityNode.querySelector("input");
  var quantity = quantityInputBox.value;
  return quantity;
};

var getTotal = function(price, quantity) {
  var priceTotal = price * quantity;
  return priceTotal;
};

var displayTotalPrice = function(productNode, price) {
  var totalPriceNode = productNode.querySelector(".total-price");
  totalPriceNode.innerText = price;
};

var calculatePrices = function(productNode) {
  var calculateBtn = productNode.querySelector(".btn-success");
  addEventListener.calculateBtn("click", function() {});
};

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  var node = document.querySelector(".product");

  calculatePriceButton.addEventListener("click", function() {
    console.log("button clicked");
  });

  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
