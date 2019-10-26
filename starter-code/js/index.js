var containers = document.querySelectorAll("#div-container");
var productName = document.querySelectorAll(".product-name");
var productPrice = Number(
  document.querySelectorAll(".product-price").textContent
);
var quantity = document.querySelectorAll(".quantity");
var totalPrice = document.querySelectorAll(".total-price");

// console.log(containers);

function deleteItem() {
  containers.forEach(function(container) {
    var deleteButton = container.querySelector(".btn-delete");
    deleteButton.addEventListener("click", function() {
      container.innerHTML = "";
    });
  });
}
deleteItem();

function getPriceByProduct() {
  containers.forEach(function(container) {
    var productPrice = container.querySelector(".product-price").textContent;
    var quantity = container.querySelector(".quantity").value;
    var total = Number(productPrice) * Number(quantity);
    container.querySelector(".total-price").innerHTML = `$${total}`;
  });
}
getPriceByProduct();

function getTotalPrice() {
  getPriceByProduct();
  var totalByProduct = 0;
  containers.forEach(function(container) {
    var productPrice = container.querySelector(".product-price").textContent;
    var quantity = container.querySelector(".quantity").value;
    var total = Number(productPrice) * Number(quantity);
    totalByProduct += total;
    document.querySelector(".total").innerHTML = `$ ${Number(totalByProduct)}`;
  });
}

getTotalPrice();

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  //var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  // for (var i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
window.onload();
