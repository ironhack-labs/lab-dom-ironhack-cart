function deleteItem(e) {
  var parentButtonDelete = e.currentTarget.parentNode;
  var parentProductDelete = parentButtonDelete.parentNode;
  parentProductDelete.removeChild(parentButtonDelete);
}

function getPriceByProduct(itemNode) {
  var price = itemNode.getElementsByClassName("price")[0].textContent;
  return parseFloat(price.substring(1));

}

function getAmountByProduct(itemNode) {
  var amount = parseFloat(itemNode.getElementsByTagName("input")[0].value);
  return amount;
}

function updatePriceByProduct(productPrice, index) {
  document.getElementsByClassName("price-amount")[
    index
  ].innerHTML = `$${productPrice}`;
}

function getTotalPrice() {
  var amount,
    price = 1;
  var priceTotal = 0;
  var products = document.getElementsByClassName("product");


  // products.forEach(function(product,index) {
  //   price = getPriceByProduct(product);
  //   amount = getAmountByProduct(product);
  //   priceProduct = price * amount;
  //   updatePriceByProduct(priceProduct,index);

  // });

  for (var i = 0; i < products.length; i++) {
    price = getPriceByProduct(products[i]);
    amount = getAmountByProduct(products[i]);
    priceProduct = price * amount;
  
    priceTotal += priceProduct;

    updatePriceByProduct(priceProduct, i);
  }

  document.getElementById("total-value").innerHTML = `$${priceTotal}`;
}

function createQuantityInput(parent) {
  
  listProducts = document.getElementsByClassName("products")[0];
  var inputNode =createItemNode("INPUT" ,"0");
  inputNode.className="amount";
  var label = createItemNode("label","QTY");
  var divInput = createItemNode("div",label);
  divInput.appendChild(inputNode);
  parent.appendChild(divInput);
  
}

function createDeleteButton(parent) {

  listProducts = document.getElementsByClassName("products")[0];
  var deleteButton =createItemNode("BUTTON","delete");
  deleteButton.className="btn-delete";
  deleteButton.onclick = deleteItem;
  parent.appendChild(deleteButton);
}

function createQuantityNode(parent) {

  listProducts = document.getElementsByClassName("products")[0];
  var spanQuantityNode = createItemNode("span", "$0.00");
  spanQuantityNode.className = "price-amount";
  var divQuantityNode  = createItemNode("div",spanQuantityNode);
  parent.appendChild(divQuantityNode);

}

function createItemNode(dataType, itemData) {


  if(dataType ==="span"){
    var tag = document.createElement(dataType);
    var textNode = document.createTextNode(itemData);
    tag.appendChild(textNode);
  
  }else if(dataType === "div"){
    var tag = document.createElement(dataType);
    tag.appendChild(itemData);
  }else if(dataType === "INPUT"){
    var tag = document.createElement(dataType);
  }else if(dataType === "BUTTON"){
    var tag = document.createElement(dataType);
    var textNode = document.createTextNode(itemData);
    tag.appendChild(textNode);
  }else{
    var tag = document.createElement(dataType);
    var textNode = document.createTextNode(itemData);
    tag.appendChild(textNode);
    console.log(tag);
  }


    


  return tag;
}

function createNewItemRow(itemName, itemUnitPrice) {
  var productDiv, listProducts;
  productDiv = createItemNode("div",itemName);
  productDiv.appendChild(itemUnitPrice);
  productDiv.className = "product-section-one product";

  listProducts = document.getElementById("list-products");
  createQuantityInput(productDiv);
  createQuantityNode(productDiv);
  createDeleteButton(productDiv);
  listProducts.appendChild(productDiv);


  

  
}

function createNewItem() {
  var inputName  = document.getElementById("input-name").value;
  var inputPrice = document.getElementById("input-price").value;
 
 
  /* Creating the new itemsNode to productName */
  var spanProductName = createItemNode("span", inputName);
  spanProductName.className = "product-name";
  var divProductName  = createItemNode("div",spanProductName);

  
  /* Creating the new itemsNode to productPrice  */  
  inputPrice = "$" + inputPrice;
  var spanProductPrice = createItemNode("span", inputPrice);
  spanProductPrice.className = "price";
  var divProductPrice  = createItemNode("div", spanProductPrice);
  
 
 createNewItemRow(divProductName, divProductPrice);

}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};