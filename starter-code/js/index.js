function deleteItem(e) {
  e.path[2].remove();
}

function getPriceByProduct(itemNode) {
  
}

function updatePriceByProduct(productPrice, index) {
  
}

function getTotalPrice() {
  var unitPrice = document.querySelectorAll(".unit-price span");

  var quantity = document.querySelectorAll(".quantity input");

  var totalPriceDomElem = document.querySelectorAll(".total-price span");

  var totalGlobalPriceDomElem = document.querySelector("#global-price span");

  var globalPrice = [];

  for (var i = 0; i < unitPrice.length; i++) {
    var unitValueString = unitPrice[i].textContent;

    var unitValue = parseFloat(
      unitValueString.substring(1, unitValueString.length - 1)
    );

    var unitQuantity = parseInt(quantity[i].value);

    var totalPrice = unitValue * unitQuantity;

    totalPriceDomElem[i].textContent = "$" + totalPrice.toFixed(2);

    globalPrice.push(totalPrice);
  }

  var totalGlobalPrice = globalPrice.reduce((a, cv) => a + cv, 0);

  totalGlobalPriceDomElem.textContent = "$" + totalGlobalPrice.toFixed(2);
}

function createQuantityInput() {
  
}

function createDeleteButton() {
  
}

function createQuantityNode() {
  
}

function createItemNode(dataType, itemData) {
  
}

function createNewItemRow(itemName, itemUnitPrice) {
  
}

function createNewItem() {
  var newProductName = document.querySelector("#product-name").value;

  var newProductPrice = document.querySelector("#product-price").value;

  var productList = document.querySelector("#product-list");

  var div = document.createElement("div");

  var newProductList = `
<div>
  <span>${newProductName}</span>
</div>
<div class="unit-price">
  <span>$${newProductPrice}</span>
</div>
<div class="quantity">
  <label for="quantity">QTY</label>
  <input type="text" value="0" name="quantity">
</div>
<div class="total-price">
  <span>$0.00</span>
</div>
<div>
  <button class="btn btn-delete">Delete</button>
</div>`;

  div.setAttribute("class", "container");
  div.innerHTML = newProductList;

  productList.append(div);
  loadDOMElements();
}

function loadDOMElements() {
  var deleteButtons = document.getElementsByClassName("btn-delete");
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function() {
  loadDOMElements();
};
