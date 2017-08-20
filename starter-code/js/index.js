//Functions append
function appendItem(a, b){
  a.append(b);
}
function appendChildItem(a, b){
  a.append(b);
}

//Function to update the total price of each product
function updatePriceByProduct(productPrice, index){
  var a = document.getElementsByClassName('js-total');
  a[index].innerHTML = productPrice.toFixed(2) + "$";
}

//Function to calculate the price of each product
function getPriceByProduct(itemNode){
  var total;
  var unitPrice = document.getElementsByClassName('js-price');
  var unitQuantity = document.getElementsByClassName('js-quantity');
  total = unitPrice[itemNode].innerHTML * unitQuantity[itemNode].value;

  //Updating the prices of each product
  updatePriceByProduct(total, itemNode);
  return total;
}

//Calculating the total price
function getTotalPrice() {
  var unitPrice = document.getElementsByClassName('js-price');
  var totalPrice = 0;
  for(var i=0; i<unitPrice.length;i++){
    //Calculating the price of each product
    totalPrice += getPriceByProduct(i);
  }
  //Updating the total price of the content js-final-price
  document.getElementById('js-final-price').innerHTML = "<h2>Total price: $" + totalPrice.toFixed(2) + "</h2>";
}

//Function to create a new node
function createItemNode(dataType, itemData){
  var node = document.createElement(dataType[0]);
  node.className += dataType[1];
  var textnode = document.createTextNode(itemData);
  node.appendChild(textnode);
  return node;
}

//Function to create a new product
function createNewItem(){
  var a = document.getElementById("new-item-name").value;
  var b = document.getElementById("new-unit-price").value;
  //Creating a new product
  createNewItemRow(a, b);
}

//Function to create the node quantity
function createQuantityNode(c){
  var a = createItemNode(['div', 'input-quantity'],'');
  var b = createItemNode(['label', ''],'QTY ');
  appendChildItem(c, a);
  appendChildItem(a, b);

  //Creating a input
  createQuantityInput(a);
}
//Function to create the delete button
function createDeleteButton(a){
  var contentButton = createItemNode(['div','button-delete btn pdd-left-btn'], '');
  appendChildItem(a, contentButton);
  var button = createItemNode(['button','btn-delete btn'], 'Delete');
  appendChildItem(contentButton, button);

  //Deleting buttons
  deleteItem(button);

}

//Function to delate items
function deleteItem(e){
  e.onclick = function() {
    var b=this.parentNode.parentNode;
    b.parentNode.removeChild(b);
  };
}


//Function to create a input inside of an element
function createQuantityInput(a){
  var b = createItemNode(['input', 'js-quantity'],'');
  b.setAttribute("placeholder", "0");
  //console.log(a);
  appendItem(a, b);
}

function createNewItemRow(itemName, itemUnitPrice){
  var a = document.getElementsByClassName("product");
  var b = document.getElementById("content-products");

  //Creating a div class="product"
  var contentProduct = createItemNode(['div','product mg-left'], '');
  appendChildItem(b, contentProduct);

  //Creating div class="name" and a span inside
  var contentName = createItemNode(['div','name'],'');
  appendChildItem(contentProduct, contentName);
  var contentNameSpan = createItemNode(['span',''], itemName);
  appendChildItem(contentName, contentNameSpan);

  //Creating div class="price" and a span inside
  var contentPrice = createItemNode(['div','price'], '');
  appendChildItem(contentProduct, contentPrice);
  var contentPriceSpan = createItemNode(['span','js-price'], itemUnitPrice);
  appendChildItem(contentPrice, contentPriceSpan);

  //Creating the div class="js-quantity"
  createQuantityNode(contentProduct);

  //Creating div class="total-price" and a span inside
  var contentTotalPrice = createItemNode(['div','total-price'], '');
  appendChildItem(contentProduct, contentTotalPrice);
  var contentTotalPriceSpan = createItemNode(['span','js-total'], '0.00$');
  appendChildItem(contentTotalPrice, contentTotalPriceSpan);

  //Creating div class="button-delete" and a button inside
  createDeleteButton(contentProduct);

}


window.onload = function() {

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var deleteButtons = document.querySelectorAll('.btn-delete');
  var createItemButton = document.getElementById('submitButton');


  //Deleting products
  for (var i = 0, len = deleteButtons.length; i < len; i++) {
    deleteItem(deleteButtons[i]);
  }

  //Calculating the total price of all products
  createItemButton.onclick = createNewItem;
  calculatePriceButton.onclick = getTotalPrice;

};
