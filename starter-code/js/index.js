var itemsPrice = document.getElementsByClassName("price");
var itemQuantity = document.getElementsByClassName("numberOfItems");
var finalPrices = [];
var list = document.getElementById("itemsList");

function itemFinalPrice () {
  finalPrices = [];
  for (var i = 0; i < itemsPrice.length; i++) {
    finalPrices.push(itemsPrice[i].textContent*itemQuantity[i].value);
  }
  return finalPrices;
}

function assignmentLoop() {
  itemFinalPrice();
  for(var i = 0; i < itemsPrice.length; i++) {
    document.getElementsByClassName("result")[i].innerHTML =  finalPrices[i];
  }
  return finalPrices;
}

function absolutePrice() {
  assignmentLoop();
  var pricesSum = 0;
  for(var j = 0; j < finalPrices.length; j++) {
    pricesSum += finalPrices[j];
  }
  document.getElementById("priceResult").textContent = pricesSum;
}

var deleteItem = function (event) {
  event.preventDefault();
  event.currentTarget.parentElement.parentNode.remove();
};



function creation (event) {
  var createItemNameDiv = document.createElement('div');
  createItemNameDiv.className = "itemName";
  var getFirstInput = document.getElementById("newItemName").value;
  createItemNameDiv.innerHTML = getFirstInput;
  var createItemPriceDiv = document.createElement('div');
  createItemPriceDiv.className = "itemPrice";
  var createItemPriceSpan = document.createElement("span");
  createItemPriceSpan.className = "price";
  createItemPriceSpan.type = "number";
  var getSecondInput = document.getElementById("newItemPrice").value;
  createItemPriceSpan.innerHTML = getSecondInput;
  var createItemPriceSecondSpan = document.createElement('span');
  createItemPriceSecondSpan.innerHTML = " €";
  createItemPriceDiv.appendChild(createItemPriceSpan);
  createItemPriceDiv.appendChild(createItemPriceSecondSpan);
  var createItemQuantityDiv = document.createElement('div');
  createItemQuantityDiv.className = "itemQuantity";
  var createItemQuantityForm = document.createElement('form');
  createItemQuantityForm.innerHTML = "QTY:";
  var createItemQuantityInputBox = document.createElement('input');
  createItemQuantityInputBox.className = "numberOfItems";
  createItemQuantityInputBox.type = "number";
  createItemQuantityInputBox.name = "Quantity";
  createItemQuantityForm.appendChild(createItemQuantityInputBox);
  createItemQuantityDiv.appendChild(createItemQuantityForm);
  var createTotalPriceDiv = document.createElement('div');
  createTotalPriceDiv.className = "totalPrice";
  var createTotalPriceSpan = document.createElement('span');
  createTotalPriceSpan.className = "result";
  createTotalPriceSpan.innerHTML = "0";
  var createTotalPriceSecondSpan = document.createElement("span");
  createTotalPriceSecondSpan.innerHTML = " €";
  createTotalPriceDiv.appendChild(createTotalPriceSpan);
  createTotalPriceDiv.appendChild(createTotalPriceSecondSpan);
  var createDeleteDiv = document.createElement('div');
  createDeleteDiv.className = "delete";
  var createDeleteButton = document.createElement('button');
  createDeleteButton.className = "deleteButton";
  createDeleteButton.type = "button";
  createDeleteButton.innerHTML = "Delete";
  createDeleteDiv.appendChild(createDeleteButton);
  createDeleteButton.onclick = deleteItem;
  var createItemDiv = document.createElement('div');
  createItemDiv.className = "item";
  createItemDiv.appendChild(createItemNameDiv);
  createItemDiv.appendChild(createItemPriceDiv);
  createItemDiv.appendChild(createItemQuantityDiv);
  createItemDiv.appendChild(createTotalPriceDiv);
  createItemDiv.appendChild(createDeleteDiv);
  var itemsListElement = document.getElementById('itemsList');
  itemsListElement.appendChild(createItemDiv);

}
