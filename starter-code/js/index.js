var itemClassName = "cart-product";
var itemNameClassName = itemClassName + "--name";
var itemPriceClassName = itemClassName + "--cost";
var itemQtyClassName = itemClassName + "--qty";
var itemPriceTotalClassName = itemClassName + "--price";
var itemActionsClassName = itemClassName + "--actions";
var cartContainerId = "ironhackCart";

function deleteItem(e){
  var cartContainer = document.getElementById(cartContainerId);
  var productToRemove = e.currentTarget.parentNode.parentNode;
  cartContainer.removeChild(productToRemove);
  getTotalPrice();
}
function getPriceByProduct(itemNode){
  var productList = document.getElementsByClassName(itemClassName);
  var productPrice = productList[itemNode].getElementsByClassName(itemPriceClassName)[0].getElementsByTagName('span')[0].firstChild.nodeValue;
  productPrice = parseFloat(productPrice);
  return productPrice;
}

function updatePriceByProduct(productPrice, index){
  var productList = document.getElementsByClassName(itemClassName);
  var productQty = productList[index].getElementsByClassName('quantity')[0].value;
  var priceContainer = productList[index].getElementsByClassName(itemPriceTotalClassName)[0].getElementsByTagName('span')[0];
  var priceTotal = productPrice * productQty;
  priceContainer.innerHTML = priceTotal.toFixed(2);
}

function getTotalPrice() {
  var totalsArray = [];
  var productList = document.getElementsByClassName(itemClassName);
  for (var i = 0; i < productList.length; i++) {
    var productPrice = getPriceByProduct(i);
    updatePriceByProduct(productPrice, i);
    var totalPrice = productList[i].getElementsByClassName(itemPriceTotalClassName)[0].getElementsByTagName('span')[0].firstChild.nodeValue;
    totalPrice = parseFloat(totalPrice);
    totalsArray.push(totalPrice)
  }
  var pricesTotal = totalsArray.reduce(function(sum, value){
    return sum + value;
  });
  var priceTotalContainer = document.getElementById('cartTotal').getElementsByTagName('span')[0];
  priceTotalContainer.innerHTML = pricesTotal.toFixed(2);
}

function createQuantityInput(){
  var element = document.createElement('input');
  element.type = "text";
  element.name = "quantity";
  element.className = "quantity";
  element.value = 0;
  return element;
}

function createDeleteButton(){
  var element = document.createElement('button');
  var text = document.createTextNode('Delete');
  element.className = "btn btn-delete";
  element.appendChild(text);
  element.addEventListener('click', deleteItem, false);
  return element;
}

function createQuantityNode(){
  var element = document.createElement('div');
  element.className = itemQtyClassName;
  var label = document.createElement('label');
  label.for = "quantity";
  label.innerHTML = "<abbr title=\"Quantity\">QTY</abbr>";
  var input = createQuantityInput();
  element.appendChild(label);
  element.appendChild(input);
  return element;
}

function createItemNode(dataType, itemData){
  var element = document.createElement(dataType);
  element.innerHTML = itemData;
  return element;
}

function createNewItemRow(itemName, itemUnitPrice){
  var newItemRow = document.createElement('div')
  var name = "<span>" + itemName + "<span>";
  var priceNumber = parseFloat(itemUnitPrice);
  priceNumber = priceNumber.toFixed(2);
  var price = "<span class=\"dollars\">" + priceNumber + "</span>";
  var priceTotal = "<span class=\"dollars\">0.00</span>";
  var btn = createDeleteButton();
  var newItemName = createItemNode('div', name);
  var newItemPrice = createItemNode('div', price);
  var newItemQty = createQuantityNode();
  var newItemPriceTotal = createItemNode('div', priceTotal);
  var newItemActions = createItemNode('div', '')
  newItemRow.className = itemClassName;
  newItemName.className = itemNameClassName;
  newItemPrice.className = itemPriceClassName;
  newItemQty.className = itemQtyClassName;
  newItemPriceTotal.className = itemPriceTotalClassName;
  newItemActions.className = itemActionsClassName;
  newItemActions.appendChild(btn);
  newItemRow.appendChild(newItemName);
  newItemRow.appendChild(newItemPrice);
  newItemRow.appendChild(newItemQty);
  newItemRow.appendChild(newItemPriceTotal);
  newItemRow.appendChild(newItemActions);
  return newItemRow;
}

function createNewItem(){
  var name = document.getElementById('newItemName');
  var price = document.getElementById('newItemCost');
  var newProduct = createNewItemRow(name.value, price.value);
  var cartContainer = document.getElementById(cartContainerId);
  cartContainer.appendChild(newProduct);
  name.value = "";
  price.value = "";
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].addEventListener('click', deleteItem, false);
  }
};
