
/* Function for remove one item from the DOM structure */
function deleteItem(e){
  var buttonSelect = e.currentTarget;
  var divABorrar = buttonSelect.parentNode.parentNode;
  var padre = divABorrar.parentNode;
  padre.removeChild(divABorrar);
}

/**
 * Function for calculating the total price of one product.
 * Gets the number of items the user wants of this product,
 * the unit price
 **/
function getTotalPrice() {
  var prices = document.getElementsByClassName("prodPrice");
  var quantitys = document.getElementsByClassName("prodQuantity");
  var price, quantity, totalProdPrice, totalPrice = 0;
  for (var i = 0; i < prices.length; i++){
    price = prices[i].getElementsByTagName("span")[0].innerHTML.substr(1);
    quantity = quantitys[i].getElementsByTagName("input")[0].value;
    totalProdPrice = price * quantity;
    totalPrice = totalPrice + totalProdPrice;
    document.getElementsByClassName("prodTotalPrice")[i].innerHTML = "$"+totalProdPrice.toFixed(2);
  }
  document.getElementById("totalPrice").getElementsByTagName("span")[0].innerHTML = "$"+totalPrice.toFixed(2);
}

/**
 * Function for creating the quantity input for a new product and
 * adding it to its containerTag
 **/
function createQuantityInput(){
  // Creating the needed elements for the input
  var inputTag = document.createElement("input");
  inputTag.setAttribute("type","text");
  inputTag.setAttribute("name","quantity");
  inputTag.setAttribute("value",0);
  // Adding the new input to its container;
  var containerTag = document.getElementsByClassName("prodQuantity");
  containerTag[containerTag.length-1].appendChild(inputTag);
}

/**
 * Function for creating the delete button and its container and Adding
 * them to the product container.
 **/
function createDeleteButton(){
  // Creating the containers structure
  var divTag = document.createElement("div");
  divTag.setAttribute("class","deleteButton");
  //Creating and setting the button tags.
  var buttonTag = document.createElement("button");
  buttonTag.setAttribute("class","btn btn-delete");
  buttonTag.setAttribute("type","button");
  buttonTag.setAttribute("name","button");
  buttonTag.innerHTML = "Delete";
  // Adding an action for the propertio onclick
  buttonTag.onclick = deleteItem;
  // Adding the button to the containers div
  divTag.appendChild(buttonTag);
  var containerTag = document.getElementsByClassName("product");
  containerTag[containerTag.length-1].appendChild(divTag);
}

/**
 * Function for creating the quantity container and all the tags
 * needed for its structure.
 **/
function createQuantityNode(){
  // Creating the containers structure
  var divTag = document.createElement("div");
  divTag.setAttribute("class","prodQuantity");
  // Creating the elements of the node:
  // Creating the label tag
  var labelTag = document.createElement("label");
  labelTag.setAttribute("class","quantity");
  labelTag.innerHTML = "QTY";
  // Adding label to the containers div
  divTag.appendChild(labelTag);
  // Adding the quantityNode to the product container
  var containerTag = document.getElementsByClassName("product");
  containerTag[containerTag.length-1].appendChild(divTag);
  // Creating input tag and adding it to the container div
  createQuantityInput();
}

/**
 * Generic function for creating the name and price containers.
 * Depending on the dataType parameter, it introduce diferent types
 * of information.
 **/
function createItemNode(dataType, itemData){
  // Create containe structure and information
  var divTag = document.createElement("div");
  if (dataType == "name") {
    divTag.setAttribute("class", "prodName");
  }
  else {
    divTag.setAttribute("class", "prodPrice");
  }
  // Creating the elements of the node
  var spanTag = document.createElement("span");
  if (dataType == "name") {
    spanTag.innerHTML = itemData;
  }
  else {
    spanTag.innerHTML = "$"+itemData;
  }
  // Adding the span tag to the container
  divTag.appendChild(spanTag);
  // Adding the item Node to the product container.
  var containerTag = document.getElementsByClassName("product");
  containerTag[containerTag.length-1].appendChild(divTag);
}

function createNewItemRow(itemName, itemUnitPrice){
  // Creating the containers structure and set its attributes
  var divTag = document.createElement("div");
  divTag.setAttribute("class","product");
  // Adding the new product container to the body
  var parent = document.getElementsByTagName("body")[0];
  var beforeTag = document.getElementsByClassName("newProduct")[0];
  parent.insertBefore(divTag,beforeTag);
  // Creating the structure for showing the new product information
  createItemNode("name", itemName);
  createItemNode("price", itemUnitPrice);
  createQuantityNode();
  var divProdTot = document.createElement("div");
  divProdTot.setAttribute("class","prodTotalPrice");
  var spanTag = document.createElement("span");
  spanTag.innerHTML = "$0.00";
  divProdTot.appendChild(spanTag);
  var containerTag = document.getElementsByClassName("product");
  containerTag[containerTag.length-1].appendChild(divProdTot);
  createDeleteButton();
}

/**
 * Function executed when the Create button is clicked.
 * It gets the name of the new product the user wants to create
 * and its price. Then calls the function for creating a new row
 * with the product information.
 **/
function createNewItem(){
  var newProdName = document.getElementById("newName").getElementsByTagName("input")[0].value;
  var newProdPrice = document.getElementById("newPrice").getElementsByTagName("input")[0].value;
  createNewItemRow(newProdName, newProdPrice);
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
