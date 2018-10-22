

function turnCollectionToArray(htmlCollection) {
  var arr = [].slice.call(htmlCollection);
  return arr;
}


//Retrieves the unit price of the product
var totalPrices = turnCollectionToArray(document.getElementsByClassName("prices")); 


// Retrieves the quantity of items desired
var totalQuantities = turnCollectionToArray(document.getElementsByClassName("quantities"));

// Retrieving Subtotal 
var subtotals = turnCollectionToArray(document.getElementsByClassName("subtotals"));

//Calculates the total price based on totalQuantities totalPrices data
var total = totalPrices.reduce(function(sum, eachPrice){
  return sum + eachPrice;
}, 0);

// FUNCTIONS TO CLONE FIRST NODE IN MAKING NEW ITEM ROW

function cloneItem() {
  var item = turnCollectionToArray(document.getElementsByClassName("item"))

  var newItem = item[0].cloneNode(true);

  document.getElementById("cart").appendChild(newItem);
  deleteButtonsEvents()
}




// function createNewItemRow(itemName, itemUnitPrice){

function createNewItemRow() {
  var nameField = document.getElementById("new-product-name");
  var priceField = document.getElementById("new-product-price");
  
  if (nameField.value && priceField.value !== "") {
  var createField = document.getElementById("create-item");
  var item = turnCollectionToArray(document.getElementsByClassName("item"))
  var newItem = item[0].cloneNode(true);

  newItem.firstElementChild.firstElementChild.innerText = document.getElementById("new-product-name").value;
  newItem.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerText = document.getElementById("new-product-price").value;

  var cart = document.getElementById("cart");
  cart.insertBefore(newItem, createField);
  deleteButtonsEvents();
  }
  

  // return newItem;
}

// END OF ARRAY VARIABLES



function deleteItem(e){
    var thisButton = e.currentTarget;
    var buttonContainer = thisButton.parentElement;
    var productContainer = buttonContainer.parentElement;
    var cart = productContainer.parentElement;
  
    cart.removeChild(productContainer);
  }

  function deleteButtonsEvents(){
    var deleteButtons = document.getElementsByClassName('btn-delete btn');
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
  }

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

// VARS ARE ALL DECLARED IN HERE SO THEY UPDATE DYNAMICALLY AFTER DELETING OR ADDING NEW ITEMS

var totalPrices = turnCollectionToArray(document.getElementsByClassName("prices"));
var totalQuantities = turnCollectionToArray(document.getElementsByClassName("quantities"))
var subtotals = turnCollectionToArray(document.getElementsByClassName("subtotals"))

// BELOW CODE LOOPS THROUGH AND UPDATES ALL SUBTOTAL VALUES

for (i = 0; i < totalPrices.length; i++) {
    qty = totalQuantities[i].value;
    price = totalPrices[i].innerText;
    subtotals[i].innerText = (qty * price).toFixed(2);
  };

// ADDS UP ALL SUBTOTAL UPDATES AND DUMPS THEM INTO SUBTOTALSADDED

  var subtotalsAdded = subtotals.reduce(function(sum, price) {
    return sum + Number(price.innerText);
  },0)

// UPDATES THE BOTTOM GRAND TOTAL CONTAINER

  document.getElementById("grand-total").innerText = subtotalsAdded.toFixed(2);
}

// FUNCTION TO ADD NAME TO NEW ITEM ROWS - WILL BE USED BY CONSTRUCTOR FUNCTION

function createNameDiv() {
  var itemNameContainer = document.createElement("div");
  var itemNameSpan = document.createElement("span");
  var itemNameText = document.getElementById("new-product-name").value;
  
  itemNameContainer.setAttribute('class', 'item-name');
  
  itemNameSpan.innerText = itemNameText;

  itemNameContainer.appendChild(itemNameSpan);
  
  return itemNameContainer;
}

// FUNCTION TO ADD PRICE TO NEW ITEMS - WILL BE USED BY CONSTRUCTOR

