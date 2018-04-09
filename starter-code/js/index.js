/*
// removes the product for which the delete button was pressed from the html
*/
function deleteItem(e){
  // the delete button is within a button wrapperdiv that is within
  // a product wrapperdiv. And thus, to remove the item, the parent 
  // of the parent of the target of the click is selected
  var deletionTarget = e.currentTarget.parentElement.parentElement;
  // and then it is removed from the dom
  deletionTarget.remove();
  // and then the grand total price is updated
  getTotalPrice();
}

/*
// takes a number and forces it to display two decimal values
// in a way that would represent dollars and cents ammounts
*/
function toMoneyFormat(unformatedValue){
  var formatedValue = parseFloat(Math.round(unformatedValue * 100) / 100).toFixed(2);
  return formatedValue;
}

/*
// Returns the item price from the html of the product that gets passed in.
// the selection happens in this manner:
// Of the item that gets passed in
// select the class unit-cost
// that should return a group with one item
// so select the one at the 0th index (the first)
// and of that select the innerHTML
*/
function getPriceByProduct(itemNode){
  var productPrice = itemNode.getElementsByClassName('unit-cost')[0].innerHTML;
  
  return productPrice;
}

/*
// returns the quantity the user has currently filled in for each product that gets passed in
// all quantity values are zero by defaul until the user changes them
// the selection of the value from within the HTML happens in a simmilar manner than that of 
// the getPriceByProduct() function
*/
function getQuantityByProduct(itemNode){
  var productQuantity = itemNode.getElementsByClassName('quantity')[0].value;
  
  // check if value is not a number
  var test = parseFloat(productQuantity);
  // if it is not a number
  if(isNaN(test)){
    // return zero
    return "0.00";
  }
  // if it is a number
  else{
    // return the correct ammount
    return productQuantity;
  }
}

/*
// selects the product at the index passed in and updates the total-individual-price
// to reflect the value passed in
*/
function updatePriceByProduct(productPrice, index){
  //select the current item
  var currentProduct = document.getElementsByClassName('total-individual-price')[index];
  // update the price
  currentProduct.innerHTML = productPrice;
}

/*
// goes through all products, calculates each total individual price based on the 
// quantity for each item specified by the user, updates the on-screen amount to 
// reflect any changes made by the user, and updates the grand-total. If the user 
// has not calculated the grand total yet, it is not displayed. When the user 
// calculates a grand-total, the grand-total is displayed.
*/
function getTotalPrice(){
  // select all product
  var allProducts = document.getElementsByClassName("product-wrapper");

  // for all products
  for(var i = 0; i < allProducts.length; i++){
    // select unit price
    var unitPrice = getPriceByProduct(allProducts[i]);
    
    // select quantity
    var unitQuantity = getQuantityByProduct(allProducts[i]);
    
    // calculate total indidvidual price
    var totalIndividualPrice = unitPrice * unitQuantity;
    
    // format to two decimal values
    totalIndividualPrice = toMoneyFormat(totalIndividualPrice);
    
    // update total individual price
    updatePriceByProduct(totalIndividualPrice, i);
  }

  // selec all total individual prices
  var allTotalIndPrices = document.getElementsByClassName('total-individual-price');

  // add them all together
  var grandTotal = 0;
  for(var i = 0; i < allTotalIndPrices.length; i++){
    grandTotal += parseFloat(allTotalIndPrices[i].innerHTML);
  }

  // format to two decimal values
  grandTotal = toMoneyFormat(grandTotal);

  // the grand total price should be hidden by default. And so
  // select the total price
  var totalPriceSelector = document.getElementById('grand-total-price');
  // if the total price is still hidden
  if(totalPriceSelector.className === "hidden"){
    // make it show
    totalPriceSelector.className = "show";
  }

  // update the current total price
  totalPriceSelector.innerHTML = "Total Price: $" + grandTotal;
}


/*
// there are many wrappers in the schema of the page
// this automates the process of creating them for new products
// creates the wrapper with the classes passed in
*/
function createDivWrapper(classes){
  // create the div
  var newWrapper = document.createElement("div");

  // give it the proper class names
  newWrapper.setAttribute("class", classes);

  // return new wrapper
  return newWrapper;
}

function createSpan(classes, content){
  // create the span
  var newSpan = document.createElement("span");
  //  give the proper class
  newSpan.setAttribute("class", classes);
  // set its content
  newSpan.innerHTML = content;
  // return new span
  return newSpan;
}

/*
// creates the quantity input for the createQuantityNode() fucntion
*/
function createQuantityInput(){
  // create text field
  var textField = document.createElement("input");
  textField.setAttribute("type", "text");
  textField.setAttribute("class", "quantity");
  textField.setAttribute("name", "amount-input");
  textField.setAttribute("placeholder", "0");

  // return quantity input
  return textField;
}

