function deleteItem(e){
  var button = document.getElementById("add-item-button");

  button.click = function(){
    console.log("adding an element to the list");
  };
}

// BY ID ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// //GRABBING ONE PRICE INNER HTML BY ID & RETURNING TO NUMBER
// function getPriceByProduct(itemNode){
//   var getPrice = document.getElementById(itemNode);
//   return Number(getPrice.innerHTML);
// }
//
// //GRABBING ONE QUANTITY INNER HTML BY ID & RETURNING TO NUMBER
// function getQuantityByProduct(itemNode){
//   var getQuantity = document.getElementById(itemNode);
//   return Number(getQuantity.innerHTML);
// }
//
// // GRABBING ONE LINE TOTAL NODE BY ID
// function getLineTotal(itemNode){
//   var getLineTotal = document.getElementById(itemNode);
//   return getLineTotal;
// }
//
// // PUTTING THE NEW VALUE INTO THE TOTAL NODE
// function updateLineTotal(itemNode, newValue){
//   getLineTotal(itemNode).innerHTML = newValue;
// }
//
// // GRABBING THE CALCULATE BUTTON NODE
// var calculateButton = document.getElementById("btn-calculate");
//
// //CLICK EVENT FOR ONE LINE ITEM BY ID
// calculateButton.onclick = function(){
//   var price = getPriceByProduct('product__price-1');
//   var quantity = getQuantityByProduct('product__quantity-1');
//   var totalPrice = String(price * quantity);
//   updateLineTotal('product__line-total-1', totalPrice);
//   console.log(totalPrice);
//   return totalPrice;
// };


// RETURNING THE ARRAY OF ALL PRICES
function getAllPrices(className) {
  var priceArray = document.getElementsByClassName(className);
  var htmlPriceArray = [];
  for (i = 0; i < priceArray.length; i++) {
    htmlPriceArray.push(Number(priceArray[i].innerHTML));
  }
  console.log(htmlPriceArray);
  return htmlPriceArray;
}

//RETURNING THE ARRAY OF ALL QUANTITIES
function getAllQuantities(className) {
  var qtyArray = document.getElementsByClassName(className);
  var htmlQtyArray = [];
  for (i = 0; i < qtyArray.length; i++) {
    htmlQtyArray.push(Number(qtyArray[i].value));
  }
  console.log(htmlQtyArray);
  return htmlQtyArray;
}

//PUTTING ALL THE TOTAL NODES INTO AN ARRAY
function getAllTotals(className) {
  var totArray = document.getElementsByClassName(className);
  var totalsArray = [];
  for (i = 0; i < totArray.length; i++) {
    totalsArray.push(totArray[i]);
  }
  console.log(totalsArray);
  return totalsArray;
}

//COMBINING THE PRICE & QTY ARRAYS INTO THE TOTAL ARRAY WITH MATH
function allTotalsArray(firstArray, secondArray) {
  var allTotalsArray = [];
  for (i = 0; i < firstArray.length; i++) {
    var totalMath = Number(firstArray[i]) * Number(secondArray[i]);
    allTotalsArray.push(totalMath);
  }
  console.log(allTotalsArray);
  return allTotalsArray;
}

// GRABBING OVERALL TOTAL NODE & REPLACING THE HTML WITH THE GRAND TOTAL
function totalOverall(arrayName) {
  var count = 0;
  for(var i = 0; i < arrayName.length; i++) {
      count = count + arrayName[i];
  }
  var totalNode = document.getElementById('total--overall');
  totalNode.innerHTML = count;
}

// GRABBING THE CALCULATE BUTTON NODE
var calculateButton = document.getElementById("btn-calculate");

// EXECUTING FUNCTIONS ON CLICK EVENT

calculateButton.onclick = function(){
  var allPrices = getAllPrices('product__price');
  var allQuantities = getAllQuantities('input--quantity');
  var allTotalNodes = getAllTotals('product__line-total');
  var allTotals = allTotalsArray(allPrices, allQuantities);
  for (i = 0; i < allTotals.length; i++) {
    allTotalNodes[i].innerHTML = allTotals[i];
  }
  totalOverall(allTotals);
};

