// delete product
function deleteItem(e) {
  var prod = e.currentTarget.parentElement;
  prod.parentElement.removeChild(prod);
}
var buttonDelete = document.querySelectorAll(".btn-delete");
buttonDelete.forEach(btn => (btn.onclick = e => deleteItem(e)));

// calculate sub sum and total sum
function getPriceByProduct(itemNode) {
  var price = document.querySelectorAll(".prod-price")[itemNode];
  var qty = document.querySelectorAll("input")[itemNode];
  var total = parseFloat(price.innerHTML) * qty.value;
  return total;
}
function updatePriceByProduct(productPrice, index) {
  var subSum = document.querySelectorAll(".sub-sum")[index];
  subSum.innerHTML = productPrice.toFixed(2) + " &euro;";
}
function getTotalPrice() {
  var prodArr = document.querySelectorAll(".prod");
  var sum = 0;
  for (var i = 0; i < prodArr.length; i++) {
    var productPrice = getPriceByProduct(i);
    updatePriceByProduct(productPrice, i);
    if (isNaN(productPrice) === false) sum += productPrice;
  }
  document.querySelector("h2 > span").innerHTML = sum.toFixed(2) + " &euro;";
}
var buttonCalc = document.getElementById("calc-prices-button");
buttonCalc.onclick = getTotalPrice;

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  var input = document.querySelectorAll(".new-input")
}
var buttonCreate = document.getElementById("create-button");
buttonCreate.onclick = createNewItem;

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("create-button");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