function createPriceDiv() {
  var priceContainer = document.createElement("div");
  var priceOuterSpan = document.createElement("span");
  var priceInnerSpan = document.createElement("span");

  priceContainer.setAttribute('class', 'price');
  priceInnerSpan.setAttribute('class', 'prices');

  var newItemPrice = Number(document.getElementById("new-product-price").value);
  
  priceOuterSpan.innerText = "$ ";
  priceInnerSpan.innerText = newItemPrice.toFixed(2);

  priceOuterSpan.appendChild(priceInnerSpan);
  priceContainer.appendChild(priceOuterSpan);

  return priceContainer;
}

// WILL ADD QTY DIV - USED BY CONSTRUCTOR

function createQtyDiv() {
var qtyContainer = document.createElement("div");
var qtyLabel = document.createElement("label");
var qtyInput = document.createElement("input");

qtyContainer.setAttribute('class', 'qty');

var newProductQty = document.getElementById("new-product-qty").value

qtyInput.setAttribute('class', 'quantities');
qtyInput.setAttribute('type', 'number');
qtyInput.setAttribute('value', newProductQty);
qtyInput.setAttribute('min', "0");

qtyLabel.innerText = "QTY"

qtyContainer.appendChild(qtyLabel);
qtyContainer.appendChild(qtyInput);

return qtyContainer;
}

// SUBTOTAL DIV FOR USE IN CONSTRUCTOR

function createSubtotalDiv() {
var subtotalContainer = document.createElement("div");
var subtotalOuterSpan = document.createElement("span");
var subtotalInnerSpan = document.createElement("span");

subtotalContainer.setAttribute('class', 'subtotal-container');
subtotalInnerSpan.setAttribute('class', 'subtotals');

var newProductPrice = document.getElementById("new-product-price").value;
var newProductQty = document.getElementById("new-product-qty").value;
var newProductSubtotal = newProductQty * newProductPrice;

subtotalOuterSpan.innerText = "$ ";

subtotalInnerSpan.innerText = newProductSubtotal.toFixed(2);

subtotalOuterSpan.appendChild(subtotalInnerSpan);
subtotalContainer.appendChild(subtotalOuterSpan);

return subtotalContainer;
}

// DELETE BUTTON CREATOR - USED BY CONSTRUCTOR

function createDeleteButtonDiv() {
  var deleteContainer = document.createElement("div");
  var deleteButton = document.createElement("button");

deleteContainer.setAttribute('class', 'delete-button');
deleteButton.setAttribute('class', 'btn-delete btn');

deleteButton.innerText = "DELETE";

deleteContainer.appendChild(deleteButton);

return deleteContainer;
}

// TAKES ALL DIV FUNCTION OUTPUTS AND PUTS THEM TOGETHER - BUT ONLY CALLED BY createNewItem

function newRowAssembler(containerDiv, nameDiv, priceDiv, qtyDiv, subtotalDiv, deleteDiv) {
  containerDiv.appendChild(nameDiv);
  containerDiv.appendChild(priceDiv);
  containerDiv.appendChild(qtyDiv);
  containerDiv.appendChild(subtotalDiv);
  containerDiv.appendChild(deleteDiv);

  return containerDiv;
}

function createNewItem() {
var newProductNameField = document.getElementById("new-product-name");
var newProductPriceField = document.getElementById("new-product-price");

  if (newProductNameField.value && newProductPriceField.value !== "") {
  var newDiv = document.createElement("div");

  var newlyCreatedDiv = newRowAssembler(newDiv, createNameDiv(), createPriceDiv(), createQtyDiv(), createSubtotalDiv(), createDeleteButtonDiv());

  newlyCreatedDiv.setAttribute('class', 'item');

  var cart = document.getElementById("cart");
  var createDiv = document.getElementById("create-item");

  cart.insertBefore(newlyCreatedDiv, createDiv);

  deleteButtonsEvents();
  clearNewItemFields();
  }
}

// FUNCTION TO RESET NEW ITEM NAME, PRICE, AND QTY FIELDS AFTER NEW ITEM IS ADDED

function clearNewItemFields() {
  document.getElementById("new-product-name").value = "";
  document.getElementById("new-product-price").value = "";
  document.getElementById("new-product-qty").value = 1;
}

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// }

window.onload = function(){
  var calculatePriceButton = document.getElementById('calculatePriceButton');
  var createItemButton = document.getElementById('create-btn');
  var deleteButtons = document.getElementsByClassName('btn-delete btn');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  deleteButtonsEvents();
  
  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};