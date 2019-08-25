function deleteItem(e) {
  let divToDelete = e.currentTarget.parentNode.parentNode;
  document.querySelector("main").removeChild(divToDelete);
}

function getPriceByProduct(itemNode) {
  let unitCost = itemNode.querySelector(".unit-cost").innerHTML;
  let quantity = itemNode.querySelector(".quantity").value;
  return unitCost * quantity;
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  let orderTotal = 0;
  document.querySelectorAll(".products").forEach(product => {
    let productTotal = getPriceByProduct(product);
    product.querySelector(".total-price").innerHTML = productTotal;
    orderTotal += productTotal;
  });
  document.querySelector(".order-total").innerHTML = orderTotal;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
