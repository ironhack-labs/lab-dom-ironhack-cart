function deleteItem(e){

  var deleteBtn = e.currentTarget;
  var productList = document.getElementById("products");
  productList.removeChild(deleteBtn.parentNode.parentNode);

  getTotalPrice();
}

function getPriceByProduct(itemNode){

  var price = Number.parseFloat(itemNode.querySelector(".price-unit").innerHTML.replace("$",""));
  var units = Number.parseInt(itemNode.querySelector(".quantity").value);

  return "$" + ((price * units).toFixed(2));
}

// function updatePriceByProduct(productPrice, index){ //I haven't used this function

// }

function getTotalPrice() {

  var products = document.getElementById("products");
  var totalPrice = 0;
  // In this loop we get the price per product (we call to "getPriceByProduct" function) and update it.
  //we also add the price of all the products
  for (var i = 0, l = products.children.length; i < l; i++) {
    products.children[i].querySelector(".final-price").innerHTML= "";
    products.children[i].querySelector(".final-price").appendChild(document.createTextNode(getPriceByProduct(products.children[i])));
    totalPrice += Number.parseFloat(products.children[i].querySelector(".final-price").innerHTML.replace("$", ""));
  }
  //Now update the "total price"
  var totalPriceTag = document.getElementById("total-price-cart");
  totalPriceTag.innerHTML = "";
  totalPriceTag.appendChild(document.createTextNode("$" + totalPrice));
}

function createQuantityInput(){
  
  var inputTag = document.createElement("input");
 
  inputTag.classList.add("quantity");
  inputTag.type = "text";
  inputTag.value = 0;

  return inputTag;
}

function createDeleteButton(){
  
  var divTag = document.createElement("div");
  var buttonTag = document.createElement("button");

  buttonTag.appendChild(document.createTextNode("Delete"));
  buttonTag.classList.add("btn");
  buttonTag.classList.add("btn-delete");
  buttonTag.onclick = deleteItem;
  divTag.appendChild(buttonTag);

  return divTag;
}

function createQuantityNode(){

  var divTag = document.createElement("div");
  var labelTag = document.createElement("label");

  labelTag.appendChild(document.createTextNode("QTY"));
  divTag.appendChild(labelTag);
  divTag.appendChild(createQuantityInput());

  return divTag;
}

function createItemNode(dataType, itemData){

  var tag = document.createElement(dataType);
  spanTag = document.createElement("span");
  spanTag.appendChild(document.createTextNode(itemData));
  tag.appendChild(spanTag);

  return tag;
}

function createNewItemRow(itemName, itemUnitPrice){

  //We create new Row..."productTag"
  var productTag = document.createElement("div");
  productTag.classList.add("product");

  //add child "name" to "productTag"...
  var itemNode = createItemNode("div", itemName);
  itemNode.firstChild.classList.add("name");
  productTag.appendChild(itemNode);

  //add child "price" to "productTag"...
  itemNode = createItemNode("div", "$" + itemUnitPrice);
  itemNode.firstChild.classList.add("price-unit");
  productTag.appendChild(itemNode);

  //add child "quantity" to "productTag"...
  itemNode = createQuantityNode();
  productTag.appendChild(itemNode);

  //add child "final price" to "productTag"...
  itemNode = createItemNode("div", "$0.00");
  itemNode.firstChild.classList.add("final-price");
  productTag.appendChild(itemNode);

  //add child "delete button" to "productTag"...
  itemNode = createDeleteButton();
  productTag.appendChild(itemNode);

  //add this "productTag" to html
  var products = document.getElementById("products");
  products.appendChild(productTag);

}

function createNewItem(){

  var itemName = document.getElementById("item-name");
  var itemUnitPrice = document.getElementById("item-unit-price");

  createNewItemRow(itemName.value, itemUnitPrice.value);

  itemName.value = "";
  itemUnitPrice.value = "";
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
