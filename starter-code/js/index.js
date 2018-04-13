// Use at least 3 onclick events

// Use at least one getElementById

// Use at least one getElementsByTagName

// Use at least one getElementsByClassName

// Getting an array with all the prices
var allPrices = document.getElementsByClassName("single-item-price");
// Getting an array of all product names
var allProducts = document.getElementsByClassName("product-name");
// Getting an array of the quantities
var allQuantities = document.getElementsByClassName("quantity-input");

function getPriceByProduct() {
  for (var i = 0; i < allProducts.length; i++) {
    var totalSingleItemPrice = Number(allPrices[i].innerHTML) * allQuantities[i].value;
    document.getElementsByClassName("total-single-item-price")[i].innerHTML = totalSingleItemPrice;
  } 
}

var updatedPricesArray = document.getElementsByClassName("total-single-item-price");
function sumOfTwoNumbers(a, b){
  return a + b;
}

function getTotalPrice() {
  getPriceByProduct();
  var newPricesArray = [];
  for (var i = 0; i < allProducts.length; i++) {
    var singleTotalPrice = Number(updatedPricesArray[i].innerHTML);
    newPricesArray.push(singleTotalPrice);
  }
  var total = newPricesArray.reduce(sumOfTwoNumbers,0);
  console.log("Total is: ", total);
  document.getElementById('final-price').innerHTML = total;
}

function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
}

function createNameNode(newName){
  var productDiv = document.createElement("div");
  productDiv.setAttribute("class", "col-lg-2");
  var productSpan = document.createElement("span");
  productSpan.setAttribute("class", "col-lg-2");
  productSpan.innerHTML = newName;
  productDiv.appendChild(productSpan);
  return productDiv;
}

function createSinglePriceNode(newPrice){
  var priceDiv = document.createElement("div");
  priceDiv.setAttribute("class", "col-lg-2");
  var dollarSpan = document.createElement("span");
  dollarSpan.innerHTML = "$";
  dollarSpan.setAttribute("class", "dollar-sign");
  var priceSpan = document.createElement("span");
  priceSpan.innerHTML = newPrice;
  priceSpan.setAttribute("class", "single-item-class");
  priceDiv.appendChild(dollarSpan);
  priceDiv.appendChild(priceSpan);
  return priceDiv;
}

function createNewItemRow(itemName, itemPrice){
  var productRow = document.createElement("div");
  productRow.setAttribute("class", "row");
  var productName = createNameNode(itemName);
  var productPrice = createSinglePriceNode(itemPrice);
  productRow.appendChild(productName);
  productRow.appendChild(productPrice);
  return productRow;
}

function createNewItem(){
  var singleProductName = document.getElementById("new-product-name").value;
  var singleProductPrice = document.getElementById("new-product-price").value;
  var newItem = createNewItemRow(singleProductName, singleProductPrice);
  var newDiv = document.getElementById("create");

  newDiv.parentNode.insertBefore(newItem, newDiv);

  document.getElementById("new-product-name").value = "";
  document.getElementById("new-product-price").value = "";
}


window.onload = function () {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

// function updatePriceByProduct(productPrice, index){

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){
// var getProduct = document.getElementsByClassName('product-name');
// var getUnitPrice = document.getElementsByClassName('unit-cost');
// var getQuantity = document.getElementsByClassName('quantity')[0];
// var getTotalProductPrice = document.getElementsByClassName('total-product-price')
// var deleteButtons = document.getElementsByClassName('btn-delete');
// var unitPrice = getUnitPrice.innerHTML;
// var quantity = getQuantity.nodeValue;
// getTotalProductPrice[0].setAttribute('total-product-price', getTotalPrice());

// function getTotalPrice(){
//   for (var i = 0; i < getProduct.length; i++){
//     var totalCost = unitPrice[i] * quantity[i];
//   }
//   return totalCost;
// }

// function deleteItem(e){
//   var row = document.getElementsByClassName('row');
//   for (var i = 0; i < row.length; i++){
//   }
//   document.appendChild(row)
// }

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }