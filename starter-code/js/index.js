//SELECT ELEMENTS IN DOM
var allProducts = document.getElementsByClassName("product-wrapper");
var totalCart = document.querySelector("#total-cart span");
var calculatePriceButton = document.getElementById("calc-prices-button");
var createItemButton = document.getElementById("new-item-create");
var deleteButtons = document.getElementsByClassName("btn-delete");
var newPriceInput = document.getElementById("new-product-price");
var newProductInput = document.getElementById("new-product-name");
var productsWrapper = document.getElementById("products-wrapper");

//ONCLICK EVENTS
calculatePriceButton.onclick = printUpdatedPrices;
createItemButton.onclick = createNewItem;

//FUNCTIONS
function getPriceArray() {
  var priceArray = document.querySelectorAll(".product-price span");
  var priceArrayNum = [];
  // Get an array of all price spans

  for (let i = 0; i < priceArray.length; i++) {
    var productPrice = Number(priceArray[i].innerHTML.slice(1, 5));
    priceArrayNum.push(productPrice);
  }
  // store all numbers inside price spans in an array
  return priceArrayNum;
}

function getQuantityArray() {
  var quantityArray = document.querySelectorAll(".quantity");
  var quantityArrayNum = [];
  // get an array of all quantity inputs

  for (let i = 0; i < quantityArray.length; i++) {
    var quantityVal = quantityArray[i].value;
    quantityArrayNum.push(quantityVal);
  }
  // Get all data from quantity input and store it in an array
  return quantityArrayNum;
}

function getTotalPriceArray() {
  var quantityArrayNum = getQuantityArray();
  var priceArrayNum = getPriceArray();
  var totalPriceArray = [];
  for (let i = 0; i < priceArrayNum.length; i++) {
    totalPriceArray.push(priceArrayNum[i] * quantityArrayNum[i]);
  }
  return totalPriceArray;
}

function printUpdatedPrices() {
  var totalPriceArray = getTotalPriceArray();
  for (let i = 0; i < allProducts.length; i++) {
    let finalPrice = allProducts[i].querySelector(".product-total span");
    finalPrice.innerHTML = priceFormatting(totalPriceArray[i]);
  }
  printTotalCartPrice();
}

function totalCartPrice() {
  var totalPriceArray = getTotalPriceArray();
  var totalCartPrice = 0;
  for (let i = 0; i < allProducts.length; i++) {
    totalCartPrice += totalPriceArray[i];
  }
  return totalCartPrice;
}

function printTotalCartPrice() {
  totalCart.innerHTML = priceFormatting(totalCartPrice());
}

function priceFormatting(arg) {
  if (arg < 10 && isFinite(arg)) {
    return "$0" + arg + ".00";
  } else if (arg < 10 && !isFinite(arg)) {
    return "$0" + arg;
  } else if (arg > 10 && isFinite(arg)) {
    return "$"+ arg + ".00";
  } else if (arg > 10 && !isFinite(arg)) {
    return "$" + arg;
  }
};

//DELETE ITEMS
function deleteItem(e) {
  var deletebutton = e.currentTarget;
  var gParent = deletebutton.parentNode.parentNode;
  var ggParent = deletebutton.parentNode.parentNode.parentNode;
  ggParent.removeChild(gParent);
  printUpdatedPrices();
};

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = deleteItem;
};

// CREATE ELEMENTS
function createNewItem() {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "product-wrapper");
  newDiv.appendChild(createNewName());
  newDiv.appendChild(createNewPrice());
  newDiv.appendChild(createNewQuantity());
  newDiv.appendChild(createNewTotalPrice());
  newDiv.appendChild(createDelete());
  
  productsWrapper.appendChild(newDiv);

  var deleteButtons = document.getElementsByClassName("btn-delete");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  };

};

function createNewName() {
  var newName = document.createElement("div");
  var newNameSpan = document.createElement("span");
  newNameSpan.innerHTML = newProductInput.value;
  newName.setAttribute("class", "product-name");
  newName.appendChild(newNameSpan);
  return newName;
}

function createNewPrice() {
  var newPrice = document.createElement("div");
  var newPriceSpan = document.createElement("span");
  newPriceSpan.innerHTML = priceFormatting(newPriceInput.value);
  newPrice.setAttribute("class", "product-price");
  newPrice.appendChild(newPriceSpan);
  return newPrice;
};

function createNewTotalPrice() {
  var newTotalPrice = document.createElement("div");
  var newTotalPriceSpan = document.createElement("span");
  newTotalPriceSpan.innerHTML = "$0.00";
  newTotalPrice.setAttribute("class", "product-total");
  newTotalPrice.appendChild(newTotalPriceSpan);
  return newTotalPrice;
}

function createNewQuantity() {
  var newQuantity = document.createElement("div");
  var newQuantityLabel = document.createElement("label");
  var newQuantityInput = document.createElement("input");
  newQuantity.setAttribute("class", "product-quantity");
  newQuantityInput.setAttribute("class", "quantity");
  newQuantityInput.setAttribute("type", "text");
  newQuantityInput.setAttribute("value", "0");
  newQuantityLabel.innerHTML = "QTY";
  newQuantityLabel.appendChild(newQuantityInput);
  newQuantity.appendChild(newQuantityLabel);
  return newQuantity;
};

function createDelete(){
  var newDeleteDiv = document.createElement("div");
  var newDeleteButton = document.createElement("button");
  newDeleteDiv.setAttribute("class", "product-delete");
  newDeleteButton.setAttribute("class", " btn btn-delete");
  newDeleteButton.innerHTML = "Delete";
  newDeleteDiv.appendChild(newDeleteButton);
  return newDeleteDiv;
};