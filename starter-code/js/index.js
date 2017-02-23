

// Deletes the whole row when 'Delete' is clicked
function deleteItem(e){
  var container = document.getElementById('item-container');
  var selectedRow = document.getElementById(e);

  container.removeChild(selectedRow);
}


// Returns the single unit price by the quantity
function getPriceByProduct(itemSinglePrice, itemQuantity){

  var singlePrice = document.getElementById(itemSinglePrice).innerHTML.replace(/\$/, "");

  var qty = document.getElementById(itemQuantity).value;

  singlePrice = Number(singlePrice);
  qty = Number(qty);

  var totalPrice = singlePrice * qty;

  return totalPrice;

}

function updatePriceByProduct(itemSinglePrice, itemQuantity, totalId){

  var newTotalPrice = getPriceByProduct(itemSinglePrice, itemQuantity);

  var totalSpan = document.getElementById(totalId);

  totalSpan.innerHTML = "\$" + newTotalPrice;
}



function getTotalPrice() {
  var prices = document.getElementsByClassName('item-total');
  var grandTotal = 0;

  // runs a for loop for the prices array. for some reason .forEach or .map WILL NOT WORK!!!!
  for (i = 0; i < prices.length; i++) {
    // takes the innerHTML of each element of the prices array and takes out the '$'
    newPrice = Number(prices[i].innerHTML.replace(/^\$/g, ""));
    // adds each element of the array to the grandTotal variable
    grandTotal += newPrice;
  }

  // returns grandTotal so that when inputTotalPrice calls it, it has a value
  return grandTotal;
}

// gets the result of getTotalPrice and inserts it into the Total Price area.
function inputTotalPrice() {
  // gets the element of with the id 'total-cart-price'
  var totalCartPriceInput = document.getElementById('total-cart-price');

  // sets a variable totalCartPrice to the result of the function getTotalPrice (which is grandTotal)
  var totalCartPrice = getTotalPrice();

  // sets the inner html to totalCartPrice
  totalCartPriceInput.innerHTML = "Total Price: $" + totalCartPrice;
}


// container attributes
var containerFluid = "container-fluid";
var containerStatic = "container";

// column attributes

var col1 = "col-xs-1",
  col2 = "col-xs-2",
  col3 = "col-xs-3",
  col4 = "col-xs-4",
  col6 = "col-xs-6";

// end column attributes

// row attribute
var rowTopMargin = "row top-margin";

// form attributes

var formInline = "form-inline";
var formGroup = "form-group";

// end form attributes

// label attributes


var textSmall = "text-small";

// end label attributes

// input atrributes

var formControlInputSm = "form-control input-sm",
  placeHolder0 = "0";

// end input attributes

// total attributes

var itemTotal = "item-total";

// total attributes

 // button attributes

var buttonType = "button",
  btnDanger = "btn btn-danger",
  btnSuccessSmall = "btn btn-success text-small";

 // end button attributes

function createDeleteButton(){
  var prices = document.getElementsByClassName('item-total');
  var x = prices.length + 1;
  var itemX = "deleteItem('item-" + x + "')";

  var deleteDiv = document.createElement('div');
  deleteDiv.setAttribute('class', col1);


  var deleteButton = document.createElement('button');
  deleteButton.setAttribute('type', 'button');
  deleteButton.setAttribute('class', btnDanger);
  deleteButton.setAttribute('onclick', itemX);
  deleteButton.innerHTML = "Delete";

  deleteDiv.appendChild(deleteButton);
  return deleteDiv;
}

function createQuantityNode(){
  var prices = document.getElementsByClassName('item-total');
  var x = prices.length + 1;
  var quantityX = "quantity-" + x;
  var priceX = "price-" + x;
  var totalX = "total-" + x;
  var quantityFunctionCall = "updatePriceByProduct('" + priceX + "', '" + quantityX + "', '" + totalX + "')";

  var quantityDiv = document.createElement('div');
  quantityDiv.setAttribute('class', col4);

  var quantityForm = document.createElement('form');
  quantityForm.setAttribute('class', formInline);

  var formDiv = document.createElement('div');
  formDiv.setAttribute('class', formGroup);

  var quantityLabel = document.createElement('label');
  quantityLabel.setAttribute('for', quantityX);
  quantityLabel.setAttribute('class', textSmall);
  quantityLabel.innerHTML = "QTY";

  var quantityInput = document.createElement('input');
  quantityInput.setAttribute('type', 'text');
  quantityInput.setAttribute('class', formControlInputSm);
  quantityInput.setAttribute('id', quantityX);
  quantityInput.setAttribute('placeholder', '0');
  quantityInput.setAttribute('onchange', quantityFunctionCall);

  formDiv.appendChild(quantityLabel);
  formDiv.appendChild(quantityInput);
  quantityForm.appendChild(formDiv);
  quantityDiv.appendChild(quantityForm);

  return quantityDiv;
}

function createItemName(itemName) {
  var newItem = document.getElementById(itemName).value;

  var nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', col3);

  var nameSpan = document.createElement('span');
  nameSpan.innerHTML = newItem;

  nameDiv.appendChild(nameSpan);

  return nameDiv;
}

function createItemPrice(itemPrice) {
  var prices = document.getElementsByClassName('item-total');
  var x = prices.length + 1;
  var priceX = "price-" + x;

  var newPrice = document.getElementById(itemPrice).value;

  var priceDiv = document.createElement('div');
  priceDiv.setAttribute('class', col2);

  var priceSpan = document.createElement('span');
  priceSpan.setAttribute('id', priceX);

  priceSpan.innerHTML = "$" + newPrice + ".00";

  priceDiv.appendChild(priceSpan);

  return priceDiv;
}

function createItemTotal() {
  var prices = document.getElementsByClassName('item-total');
  var x = prices.length + 1;
  var totalX = "total-" + x;

  var totalDiv = document.createElement('div');
  totalDiv.setAttribute('class', col2);

  var totalSpan = document.createElement('span');
  totalSpan.setAttribute('class', 'item-total');
  totalSpan.setAttribute('id', totalX);
  totalSpan.innerHTML = "$0.00";

  totalDiv.appendChild(totalSpan);

  return totalDiv;
}

function createItemRow(itemName, itemPrice){
  var prices = document.getElementsByClassName('item-total');
  var x = prices.length + 1;
  var itemX = "item-" + x;


  var newItemName = createItemName(itemName);
  var newItemPrice = createItemPrice(itemPrice);
  var newQuantityNode = createQuantityNode();
  var newItemTotal = createItemTotal();
  var newDeleteButton = createDeleteButton();

  var itemRowDiv = document.createElement('div');
  itemRowDiv.setAttribute('class', rowTopMargin);
  itemRowDiv.setAttribute('id', itemX);

  itemRowDiv.appendChild(newItemName);
  itemRowDiv.appendChild(newItemPrice);
  itemRowDiv.appendChild(newQuantityNode);
  itemRowDiv.appendChild(newItemTotal);
  itemRowDiv.appendChild(newDeleteButton);

  var itemContainer = document.getElementById('item-container');
  itemContainer.appendChild(itemRowDiv);
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
