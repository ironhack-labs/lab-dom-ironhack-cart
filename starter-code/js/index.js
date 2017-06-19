function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
  getTotalPrice();
}

function getPriceByProduct(itemNode){
  // Using a table row (itemNode), we can get price, qtty and totalUnitPrice out of them
  var unitPrice = parseFloat(itemNode.getElementsByClassName("product-price")[0].innerHTML);
  var productQtty = parseInt(itemNode.getElementsByTagName("input")[0].value);
  return unitPrice * productQtty;
}

function updatePriceByProduct(productPrice, index){
  document.getElementsByClassName("product-newprice")[index].innerHTML = ("$" + productPrice);
}

function getTotalPrice(){
  var checkout = document.getElementsByClassName("product-row");
  var totalPrice = 0;
  for (var i = 0; i < checkout.length; i++) {
    var itemPrice = getPriceByProduct(checkout[i]);
    updatePriceByProduct(itemPrice, i);
    totalPrice += itemPrice;
  }
  document.getElementById("total-price").innerHTML = ("$" + totalPrice);
}

function createQuantityInput(){
  return ('<div class="product-qty"><label>QTY</label><input type="number" value="0" min="0"></div>');
}

function createDeleteButton(){
  return ('<div class="product-delete"><button class="btn btn-delete">DELETE</button></div>');
}

function createQuantityNode(){
  return ('<div class="product-newprice">0</div>');
}

function createItemNode(name, price){
  return ('<div class="product-name">' + name + '</div><div class="product-price">' + price + '</div>');
}

function createNewItemRow(itemName, itemUnitPrice){
  quantityInput = createQuantityInput();
  deleteButton = createDeleteButton();
  quantityNode = createQuantityNode();
  itemNode = createItemNode(itemName, itemUnitPrice);

  var node = document.createElement("DIV");
  node.className = "product-row";
  node.innerHTML = (itemNode + quantityInput + quantityNode + deleteButton);

  var parent = document.getElementsByClassName("checkout-table-content")[0];
  parent.appendChild(node);
}

function createNewItem(){
  var newProductName = document.getElementById("new-product-name").value;
  var newProductPrice = parseFloat(document.getElementById("new-product-price").value);

  createNewItemRow(newProductName, newProductPrice);
  getDeleteButtons();
  
  document.getElementById("new-product-name").value = "";
  document.getElementById("new-product-price").value = "";
}

function getDeleteButtons() {
  var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  getDeleteButtons();
};
