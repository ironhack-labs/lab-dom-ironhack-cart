function deleteItem(e) {
  document
    .querySelector(".products")
    .removeChild(e.currentTarget.parentNode.parentNode);
}

function getPriceByProduct(product) {
  return parseFloat(
    product.querySelector(".unit-cost p").innerHTML.replace("$", "")
  );
}

function updatePriceByProduct(productPrice, product) {
  var quantity = parseInt(product.querySelector(".quantity").value);
  var productTotalPrice = productPrice * quantity;

  product.querySelector(".total-product-price p").innerHTML =
    "$" + productTotalPrice.toFixed(2);

  return productTotalPrice;
}

function getTotalPrice() {
  var products = Array.from(document.querySelectorAll(".product-wrapper"));
  var total = 0;

  products.forEach(function(product) {
    productTotalPrice = updatePriceByProduct(
      getPriceByProduct(product),
      product
    );
    total += productTotalPrice;
  });

  document.querySelector("h2 span").innerHTML = "$" + total.toFixed(2);
}

function createProductName(itemName) {
  var productNameContainer = document.createElement("div");
  productNameContainer.className = "product-name";
  var productName = document.createElement("p");
  productName.innerHTML = itemName;
  productNameContainer.appendChild(productName);
  return productNameContainer;
}

function createUnitCost(itemUnitPrice) {
  var unitCostContainer = document.createElement("div");
  unitCostContainer.className = "unit-cost";
  var unitCost = document.createElement("p");
  unitCost.innerHTML = "$" + parseFloat(itemUnitPrice).toFixed(2);
  unitCostContainer.appendChild(unitCost);
  return unitCostContainer;
}

function createQuantityInputNode() {
  var unitsInputContainer = document.createElement("div");
  unitsInputContainer.className = "units-input";
  var qty = document.createElement("p");
  qty.innerHTML = "QTY";
  var quantityInput = document.createElement("input");
  quantityInput.className = "quantity";
  quantityInput.value = 0;
  quantityInput.dataType = "text";
  unitsInputContainer.appendChild(qty);
  unitsInputContainer.appendChild(quantityInput);
  return unitsInputContainer;
}

function createDeleteButton() {
  var deleteButtonContainer = document.createElement("div");
  deleteButtonContainer.className = "delete-button";
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-delete");
  deleteButton.innerHTML = "Delete";
  deleteButtonContainer.appendChild(deleteButton);
  deleteButton.onclick = deleteItem;
  return deleteButtonContainer;
}

function createTotalProductPrizeNode() {
  var totalProductPriceContainer = document.createElement("div");
  totalProductPriceContainer.className = "total-product-price";
  var totalProductPrize = document.createElement("p");
  totalProductPrize.innerHTML = "$0.00";
  totalProductPriceContainer.appendChild(totalProductPrize);
  return totalProductPriceContainer;
}

function createNewItemRow(itemName, itemUnitPrice) {
  var wrapper = document.createElement("div");
  wrapper.className = "product-wrapper";

  wrapper.appendChild(createProductName(itemName));
  wrapper.appendChild(createUnitCost(itemUnitPrice));
  wrapper.appendChild(createQuantityInputNode());
  wrapper.appendChild(createTotalProductPrizeNode());
  wrapper.appendChild(createDeleteButton());

  document.querySelector(".products").appendChild(wrapper);
}

function createNewItem() {
  var newItem = this.parentNode;
  createNewItemRow(
    newItem.querySelector(".item-name").value,
    newItem.querySelector(".unit-price").value
  );

  newItem.querySelector(".item-name").value = "";
  newItem.querySelector(".unit-price").value = "";
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