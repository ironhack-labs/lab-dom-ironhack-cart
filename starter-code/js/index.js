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
  let quantity = parseInt(product.querySelector(".quantity").value);
  let productTotalPrice = productPrice * quantity;

  product.querySelector(".total-product-price p").innerHTML =
    "$" + productTotalPrice.toFixed(2);

  return productTotalPrice;
}

function getTotalPrice() {
  let products = Array.from(document.querySelectorAll(".product-wrapper"));
  let total = 0;

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
  let productNameContainer = document.createElement("div");
  productNameContainer.className = "product-name";
  let productName = document.createElement("p");
  productName.innerHTML = itemName;
  productNameContainer.appendChild(productName);
  return productNameContainer;
}

function createUnitCost(itemUnitPrice) {
  let unitCostContainer = document.createElement("div");
  unitCostContainer.className = "unit-cost";
  let unitCost = document.createElement("p");
  unitCost.innerHTML = "$" + parseFloat(itemUnitPrice).toFixed(2);
  unitCostContainer.appendChild(unitCost);
  return unitCostContainer;
}

function createQuantityInputNode() {
  let unitsInputContainer = document.createElement("div");
  unitsInputContainer.className = "units-input";
  let qty = document.createElement("p");
  qty.innerHTML = "QTY";
  let quantityInput = document.createElement("input");
  quantityInput.className = "quantity";
  quantityInput.value = 0;
  quantityInput.dataType = "text";
  unitsInputContainer.appendChild(qty);
  unitsInputContainer.appendChild(quantityInput);
  return unitsInputContainer;
}

function createDeleteButton() {
  let deleteButtonContainer = document.createElement("div");
  deleteButtonContainer.className = "delete-button";
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-delete");
  deleteButton.innerHTML = "Delete";
  deleteButtonContainer.appendChild(deleteButton);
  deleteButton.onclick = deleteItem;
  return deleteButtonContainer;
}

function createTotalProductPrizeNode() {
  let totalProductPriceContainer = document.createElement("div");
  totalProductPriceContainer.className = "total-product-price";
  let totalProductPrize = document.createElement("p");
  totalProductPrize.innerHTML = "$0.00";
  totalProductPriceContainer.appendChild(totalProductPrize);
  return totalProductPriceContainer;
}

function createNewItemRow(itemName, itemUnitPrice) {
  let wrapper = document.createElement("div");
  wrapper.className = "product-wrapper";

  wrapper.appendChild(createProductName(itemName));
  wrapper.appendChild(createUnitCost(itemUnitPrice));
  wrapper.appendChild(createQuantityInputNode());
  wrapper.appendChild(createTotalProductPrizeNode());
  wrapper.appendChild(createDeleteButton());

  document.querySelector(".products").appendChild(wrapper);
}

function createNewItem() {
  let newItem = this.parentNode;
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
