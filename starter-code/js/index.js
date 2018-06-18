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

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

function createNewItemRow(itemName, itemUnitPrice){
  var div = document.createElement("DIV");
  document.body.appendChild(div);
  
  var p = document.createElement("P");
  div.appendChild(p);

  var nameText = document.createTextNode(itemName);
  p.appendChild(nameText);

  
  var pValue = document.createElement("P");
  div.appendChild(pValue);
  var productValue = document.createTextNode(itemUnitPrice);
  pValue.appendChild(productValue);


  var quantity = createQuantityInput();
  div.appendChild(quantity);

  var btn = createDeleteButton();
  div.appendChild(btn);


}

function createNewItem(){

  var itemName = document.getElementById("productName").value;
  var itemUnitPrice = document.getElementById("productPrice").value;
  createNewItemRow(itemName, itemUnitPrice);

  
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
