function deleteItem(e){
  // var deleteProduct = e.currentTarget.parentElement.parentElement;
  // deleteProduct.remove();
  e.currentTarget.parentElement.parentElement.remove();

};

function getPriceByProduct(itemNode){
  var itemText = itemNode.innerText;
  return Number(itemText.substr(1));
}

function updatePriceByProduct(productPrice, index){
  var finalPrice = "$" + productPrice;
  index.innerText = finalPrice;
}

function getTotalPrice() {
  var products = document.getElementsByClassName("product");
  for (var i = 0; i < products.length; i++) {
    var unitPrice = getPriceByProduct(products[i].children[1].childNodes[0]);

    var productQuantity = products[i].children[2].childNodes[1].value;

    var productPrice = unitPrice * productQuantity;

    updatePriceByProduct(productPrice, products[i].children[3]);
  }

};


function createQuantityInput(){
  var span = document.createElement("SPAN"); 

  var qtyInput = document.createElement("INPUT");
  var text = document.createTextNode("QTY");

  qtyInput.setAttribute("type", "text");
  qtyInput.setAttribute("class", "quantity");

  span.appendChild(text);
  span.appendChild(qtyInput);

  return span;

}

function createDeleteButton(){
  var span = document.createElement("SPAN"); 

  var btn = document.createElement("BUTTON");        // Create a <button> element
  btn.setAttribute("class", "btn btn-delete");

  var t = document.createTextNode("DELETE");       // Create a text node
  btn.appendChild(t);                                // Append the text to <button>
  span.appendChild(btn);

  return span;
}

function createQuantityNode(){
  var span = document.createElement("SPAN");

  var productValue = document.createTextNode(itemUnitPrice);
  var itemUnitPrice = document.getElementById("productPrice").value;
  
  var totalPrice = itemUnitPrice * productValue;
  span.appendChild(totalPrice);

  return span;
}

// function createItemNode(dataType, itemData){

// }

function createNewItemRow(itemName, itemUnitPrice){

  // Div que recoge todo el producto
  var div = document.createElement("DIV");
  div.setAttribute("class", "product");
  document.body.appendChild(div);
  
  // nombre del producto
  
  var productTextSpan = document.createElement("SPAN");
  div.appendChild(productTextSpan);
  var p = document.createElement("P");
  productTextSpan.appendChild(p);

  var nameText = document.createTextNode(itemName);
  p.appendChild(nameText);

  // precio unitario del nuevo producto
  var pValue = document.createElement("P");
  pValue.setAttribute("class", "unit-price");
  div.appendChild(pValue);

  var productValue = document.createTextNode(itemUnitPrice);
  pValue.appendChild(productValue);

  // cantidad de productos
  var quantity = createQuantityInput();
  quantity.setAttribute("class", "quantity");
  div.appendChild(quantity);

  // precio total del nuevo producto
  var pProductSpan = document.createElement("SPAN");
  div.appendChild(pProductSpan);

  var pProductTotalPrice = document.createElement("P");
  pProductTotalPrice.setAttribute("class", "total-price");
  pProductSpan.appendChild(pProductTotalPrice);

  var productTotalPrice = document.createTextNode("$0.00");
  pProductTotalPrice.appendChild(productTotalPrice);

  var btn = createDeleteButton();
  div.appendChild(btn);

}

function createNewItem(){

  var itemName = document.getElementById("productName").value;
  var itemUnitPrice = document.getElementById("productPrice").value;
  createNewItemRow(itemName, "$" + itemUnitPrice);

  
};

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
