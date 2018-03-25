function deleteItem(row) {
  row.parentNode.parentNode.remove(0);
  getTotalPrice();
  return;
}

function getPriceByProduct(itemNode) {
  var quantity = itemNode.querySelector(".quantity").value;
  var priceString = itemNode.querySelector(".unit-price").innerHTML;
  console.log(quantity, priceString)
  var price = priceString.slice(priceString.indexOf("$") + 1);
  return price * quantity;
}

function getTotalPrice() {
  var grandTotal = 0;
  var allRows = document.querySelectorAll(".row-item");
  var grandTotalDisplay = document.getElementById("grand-total");

  allRows.forEach(function(row) {
    var itemTotalPrice = getPriceByProduct(row);
    row.querySelector(".total-price").innerHTML =
      "$" + itemTotalPrice.toFixed(2);
    grandTotal += Number(row.querySelector(".total-price").innerHTML.slice(1));
  });
  grandTotalDisplay.innerHTML = "$" + grandTotal.toFixed(2);
}

function createItemNode() {
  var copy = document.querySelectorAll(".row-item")[0];
  var template = copy.cloneNode(true);

  return template;
}

function createNewItemRow(itemName, itemUnitPrice) {
  if (itemName == "" && itemUnitPrice == "") {
    return;
  }
  var newNode = createItemNode();

  newNode.querySelector(".unit-name").innerHTML = itemName;
  newNode.querySelector(".unit-price").innerHTML = itemUnitPrice;
  newNode.querySelector(".total-price").innerHTML = "$0.00";
  newNode.querySelector(".quantity").innerHTML = "";

  return newNode;
}

function createNewItem() {
  var lastItem = document.querySelector(".row");
  var newDiv = document.createElement("div");
  var newItemName = document.getElementById("newItemName").value;
  var newItemPrice = document.getElementById("newItemPrice").value;

  var newNode = createNewItemRow(newItemName, newItemPrice);

  newNode.appendChild(newDiv);
  lastItem.appendChild(newNode);
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  var items = document.querySelectorAll(".row-item");

  calculatePriceButton.onclick = function() {
    getTotalPrice();
  };

  createItemButton.onclick = function() {
    createNewItem();
  };

  document.onclick = function(e) {
    if (e.target.className.indexOf("btn-delete") > -1) {
      deleteItem(e.target);
  
    }
  };

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function(e) {
      deleteItem(e.target);
    };
  }
};
