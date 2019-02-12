//windowload on top
// 1)var quantity
// var unitPrice
// 2) function total price
//calcTotalBtn.onclick = function
//for loop ==> subtotals[i] = quantities[i].value.innerhtml * prices[i].html
//            totals


function deleteItem(e) {
  var deleteButtons = document.getElementsByClassName("btn-delete");
}

function getPriceByProduct() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  calculatePriceButton.addEventListener("click", function() {
  var itemUnitPrice = parseInt(document.getElementById("price").innerHTML);
  var quantity = document.getElementById("quantity").innerHTML;
  return itemUnitPrice * quantity;
})
}




function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

// window.onload = function() {
//   var calculatePriceButton = document.getElementById("calc-prices-button");
//   var createItemButton = document.getElementById("new-item-create");
//   var deleteButtons = document.getElementsByClassName("btn-delete");

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for (var i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
