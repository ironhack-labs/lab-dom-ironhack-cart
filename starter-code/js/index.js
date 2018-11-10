function deleteItem(e){
  var parent = e.path[2];
  parent.innerHTML="";
  //¿Cómo quito el div sin que sea una flojera?

  // var items = e.path[2].getElementsByTagName("div");
  // for (var i = 0; i < items.length; i++) {
  //   parent.removeChild(items[i]);
  // };
  getTotalPrice();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

//Función para calcular los precios totales
function getTotalPrice() {
  var products = document.getElementsByClassName("productcost");
  //Retrieve unit price of product
  var prices = [];
  for (var i = 0; i < products.length; i++) {
    prices.push(parseFloat(products[i].getElementsByTagName("span")[0].innerHTML));
  }
  //Get quantity of items desired
  var inputs  = document.getElementsByTagName("input");
  quantities = [];
  for (var i = 0; i < inputs.length; i++) {
    quantities.push(parseFloat(inputs[i].value));
  }
  //Calculate total prices and push to array
  var locations = document.getElementsByClassName("totalcost");
  var totalPrices = [];
  for (var i = 0; i < locations.length; i++) {
    totalPrices.push((prices[i]*quantities[i]));
    //Update DOM
    locations[i].innerHTML = "Total: $" + totalPrices[i].toFixed(2);
  }

  var grandTotal = totalPrices.reduce((ac, ci) => ac + ci);
  var grandTotalNode = document.getElementById("total-node");
  grandTotalNode.innerHTML = "Total Price: $" + grandTotal.toFixed(2);
}

function createQuantityInput(itemData){
  //Select row for next functions
  var nextRow = document.getElementsByClassName("wrapper");
  //Only select the last row
  nextRow = nextRow[nextRow.length-1];

  var quantityInput = document.createElement("div");
  quantityInput.setAttribute("class", "inputbox");

  //Actual input box
  var inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("value", "1");

  //Join
  quantityInput.innerHTML = "QTY" + inputField.outerHTML;

  //Make total price node as well
  var totalCost = document.createElement("div");
  totalCost.setAttribute("class", "totalcost");
  var totalSpan = document.createElement("span");
  totalSpan.innerHTML = parseFloat(itemData).toFixed(2); //Inherits this
  totalCost.innerHTML = "Total: $" + totalSpan.outerHTML;

  //Append children
  nextRow.appendChild(quantityInput);
  nextRow.appendChild(totalCost);
}

function createDeleteButton(){
  //Select row for next functions
  var nextRow = document.getElementsByClassName("wrapper");
  //Only select the last row
  nextRow = nextRow[nextRow.length-1];

  var deleteBox = document.createElement("div");
  deleteBox.setAttribute("class", "deletebox");
  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "btn btn-delete");
  deleteBtn.innerHTML = "Delete";
  deleteBox.innerHTML = deleteBtn.outerHTML;

  nextRow.appendChild(deleteBox);
}

function createQuantityNode(){

}
//dataType, itemData
function createItemNode(dataType, itemData){
  //Select row for next functions
  var nextRow = document.getElementsByClassName("wrapper");
  //Only select the last row
  nextRow = nextRow[nextRow.length-1];
  var productName = document.createElement("div");
  productName.setAttribute("class", "productname");
  var productSpan = document.createElement("span");
  productSpan.innerHTML = dataType;
  productName.innerHTML = productSpan.outerHTML;

  var productCost = document.createElement("div");
  productCost.setAttribute("class", "productcost");
  var costSpan = document.createElement("span");
  costSpan.innerHTML = parseFloat(itemData).toFixed(2);
  productCost.innerHTML = "$" + costSpan.outerHTML;

  //Add to wrapper
  nextRow.appendChild(productName);
  nextRow.appendChild(productCost);
}

function createNewItemRow(itemName, itemUnitPrice){
  var body = document.getElementsByTagName("body")[0];
  var newRow = document.getElementById("wrapper--new");
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  body.insertBefore(wrapper, newRow);

  //Select row for next functions
  var nextRow = document.getElementsByClassName("wrapper");
  //Only select the last row
  nextRow = nextRow[nextRow.length-1];

  //Create stuff
  createItemNode(itemName, itemUnitPrice);
  createQuantityInput(itemUnitPrice);
  createDeleteButton();
  getTotalPrice();
}

function createNewItem(){
  //Get new item
  var newItem = document.getElementById("product--new").value;
  //Get new unit price
  var newUnitPrice = document.getElementById("cost--new").value;
  //Make row
  if (newItem.length > 0 && newUnitPrice.length > 0) {
    createNewItemRow(newItem, newUnitPrice);
  }
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
