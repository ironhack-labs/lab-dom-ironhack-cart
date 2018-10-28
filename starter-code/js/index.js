function deleteItem(e) {
  var deleteButton = e.currentTarget.parentNode.parentNode;
  var parentNode = deleteButton.parentNode
  parentNode.removeChild(deleteButton)
  console.log(deleteButton)
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  var totalProductsPrices = 0;

  var totalProducts = document.querySelectorAll(".product");
  for (i = 0; i < totalProducts.length; i++) {
    var priceItems = parseFloat(
      totalProducts[i].querySelector(".priceItems").innerText
    );

    var quantity = parseFloat(totalProducts[i].querySelector(".cost").value);
    var total = parseFloat(priceItems * quantity);

    totalProducts[i].querySelector(".totalPrice").innerText = total;
    totalProductsPrices += total

  document.querySelector(".totalProductsPrice").innerText = totalProductsPrices;
  console.log(total)
  }
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {
  var totalProducts = document.querySelector(".totalProducts")
  var cloneProduct = document.querySelector(".product").cloneNode(true);
  totalProducts.appendChild(cloneProduct)
  cloneProduct.querySelector(".product-name").innerText = document.querySelector(".create-input1").value
  cloneProduct.querySelector(".priceItems").innerText = document.querySelector(".create-input2").value
  cloneProduct.querySelector(".btn-delete").innerText = deleteItem()

}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
