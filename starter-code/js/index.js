// delete item
function deleteItem(e){
  var parentItem = e.currentTarget.parentNode.parentNode
  var childItem = parentItem.parentNode
  childItem.removeChild(parentItem);
}

// obtain price by product
function getPriceByProduct(itemNode){
  var cost = document.getElementsByClassName('unit-cost');
  var unitCost = [25,15];
  for(var i = 2; i<cost.length ; i++){
    unitCost.push(cost[i].value);
  }
  return unitCost;
}

// update price by product
function updatePriceByProduct(productPrice, index){
  var updatePrice = [];
  for(var i = 0; i<getProductPrice().length; i++){
  updatePrice.push(document.getElementsByClassName('product-price')[i].innerHTML=
  "$" + getProductPrice()[i].toFixed(2));
  }
}

// obtain price of product
function getProductPrice() {
  var productPrice = [];
  for (var i =0; i<getPriceByProduct().length; i++){
    productPrice.push(getPriceByProduct()[i]*createQuantityInput()[i]);
  }
  return productPrice;
}

// create quantity input field for a product
function createQuantityInput(){
  var input = document.getElementsByClassName('quantity-input');
  var inputValue = [];
  for(var i = 0; i<input.length ; i++){
    inputValue.push(input[i].value);
  }
  return inputValue;
}

// obtain total price of product
function getTotalPrice() {
  var totalPrice = 0;
  for (var i =0; i<getProductPrice().length; i++){
    totalPrice += getProductPrice()[i];
  }
  return totalPrice;
}

// update total price
function updateTotalPrice() {
  document.getElementById('total-price').innerHTML="Total Price: $"+
  getTotalPrice().toFixed(2);
}

// set two decimal numbers for the product's price
function setTwoNumberDecimal(e) {
  e.value = parseFloat(e.value).toFixed(2);
};

//function createItemNode(dataType, itemData){
//}

//function createNewItemRow(itemName, itemUnitPrice){
//}

// create a new item name
function createNewItemName(){
  var div = document.createElement('div');
  var itemNameNode = document.createElement('input');
  itemNameNode.className = "product-name input-name-width";
  itemNameNode.setAttribute("type", "text");
  itemNameNode.setAttribute("placeholder", "Enter new item");
  div.appendChild(itemNameNode);
  return div;
}

// create a new item unit price
function createNewItemUnitPrice(){
  var div = document.createElement('div');
  div.className = "shift";
  var lableNode = document.createElement('lable');
  lableNode.innerHTML = "$";
  var itemUnitPriceNode = document.createElement('input');
  itemUnitPriceNode.className = "unit-cost input-width";
  itemUnitPriceNode.setAttribute("type", "number");
  itemUnitPriceNode.setAttribute("value", "");
  itemUnitPriceNode.setAttribute("min", "0");
  itemUnitPriceNode.setAttribute("onchange", "setTwoNumberDecimal(this)");
  itemUnitPriceNode.placeholder = "Enter price";
  div.appendChild(lableNode);
  div.appendChild(itemUnitPriceNode);
  return div;
}
 // create a quantity field for a product
function createQuantityNode(){
  var div = document.createElement('div');
  div.className = "center";
  var lableNode = document.createElement('lable');
  lableNode.className = "quantity";
  lableNode.setAttribute("for", "quantity");
  lableNode.innerHTML = "QTY";
  var inputNode = document.createElement('input');
  inputNode.className = "quantity-input input-width";
  inputNode.setAttribute("type", "number");
  inputNode.setAttribute("value", "0");
  inputNode.setAttribute("min", "0");
  div.appendChild(lableNode);
  div.appendChild(inputNode);
  return div;
}

// create price field for a product
function createProductPrice(){
  var div = document.createElement('div');
  div.className = "end";
  var productPriceNode = document.createElement('span');
  productPriceNode.className = "product-price";
  productPriceNode.innerHTML = "$0.00";
  div.appendChild(productPriceNode);
  return div;
}

// create a delete button for a product
function createDeleteButton(){
  var div = document.createElement('div');
  div.className = "end";
  var buttonNode = document.createElement('button');
  buttonNode.className = "btn btn-delete";
  buttonNode.innerHTML = "Delete";
  buttonNode.onclick = deleteItem;
  div.appendChild(buttonNode);
  return div;
}

// creat a row for a new item
function createNewItem(){
  var container = document.createElement('container');
  container.className = "container";
  container.appendChild(createNewItemName());
  container.appendChild(createNewItemUnitPrice());
  container.appendChild(createQuantityNode());
  container.appendChild(createProductPrice());
  container.appendChild(createDeleteButton());
  var child = document.getElementById('btn-create');
  document.body.insertBefore(container, child);
}

// excute functions
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var totalPrice = function(){updatePriceByProduct(), updateTotalPrice()};

  calculatePriceButton.onclick = totalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};