//   //retrieve de unit price of the product -> OK
//   //Retrieves the quantity of items desired -> OK
//   //Calculates the total price based on this data -> OK
//   //Updates the total price in the DOM -> Ok
//add another product -> OK
//calculate prices for each line of products -> Ok
function calculatePrice() {
  for (var itemIndex = 0; itemIndex < document.getElementsByClassName("cost-unit").length; itemIndex++) {
    var unitPrice = parseInt(document.getElementsByClassName("cost-unit")[itemIndex].innerHTML);
    var quantityItems = parseInt(document.getElementsByClassName("input")[itemIndex].value);
    var priceForThisProducts = unitPrice * quantityItems;
    document.getElementsByClassName("total-price")[itemIndex].innerHTML = priceForThisProducts;
  }
}

//this calculates the sum of all subprices
function calculateTotalPrice() {
  var totalPrice = 0;
  for (var priceIndex = 0; priceIndex < document.getElementsByClassName("total-price").length; priceIndex++) {
    var subTotalPricePerItem = parseInt(document.getElementsByClassName("total-price")[priceIndex].innerHTML);
    totalPrice += subTotalPricePerItem;
  }
  document.getElementsByClassName("final-price-calculation")[0].innerHTML = totalPrice;
}

//this updates all the prices lines when clicking the calculate button
function calculateAllPrices() {
  calculatePrice();
  calculateTotalPrice();
}

//this deletes each button depending its div ID and recalculates the total prices
function deleteItem(item) {
  var itemId = item.id;
  var deleteItemDiv = document.getElementById(itemId);
  deleteItemDiv.innerHTML = "";
  calculateTotalPrice();
  // moveUpItem();
}
deleteItem();

// function moveUpItem() {
//   var totalPrice = 0;
//   for (var sectionIndex = 0; sectionIndex < document.getElementsByClassName("product-section").length; sectionIndex++) {
//     document.getElementsByClassName("product-section").push(sectionIndex);
//   }
// }



//this saves the name of the new item
function getNewItemName() {
  var newItemName = document.getElementsByClassName("input-new-itemName")[0].value;
  return newItemName;
}

//this saves the price of the new item
function getNewItemPrice() {
  var newItemPrice = document.getElementsByClassName("input-new-itemPrice")[0].value;
  return newItemPrice;
}

//this creates a new item div
function newItemLine() {
  var newItemLine = document.createElement("div");
  newItemLine.setAttribute("class", "product-section");
  newItemLine.setAttribute("id", "item" + document.getElementsByClassName("product-section").length);
  var parent = document.getElementsByClassName("items-container")[0];
  return parent.appendChild(newItemLine);
}

//this creates a new item name
function newItemName() {
  var newItemName = document.createElement("span");
  newItemName.setAttribute("class", "product-name");
  newItemName.innerHTML = getNewItemName();
  var lastItemIndex = document.getElementsByClassName("product-name").length;
  var parent = document.getElementsByClassName("product-section")[lastItemIndex];
  return parent.appendChild(newItemName);
}

//this creates a new item price
function newItemPrice() {
  var newItemPrice = document.createElement("span");
  newItemPrice.setAttribute("class", "cost-unit");
  newItemPrice.innerHTML = getNewItemPrice();
  var lastItemIndex = document.getElementsByClassName("cost-unit").length;
  var parent = document.getElementsByClassName("product-section")[lastItemIndex];
  return parent.appendChild(newItemPrice);
}

//this creates a new item form element
function newItemQtyFormField() {
  var newItemQtyFormField = document.createElement("form");
  newItemQtyFormField.setAttribute("class", "input-form");
  newItemQtyFormField.innerHTML = "QTY:";
  var lastItemIndex = document.getElementsByClassName("product-name").length;
  var parent = document.getElementsByClassName("product-section")[lastItemIndex - 1];
  return parent.appendChild(newItemQtyFormField);
}

function newItemQtyInputField() {
  var newItemQtyInputField = document.createElement("input");
  newItemQtyInputField.setAttribute("class", "input");
  newItemQtyInputField.setAttribute("value", 0);
  var lastItemIndex = document.getElementsByClassName("input-form").length;
  var parent = document.getElementsByClassName("input-form")[lastItemIndex - 1];
  return parent.appendChild(newItemQtyInputField);
}

//this creates a new subtotal field
function newItemSubTotal() {
  var newItemSubTotal = document.createElement("span");
  newItemSubTotal.setAttribute("class", "total-price");
  newItemSubTotal.innerHTML = "0.00";
  var lastItemIndex = document.getElementsByClassName("cost-unit").length;
  var parent = document.getElementsByClassName("product-section")[lastItemIndex - 1];
  return parent.appendChild(newItemSubTotal);
}

//this creates a new item delete button
function newItemDelButton() {
  var newItemDelButton = document.createElement("button");
  newItemDelButton.setAttribute("class", "button button-delete");
  var positionOfItem = document.getElementsByClassName("cost-unit").length;
  var idSectionItem = "item" + positionOfItem;
  var atributeToPass = "deleteItem(" + idSectionItem + ")";
  newItemDelButton.setAttribute("onclick", atributeToPass);
  newItemDelButton.innerHTML = "Delete";
  var lastItemIndex = document.getElementsByClassName("cost-unit").length;
  var parent = document.getElementsByClassName("product-section")[lastItemIndex - 1];
  return parent.appendChild(newItemDelButton);
}

// function clearValuesInput() {
//   var field1 = document.getElementsByClassName("input-new-itemName")[0];
//   field1.setAttribute("value", "");
//   var field2 = document.getElementsByClassName("input-new-itemPrice")[0];
//   field2.setAttribute("value", "");
// }

//this executes a new item creation section
function insertNewItem() {
  newItemLine();
  newItemName();
  newItemPrice();
  newItemQtyFormField();
  newItemQtyInputField();
  newItemSubTotal();
  newItemDelButton();
  // clearValuesInput();
}
insertNewItem();
