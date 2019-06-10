function deleteItem(e) {
  var deleteCurrentChild = e.currentTarget.parentNode.parentNode;
  deleteCurrentChild = deleteCurrentChild.removeChild(
    e.currentTarget.parentNode
  );
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  var totalPrices = document.getElementsByClassName("productUnitPrice");
  var productQuantityInput = document.getElementsByClassName("product-quantity");
  var PriceTotal;
  var priceTotalOutput = 0;
  for (var i = 0; i < totalPrices.length; i++) {
    PriceTotal = totalPrices[i].innerHTML * productQuantityInput[i].value;
    priceTotalOutput += PriceTotal;
  }
  document.getElementById("total-price-output").innerHTML = priceTotalOutput;
}

function createQuantityInput() {}


function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}



window.onload = function() {
  var calculatePriceButton = document.getElementById("btnCalculatePrices");
  calculatePriceButton.onclick = getTotalPrice;

  var createItemButton = document.getElementById('createItems');
  createItemButton.onclick = createNewItem;


  var deleteButtons = document.getElementsByClassName("btn-delete");
  deleteButtons.onclick = deleteItem;


  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
  // console.log(deleteButtons.length);
};
