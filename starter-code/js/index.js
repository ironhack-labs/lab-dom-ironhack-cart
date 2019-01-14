function deleteItem(e) {}

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
  products.forEach(function(oneProduct) {
    var totalPrice = oneProduct.querySelector(".total-price");
    console.log(oneProduct);
    console.log(getTotalPrice(oneProduct));
    totalPrice.innerHTML = "$" + getTotalPrice(oneProduct); //.toFixed(2);
  });
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
