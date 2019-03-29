//ironhack cart elements
var calculatePriceButton = document.getElementById("calc-price")

var unitPrices = document.querySelectorAll(".unitPrice")

var unitTotals = document.querySelectorAll(".unitTotal")

var productsContainer = document.getElementById("product-list")

var allDeleteButtons = document.querySelectorAll(".btn-delete")

var allProducts = productsContainer.querySelectorAll(".product");
var allInputs = document.querySelectorAll(".quantity");

var cartTotal = document.getElementById("cartTotal")

inputEvent();
deleteEvent();

// update unit total with quantity change
function inputEvent() {
  allInputs.forEach( (input, index) => {
    input.oninput = function() {
      updatePriceByProduct(unitPrices[index].textContent,index)
    }
  });
}


// click event for calculate prices
calculatePriceButton.onclick = function() {
  getTotalPrice();
}

function updatePriceByProduct(productPrice, index){
  var itemQuantity = allInputs[index].value;
  var unitTotal = unitTotals[index]
  unitTotal.textContent = (itemQuantity*productPrice).toFixed(2)
}

function getTotalPrice() {
  let sum = 0;
  unitTotals.forEach( total => {
    sum += Number(total.textContent);
  })
  cartTotal.textContent = sum.toFixed(2);
}

// click event for delete button
function deleteEvent() {
  allDeleteButtons.forEach( button => {
    button.onclick = function() {
      deleteItem(button.parentNode)
    }
  });
}


function deleteItem(e){
  alert("are you sure you want to delete?")
  productsContainer.removeChild(e);
  updateVars();
  getTotalPrice();
}

// Create Item Elements

var newNameField = document.getElementById("newProduct")
var newPriceField = document.getElementById("newPrice")
var createItemButton = document.getElementById("createItem")

// click event for create item
createItemButton.onclick = function() {
  var newID = spacesToHyphen(newNameField.value) 
  createNewItemRow(newID, newNameField.value, newPriceField.value);
  updateVars();
}

function createItemNode( tagType, className, content){
  var newNode = document.createElement(tagType);
  newNode.setAttribute("class", className);
  newNode.innerHTML = content;
  return newNode;
}

function createQuantityNode(){
  var quantityNode = createItemNode("div","units", null)

  var newLabel = createItemNode("label", "", "QTY");
  newLabel.setAttribute("for", "qty")

  var inputField = createQuantityInput();
  quantityNode.appendChild(inputField)
  quantityNode.insertBefore(newLabel, inputField);
  return quantityNode;
}

function createQuantityInput(){
  var newInput = createItemNode("input");
  newInput.setAttribute( "class", "quantity" )
  newInput.setAttribute( "type", "number")
  newInput.setAttribute( "name", "qty" )
  return newInput;
}

function createUnitPrice(newUnitPrice) {
  var priceDiv = createItemNode("div", "setPrice", "$")
  var priceSpan = createItemNode("span","unitPrice")
  priceSpan.textContent= Number(newUnitPrice).toFixed(2);
  priceDiv.appendChild(priceSpan)
  return priceDiv;
}

function createUnitTotal() {
  var totalDiv = createItemNode("div", "total", "$")
  var totalSpan = createItemNode("span","unitTotal")
  totalSpan.textContent= "00.00";
  totalDiv.appendChild(totalSpan)
  return totalDiv;
}

function spacesToHyphen(string) {
  return string.split(" ").join("-")
}

function createNewItem(newID){
  var newProductNode = createItemNode("div", "product", null)
  newProductNode.setAttribute("id", newID)
  productsContainer.appendChild(newProductNode)
  return newProductNode;
}


function createDeleteButton(){
  return createItemNode("button","btn btn-delete", "Delete");
}

function createNewItemRow(newID, itemName, itemUnitPrice){
  var productParent = createNewItem(newID)

  var productName = createItemNode("span","productName",itemName);

  var unitPrice = createUnitPrice(itemUnitPrice);

  var quantityNode = createQuantityNode();

  var unitTotal = createUnitTotal();
  var deleteButton = createDeleteButton();

  productParent.appendChild(productName)
  productParent.appendChild(unitPrice)
  productParent.appendChild(quantityNode)
  productParent.appendChild(unitTotal)
  productParent.appendChild(deleteButton)
  return productParent;
}

function updateVars() {
  unitPrices = document.querySelectorAll(".unitPrice")
  unitTotals = document.querySelectorAll(".unitTotal")

  allDeleteButtons = document.querySelectorAll(".btn-delete")

  allProducts = productsContainer.querySelectorAll(".product");
  allInputs = document.querySelectorAll(".quantity");

  inputEvent();
  deleteEvent();
}

/*
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-price');
  var createItemButton = document.getElementById('create-item');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    // deleteButtons[i].onclick = deleteItem;
  }
};
*/