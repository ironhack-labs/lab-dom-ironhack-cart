// --------------------------------------------------------------
// Variable Declarations
// --------------------------------------------------------------
var btnCalculatePrices = document.getElementsByClassName('btn-success')[0];
var btnCreateItem = document.getElementsByClassName('btn-success')[1];
var totalPrice = 0;

// --------------------------------------------------------------
// Create New Item Button onclick
// --------------------------------------------------------------
btnCreateItem.onclick = function(){
  // reading values for new item
  var input = document.getElementsByTagName('input');
  //console.log(input);
  var inputLenght = input.length;
  var newItemDesc = input[inputLenght - 2].value;
  //console.log(newItemDesc);
  var newItemPrice = input[inputLenght -1].value;
  //console.log(newItemPrice);

  addNewItem(newItemDesc, newItemPrice);
  clear();

  var btnDelete = document.getElementsByClassName('btn-danger');
  console.log(btnDelete);
  deleteItem(btnDelete);
};

// --------------------------------------------------------------
// Delete Button onclick
// --------------------------------------------------------------
function deleteItem(btnDelete){
  for (var i = 0; i < btnDelete.length; i++) {
    btnDelete[i].onclick = function(e){
      //console.log(e.currentTarget);
      var parentBtn = e.currentTarget.parentNode;
      //console.log(parentBtn);
      var parentRow = parentBtn.parentNode;
      //console.log(parentRow);
      parentRow.setAttribute('id', 'delete');
      //console.log(parentRow);
      var content = document.getElementsByClassName('content')[0];
      //console.log(content);
      content.removeChild(parentRow);
    };
  }
}

// --------------------------------------------------------------
// Calculate Prices Button onclick
// --------------------------------------------------------------
btnCalculatePrices.onclick = function(){
  var unitPriceId = retrievesUnitPrice();
  var quantity = retrievesQuantity();

  for (var i = 0; i < unitPriceId.length; i++) {
    var unitPrice = parseInt(unitPriceId[i].innerHTML);
    //console.log(unitPrice);
    //console.log(quantity[i].value);

    var unitTotalPrice = unitPrice * quantity[i].value;
    //console.log(unitTotalPrice);

    var lblUnitTotalPrice = document.getElementsByClassName('unit-total-price');
    lblUnitTotalPrice[i].innerHTML = '$' + unitTotalPrice;
    totalPrice = calculateTotalPrice(unitTotalPrice);
  }
  //console.log(totalPrice);
  updateTotalPrice(totalPrice);
};

// --------------------------------------------------------------
// Functions
// --------------------------------------------------------------

// Retrieves the unit price of the product
function retrievesUnitPrice() {
  var unitPriceId = document.getElementsByClassName('unit-price');
  return unitPriceId;
}

// Retrieves the quantity of items desired
function retrievesQuantity() {
  var quantity = document.getElementsByTagName('input');
  return quantity;
}

// Calculates the total price based on this data
function calculateTotalPrice(unitPrice) {
  totalPrice += unitPrice;
  return totalPrice;
}

// Updates the total price in the DOM
function updateTotalPrice(totalPrice) {
  var lblTotalPrice = document.getElementById('total-price');
  lblTotalPrice.innerHTML = '$' + totalPrice;
}

// Adds a new Item to the grid
function addNewItem(newItemDesc, newItemPrice){
  var parent = document.getElementsByClassName('content')[0];
  //console.log(parent);
  var child = document.getElementsByClassName('row')[0];
  //console.log(child);

  // adding new element
  var newItem = document.createElement('div');
  parent.insertBefore(newItem, child);

  // set attribute for new item
  newItem.setAttribute('class', 'row');
  newItem.setAttribute('id', 'new-item');

  // updating values of new item appending the rest of row using jquery's append().
  var newDescription = '<div class="col-xs-3"><span>' + newItemDesc + '</span></div>';
  var newUnitPrice = '<div class="col-xs-2"><span class="unit-price">' + newItemPrice + '</span></div>';
  var newQuantity = '<div class="col-xs-3"><div class="form-group form-group-sm"><label class="col-sm-2 control-label" for="formGroupInputSmall">QTY</label><div class="col-sm-10"><input class="form-control" type="text" id="formGroupInputSmall" placeholder="0"></div></div></div>';
  var newTotalPrice = '<div class="col-xs-2"><span class="unit-total-price">$0.00</span></div>';
  var newBtnDelete = '<div class="col-xs-2"><button type="button" class="btn btn-danger">Delete</button></div>';
  var append = newDescription + newUnitPrice + newQuantity + newTotalPrice + newBtnDelete;
  $('#new-item').append(append);
}

// Clear lables after user enter new Item Description
// and new Unit Price
function clear(){
  var input = document.getElementsByTagName('input');
  //console.log(input);
  var inputLenght = input.length;
  //console.log(inputLenght);
  input[inputLenght - 2].value = '';
  input[inputLenght -1].value = '';
}
