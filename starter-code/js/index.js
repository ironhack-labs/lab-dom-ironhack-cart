function deleteItem(e) {
  const parent = document.querySelector(".wrapper");
  const toRemove = e.currentTarget.parentNode.parentNode;
  parent.removeChild(toRemove);
}

function getPriceByProduct(product) {
  let price = product.querySelector(".price").innerText.replace("$", "");
  return Number(price);
}

function updatePriceByProduct(productPrice, product) {
  const input = product.querySelector(".input").value;
  let updatedPrice = input * productPrice;
  product.querySelector("#product-price").innerText = "$" + updatedPrice;
  return updatedPrice;
}

function getTotalPrice() {
  let totalPrice = 0;
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    let price = updatePriceByProduct(getPriceByProduct(product), product);
    totalPrice += price;
    document.querySelector(".total-price").innerText = totalPrice;
  });
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
