// Returns price for a product item
function getPriceByProduct(itemNode) {
  var priceNode = itemNode.querySelector(".price");
  var str = priceNode.innerHTML;
  var num = parseFloat(str.slice(1));
  return num;
}

// Returns quantity for a product item
function getQuantityByProduct(itemNode) {
  var qtyNode = itemNode.querySelector(".quantity-input");
  var qty = qtyNode.value;
  return qty;
}

// Returns total price for a product item
function getTotalPrice(itemNode) {
  var price = getPriceByProduct(itemNode);
  var qty = getQuantityByProduct(itemNode);
  return price * qty;
}

// Launching calculation on all products when clicking on "Calculate Prices" button
var calculateButton = document.querySelector("#calculate-button");
calculateButton.onclick = function() {
  var products = document.querySelectorAll(".itemNode");
  var totalCart = 0;
  var totalCartNode = document.querySelector("#total-cart");
  products.forEach(function(oneProduct) {
    var totalPrice = oneProduct.querySelector(".total-price");
    totalPrice.innerHTML = "$" + getTotalPrice(oneProduct).toFixed(2);
    totalCart += getTotalPrice(oneProduct);
  });
  totalCartNode.innerHTML = "$" + totalCart.toFixed(2);
};

// function updateTotalPrice(productArray) {
//   var products = document.querySelectorAll(".itemNode");
//   p;
// }

// Delete a product
var deleteBtnArray = document.querySelectorAll(".btn-delete");
deleteBtnArray.forEach(function(oneButton) {
  oneButton.onclick = function() {
    var productNode = oneButton.parentNode.parentNode;
    productNode.remove();
  };
});

// Create a product
var createButton = document.querySelector(".btn-create");

createButton.onclick = function() {
  var newProductName = document.querySelector(".name-input");
  console.log(newProductName);
  var newProductPrice = document.querySelector(".price-input");
  console.log(newProductPrice);

  var newItemNode = document.createElement("div");
  newItemNode.classList.add(".itemNode");

  // 1.Name
  var newNameNode = document.createElement("div");
  var newSpan = document.createElement("span");
  newSpan.innerHTML = newProductName;
  newNameNode.appendChild(newSpan);
  newItemNode.appendChild(newNameNode);

  // 2.Price
  var newPriceNode = document.createElement("div");
  var newSpan = document.createElement("span");
  newSpan.classList.add(".price");
  newSpan.innerHTML = "$" + newProductPrice;
  newPriceNode.appendChild(newSpan);
  newItemNode.appendChild(newPriceNode);

  // 3.Quantity
  var newQuantityNode = document.createElement("div");
  newQuantityNode.classList.add(".quantity");
  //..
  var newLabelNode = document.createElement("label");
  newLabelNode.innerHTML = "QTY";
  newQuantityNode.appendChild(newLabelNode);
  //..
  var newInputNode = document.createElement("input");
  newInputNode.classList.add("quantity-input");
  newInputNode.type = "number";
  newQuantityNode.appendChild(newInputNode);
  //..
  newItemNode.appendChild(newQuantityNode);

  // 4.Total Price
  var newTotalPriceNode = document.createElement("div");
  newTotalPriceNode.classList.add(".total-price");
  var newSpan = document.createElement("span");
  newSpan.innerHTML = "$0.00";
  newTotalPriceNode.appendChild(newSpan);
  newItemNode.appendChild(newTotalPriceNode);

  // 5.Delete
  var newDeleteButtonNode = document.createElement("div");
  var newDeleteButton = document.createElement("button");
  newDeleteButton.classList.add(".btn-delete");
  newDeleteButton.innerHTML = "Delete";
  newDeleteButtonNode.appendChild(newDeleteButton);
  newItemNode.appendChild(newDeleteButtonNode);

  // 6.Insert new line in container
  var container = document.querySelector("#products-container");
  container.appendChild(newItemNode);
};

function updatePriceByProduct(productPrice, index) {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
