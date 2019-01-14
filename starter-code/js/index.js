var button = document.querySelector(".btn-success");
button.onclick = function() {
  // var qtyField = document.querySelector(".qty");
  var containerArray = document.querySelectorAll(".container");

  containerArray.forEach(function(oneContainer) {
    getPriceByProduct(oneContainer);
  });
};

function getPriceByProduct(oneContainer) {
  console.log(oneContainer);
  var itemQty = oneContainer.querySelector(".qty");
  var unitCost = oneContainer.querySelector(".unit-cost");
  var totalPrice = oneContainer.querySelector(".total-price");
  totalPrice.innerHTML = "$" + Number(unitCost.innerHTML) * itemQty.value;
}

function createNewItem() {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}
