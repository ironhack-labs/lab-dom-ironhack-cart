// Create a click event for the Calculate Prices button
// This event will execute a function that:
// Retrieves the unit price of the product
// Retrieves the quantity of items desired
// Calculates the total price based on this data
// Updates the total price in the DOM

var totalPrice = document.querySelector(".totalPrice");

var oneButtonCal = document.querySelector(".btn-success");

oneButtonCal.onclick = function(totalPrice, priceByProduct, quantity) {
  var quantityItems = document.querySelectorAll(".quantity");
  var costItems = document.querySelectorAll(".cost");
  var totalPrice = document.querySelectorAll(".totalPrice");

  var quantityArray = [];

  quantityItems.forEach(function(oneQuantity, i) {
    quantityArray.push(oneQuantity.value);
  });

  var costArray = [];

  costItems.forEach(function(oneCost, i) {
    costArray.push(parseFloat(oneCost.innerHTML));
  });

  var totalPriceArray = [];

  //calculation of the totals prices for each item
  totalPrice.forEach(function(onePrice, i) {
    var total = costArray[i] * quantityArray[i];
    onePrice.innerHTML = total;
    console.log(onePrice);
    totalPriceArray.push(total);
  });

  //Calculation of the total price of the quote
  var totaux = 0;
  totalPriceArray.forEach(function(oneTotPrice, i) {
    totaux = totaux + oneTotPrice;
    console.log(totaux);
  });

  //Replace the default value of h2 in the DOM by the total quote
  var TotauxElement = document.querySelector(".totaux");
  TotauxElement.innerHTML = "$" + totaux;
  var quantity = quantityItems.value;
  console.log(quantity);

  var totalPrice = document.querySelectorAll(".totalPrice");
};

var deleteBtn = document.querySelectorAll(".delButton");
console.log(deleteBtn);

deleteBtn.forEach(function(oneDeleteBtn) {
  console.log(oneDeleteBtn);
  oneDeleteBtn.onclick = function() {
    console.log("coucou DELETE button");
    var parentDiv = oneDeleteBtn.parentNode;
    parentDiv.parentNode.removeChild(parentDiv);
  };
});

postBtn;
// var itemName = document.querySelector(".productName");
// var product = itemName.innerHTML;

// var costItem = document.querySelector(".cost");
// var priceByProduct = costItem.innerHTML;

// console.log(priceByProduct);

// var quantityItem = document.querySelector(".quantity");
// var quantity = quantityItem.value;
// console.log(quantity);

//oneButtonCal(totalPrice, priceByProduct, quantity);
//function clickCalculate()
// function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {}

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
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