/*
// creates and returns a node for the individual price
*/
function createIndividualPrice(){
  // create wrapper with proper classes
  var priceWrapper = createDivWrapper("item-total-wrapper inner-product-wrapper");

  // create spans
  var dollarSignSpan = createSpan("dollar-symbol", "$");
  var initialAmount = createSpan("total-individual-price");
  initialAmount.innerHTML = "0.00";

  // insert spans into wrapper
  priceWrapper.appendChild(dollarSignSpan);
  priceWrapper.appendChild(initialAmount);

  // return individual price node
  return priceWrapper;
}

/*
// creates and return a delete button for the new item
*/
function createDeleteButton(){
  // create button wrapper
  var buttonWrapper = createDivWrapper("delete-button-wrapper inner-product-wrapper");

  // create button
  var newDelButton = document.createElement("button");

  // add properties to button
  newDelButton.setAttribute("class", "delete-button btn btn-delete");
  newDelButton.setAttribute("type", "button");
  newDelButton.innerHTML = "Delete";
  newDelButton.onclick = deleteItem;

  // append button into wrapper
  buttonWrapper.appendChild(newDelButton);

  // return delete button node
  return buttonWrapper;
}

/*
// creates and return node for the quantity field
*/
function createQuantityNode(){
  // create wrapper for the div with the correct classes
  var quantityWrapper = createDivWrapper("quantity-wrapper inner-product-wrapper");

  // create label
  var label = document.createElement("label");
  // give label proper atributes
  label.setAttribute("for", "quantity");
  label.innerHTML = "QTY";

  // create quantity input
  var quantityInput = createQuantityInput();

  // add elements into the wrapper
  quantityWrapper.appendChild(label);
  quantityWrapper.appendChild(quantityInput);

  // return quantity wrapper
  return quantityWrapper;
}

/*
// creates and returns a new price node with the given parameter
*/
function createUnitPriceNode(newPrice){
  // create wrapper with the ploper classes
  var unitPriceWrapper = createDivWrapper("cost-wrapper inner-product-wrapper");

  // create inner span with dollar sign
  var dollarSignSpan = createSpan("dollar-symbol", "$");

  // format the new price
  var priceFormated = toMoneyFormat(newPrice);

  //if the formated price is no a number
  if(isNaN(priceFormated)){
    // default to zero
    priceFormated = "0.00"
  }

  // create span with correct classes and content
  var unitPriceSpan = createSpan("unit-cost", priceFormated);

  // add spans to parent wrapper
  unitPriceWrapper.appendChild(dollarSignSpan);
  unitPriceWrapper.appendChild(unitPriceSpan);

  //return completed unit price wrapper
  return unitPriceWrapper;
}

/*
// creates and returns a completed name node with the parameters given by the user
*/
function createNameNode(newName){
  // create wrapper with the proper classes
  var nameNodeWrapper = createDivWrapper("name-wrapper inner-product-wrapper");

  // create inner span with correct classes and content
  var nameNodeSpan = createSpan("product-name", newName);

  // add the span into the wrapper
  nameNodeWrapper.appendChild(nameNodeSpan);

  // return new name node
  return nameNodeWrapper;
}

/*
// creates and returns a new item row with the given unit name and unit price 
// it also adds all of the default nodes
*/
function createNewItemRow(itemName, itemUnitPrice){
  // create product row wrapper with proper class
  var productRow = createDivWrapper("product-wrapper");

  // create the name node
  var nameNode = createNameNode(itemName);

  // create the unit price node
  var unitPriceNode =  createUnitPriceNode(itemUnitPrice);

  // create quantity node
  var quantityNode = createQuantityNode();

  // create individual price
  var individualPriceNode = createIndividualPrice();

  // create delete button node
  var deleteButtonNode = createDeleteButton();


  // add the name node to the product row
  productRow.appendChild(nameNode);

  // add the unit price to the product row
  productRow.appendChild(unitPriceNode);

  // add the quantity text field to the product row
  productRow.appendChild(quantityNode);

  // add the individual price node
  productRow.appendChild(individualPriceNode);

  // add delete button to product
  productRow.appendChild(deleteButtonNode);


  return productRow;

}

/*
// calls all of the functions necessary to create a new products html
// it then adds it to the dom
*/
function createNewItem(){
  // select the name of the product to create
  var newProductName = document.getElementById("create-product-name").value;

  // select the price of the product to create
  var newProductPrice = document.getElementById("create-product-price").value;


  // create row for the new product and select it
  var newItem = createNewItemRow(newProductName, newProductPrice);

  // new items will be inserted before the creation div so it needs to be selected
  var creationDiv = document.getElementById("create");

  // to insert items before it
  document.body.insertBefore(newItem, creationDiv);

  // reset form values
  document.getElementById("create-product-name").value = "";
  document.getElementById("create-product-price").value = "";
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