function totalCart() {
  var allPrices = getAllPrices('product__price');
  var allQuantities = getAllQuantities('input--quantity');
  var allTotalNodes = getAllTotals('product__line-total');
  var allTotals = allTotalsArray(allPrices, allQuantities);
  for (i = 0; i < allTotals.length; i++) {
    allTotalNodes[i].innerHTML = allTotals[i];
  }
  totalOverall(allTotals);
}

calculateButton.onclick = function() {
  totalCart();
};

// DELETING A ROW ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

var deleteButtons = document.getElementsByClassName('btn-delete');

function findParentRow(child) {
  child.onclick = function(e){
    var parent = e.currentTarget.parentElement;
    parent.parentNode.remove();
    totalCart();
  };
}

function findDeleteRow(array) {
  for (i=0;i<deleteButtons.length;i++) {
    findParentRow(array[i]);
  }
}

findDeleteRow(deleteButtons);



// DELETING A ROW ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// We have two inputs that represent the name and the unit price of the new product. At the end, we will add a button to create that product.
//
// Create two input to let the user set up the new product data.
// Create a button. This button will have assigned a click event that will:
// Get the data from the inputs.
// Create a new product row with the data we stored.
// :::warning
//
// ! Be sure the new product you added has the same behavior than the previous products.
//
// You should be able to calculate the product total price
// You should be able to sum the product total price to the Shopping Cart total price
// You should be able to delete the product

// Find newProductInput By ID

// var newProductInput =  document.getElementById('input--new-product');
// console.log(newProductInput + "what the fuck");
//


// Find createNewProductButton By ID
// On click of createNewProductButton:
// -- create new product row
//    -- with newProductInput as product
//    -- with newPriceInput as price

function addNewColumnToRow() {
  var element = document.createElement('div');
  element.setAttribute('class', 'row-x');
  console.log(element);
}

function getInputData(className) {
  var node = document.getElementById(className);
  console.log(node.value);
}

getInputData('input--new-produdct');


function addNewRow() {
  var addNewLineButton = document.getElementById('new-item-create');
  console.log(addNewLineButton);
  addNewLineButton.onclick = function() {

    var productInputValue = document.getElementById('input--new-produdct').value;
    var priceInputValue = document.getElementById('input--new-price').value;

    // .product__price
    // .input--quantity
    // .product__line-total

    // COLUMN 1

    var newCol1 = document.createElement('div');
    newCol1.setAttribute('class', 'col');
    newCol1.innerHTML = productInputValue;

    // COLUMN 2
    var newSpan2 = document.createElement('span');
    newSpan2.setAttribute('class', 'product__price');
    newSpan2.innerHTML = priceInputValue;

    var newCol2 = document.createElement('div');
    newCol2.setAttribute('class', 'col');
    newCol2.appendChild(newSpan2);

    // COLUMN 3
    var newQtyInput = document.createElement('input');
    newQtyInput.setAttribute('class', 'input--quantity');

    var newCol3 = document.createElement('div');
    newCol3.setAttribute('class', 'col');
    newCol3.appendChild(newQtyInput);

    // COLUMN 4
    var newSpan4 = document.createElement('p');
    newSpan4.setAttribute('class', 'product__line-total');
    newSpan4.innerHTML = '0';

    var newCol4 = document.createElement('div');
    newCol4.setAttribute('class', 'col');
    newCol4.appendChild(newSpan4);
    // newCol4.innerHTML = '$';

    // COLUMN 5
    var newDeleteBtn = document.createElement('button');
    newDeleteBtn.setAttribute('class', 'btn btn-delete');
    newDeleteBtn.innerHTML = 'Delete';

    var newCol5 = document.createElement('div');
    newCol5.setAttribute('class', 'col col-xs-7');
    newCol5.appendChild(newDeleteBtn);

    var newRow = document.createElement('div');
    newRow.setAttribute('class', 'row row--products');
    console.log(newRow);

    newRow.appendChild(newCol1);
    newRow.appendChild(newCol2);
    newRow.appendChild(newCol3);
    newRow.appendChild(newCol4);
    newRow.appendChild(newCol5);

    var productsWrapper = document.getElementById('container--flex');
    productsWrapper.appendChild(newRow);

    findDeleteRow(deleteButtons);

    console.log(newSpan4);
  };
}

addNewRow();




function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
