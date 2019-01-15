function deleteItem(e) {
  var deleteBtn = e.currentTarget;
  var mainDiv = document.querySelector(".main-div");
  var wrapper = deleteBtn.parentElement.parentElement;
  console.log(mainDiv);
  console.log(wrapper);

  mainDiv.removeChild(wrapper);

  getTotalPrice();
}

// function getPriceByProduct(itemNode) {}

// function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  var unitPrice = document.querySelectorAll(".unit-cost");
  var quantityDesired = document.querySelectorAll(".input");
  var totalPrice = document.querySelectorAll(".total-price");
  var finalTotalPrice = document.querySelector("h2>span");
  var finalPrice = 0;

  if (unitPrice.length != 0) {
    for (var i = 0; i < unitPrice.length; i++) {
      totalPrice[i].textContent =
        "$" +
        (quantityDesired[i].value * unitPrice[i].textContent.slice(1)).toFixed(
          2
        );
    }

    console.log(totalPrice[0].textContent.slice(1));

    for (var i = 0; i < totalPrice.length; i++) {
      finalPrice += parseFloat(totalPrice[i].textContent.slice(1));
    }

    finalTotalPrice.textContent = "$" + finalPrice.toFixed(2);
  } else finalTotalPrice.textContent = "$0.00";
}

function createNewItem(itemName) {
  var newItem = document.createElement("div");
  newItem.className = "product-name";
  newItem.innerHTML = `<span>${itemName}</span>`;

  return newItem;
}

function createNewItemPrice(price) {
  var itemPrice = document.createElement("div");
  itemPrice.className = "unit-cost";
  itemPrice.innerHTML = `<span>$${parseFloat(price).toFixed(2)}</span>`;

  return itemPrice;
}

function createQuantityInput() {
  var div = document.createElement("div");
  var newlabel = document.createElement("label");
  newlabel["for"] = "qty";
  newlabel.className = "quantity";
  newlabel.innerHTML = "QTY";

  var newInput = document.createElement("input");
  newInput.type = "text";
  newInput.className = "input";
  newInput.value = "0";

  div.appendChild(newlabel);
  div.appendChild(newInput);

  return div;
}

function createTotalPrice() {
  var newPrice = document.createElement("div");
  newPrice.className = "total-price";
  newPrice.innerHTML = `<span>$0.00</span>`;

  return newPrice;
}

function createDeleteButton() {
  var newDiv = document.createElement("div");
  var newDelete = document.createElement("button");

  newDelete.className = "btn btn-delete";
  newDelete.innerHTML = "Delete";
  newDelete.onclick = deleteItem;

  newDiv.appendChild(newDelete);

  return newDiv;
}

// function createQuantityNode() {}

// function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {
  var newWrap = document.createElement("div");
  newWrap.className = "wrapper";

  var newProduct = createNewItem(itemName);
  var newProductPrice = createNewItemPrice(itemUnitPrice);
  var newQuantity = createQuantityInput();
  var newTotalPrice = createTotalPrice();
  var newDelete = createDeleteButton();

  newWrap.appendChild(newProduct);
  newWrap.appendChild(newProductPrice);
  newWrap.appendChild(newQuantity);
  newWrap.appendChild(newTotalPrice);
  newWrap.appendChild(newDelete);

  return newWrap;
}

function createNewItem1() {
  var newProductInput = document.querySelector(".new-product").value;
  var newProductPriceInput = document.querySelector(".new-product-price").value;

  var newItem = createNewItemRow(newProductInput, newProductPriceInput);

  document.querySelector(".main-div").appendChild(newItem);
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem1;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
