/******************************************
 * Calculate total price
 ******************************************/
function getTotalPrice() {
  // 1. get the arrays of all needed items
  var unitPrices = [...document.querySelectorAll(".unit-price")];
  var quantities = [...document.querySelectorAll(".input-quantity")];
  var totalPrices = [...document.querySelectorAll(".total-price")];
  var products = []; // array to store the product of unit price and quantity

  // check if the totalPrices array is empty
  if (totalPrices.length !== 0) {
    // 2. calculate and update the total price for each product
    totalPrices.forEach(function(totalPrice, i) {
      // get the text content of the unit-price div
      var unitPrice = parseFloat(unitPrices[i].textContent.slice(1));
      // get the input value of the input-quantity input
      var quantity = parseFloat(quantities[i].value);

      // Validate quantity
      if (!isNaN(quantity)) {
        products.push(unitPrice * quantity);
        totalPrice.innerHTML = "$" + (unitPrice * quantity).toFixed(2);

        // 3. get and update the total price for all products
        var sum = products.reduce((acc, num) => acc + num);
        document.querySelector(".total-price-all span").innerHTML = "$" + sum;
      } else {
        quantities[i].value = "0";
      }
    });
  } else {
    document.querySelector(".total-price-all span").innerHTML = "$0.00";
  }
}

/******************************************
 * Delete Item
 ******************************************/
function deleteItem(e) {
  var deleteBtn = e.currentTarget;
  var wrapper = deleteBtn.parentElement.parentElement;
  var section = document.getElementById("section-product");

  section.removeChild(wrapper);
  getTotalPrice();
}

/******************************************
 * Create New Elements
 ******************************************/
// product
function createNewProduct(itemName) {
  var product = document.createElement("div");
  product.className = "product";
  product.innerHTML = `<span>${itemName}</span>`;

  return product;
}

// unit-price
function createUnitPrice(itemUnitPrice) {
  var unitPrice = document.createElement("div");
  unitPrice.className = "unit-price";
  unitPrice.innerHTML = `<span>$${parseFloat(itemUnitPrice).toFixed(2)}</span>`;

  return unitPrice;
}

// input-quantity
function createQuantityInput() {
  var quantityInput = document.createElement("input");

  quantityInput.type = "text";
  quantityInput.value = "0";
  quantityInput.className = "input-quantity m-l-10 p-l-15";

  return quantityInput;
}

function createQuantityNode() {
  var div = document.createElement("div");
  var label = document.createElement("label");
  var quantityInput = createQuantityInput();

  label["for"] = "quantity";
  label.innerHTML = "QTY";
  div.appendChild(label);
  div.appendChild(quantityInput);

  return div;
}

// totol-price
function createTotalPrice() {
  var totalPrice = document.createElement("div");
  totalPrice.innerHTML = "<span>$0.00</span>";
  totalPrice.className = "total-price";

  return totalPrice;
}

// btn-delete
function createDeleteButton() {
  var div = document.createElement("div");
  var deleteBtn = document.createElement("button");

  deleteBtn.type = "button";
  deleteBtn.className = "btn-delete";
  deleteBtn.innerHTML = "Delete";
  deleteBtn.onclick = deleteItem;
  div.appendChild(deleteBtn);

  return div;
}

// create new row
function createNewRow(itemName, itemUnitPrice) {
  var product = createNewProduct(itemName);
  var unitPrice = createUnitPrice(itemUnitPrice);
  var quantity = createQuantityNode();
  var totalPrice = createTotalPrice();
  var deleteBtn = createDeleteButton();
  var wrapper = document.createElement("div");

  wrapper.className = "wrapper";
  wrapper.appendChild(product);
  wrapper.appendChild(unitPrice);
  wrapper.appendChild(quantity);
  wrapper.appendChild(totalPrice);
  wrapper.appendChild(deleteBtn);

  return wrapper;
}

/******************************************
 * Create new item Button
 ******************************************/
function createNewItem() {
  var product = document.getElementById("input-product").value;
  var unitPrice = document.getElementById("input-price").value;

  // Validation
  if (product.trim() === "" || unitPrice.trim() === "") {
    document
      .getElementById("input-product")
      .setAttribute("placeholder", "Please enter product Name");
    document
      .getElementById("input-price")
      .setAttribute("placeholder", "Please enter product price");
  } else if (isNaN(parseFloat(unitPrice))) {
    document.getElementById("input-price").value = "";
    document
      .getElementById("input-price")
      .setAttribute("placeholder", "Must be a number!");
  } else {
    var wrapper = createNewRow(product, unitPrice);
    document.getElementById("section-product").appendChild(wrapper);
  }
}

/******************************************
 * Assign Event to Button
 ******************************************/
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
