var product = {};

function deleteItem(e){

}

// function getPriceByProduct(itemNode){
function getPriceByProduct(){
  var price = document.createElement('span');
  var priceText = document.createTextNode(product.price + '$');
  price.appendChild(priceText);
  document.getElementById('wrapper').appendChild(price);
}

function updatePriceByProduct(productPrice, index){
  productPrice = product.price * index;
  product.quantity = document.getElementById("input").value;
  var productUpdatedPrice = document.createElement('span');
  var UpdatedPriceText = document.createTextNode(productPrice + '$');
  productUpdatedPrice.appendChild(UpdatedPriceText);
  document.getElementById('wrapper').appendChild(productUpdatedPrice);
}

function getTotalPrice(productPrice, index) {
  product.quantity = document.getElementById("input").value;                       //value of the input
  console.log(product.quantity);
  index = product.quantity;
  productPrice = product.price * index;
  updatePriceByProduct(product.price, product.quantity);
  var productUpdatedPrice = document.createElement('span');
  var UpdatedPriceText = document.createTextNode(productPrice + '$');
  productUpdatedPrice.appendChild(UpdatedPriceText);
  document.getElementById('footer').appendChild(productUpdatedPrice);
}

function createQuantityInput(){
  var quantity = document.createElement('div');
  var quantityText = document.createTextNode  ('QTY ');
  var quantityNode = document.createElement('INPUT');
  quantityNode.setAttribute('type', 'number');
  quantityNode.setAttribute('id', 'input');
  quantityNode.setAttribute('value', product.quantity);
  quantity.appendChild(quantityText);
  quantity.appendChild(quantityNode);
  document.getElementById('wrapper').appendChild(quantity);

}

function createDeleteButton(){

}

function createQuantityNode(){

}

//function createItemNode(dataType, itemData){
function createItemNode(){
  console.log("new item created");
  createNewItemRow(product.name, product.price);
  getPriceByProduct();
  createQuantityInput();

}

function createNewItemRow(itemName, itemUnitPrice){
  var name = document.createElement('span');
  var nameText = document.createTextNode(product.name);
  name.appendChild(nameText);
  document.getElementById('wrapper').appendChild(name);
}

function createNewItem(){
    product ={
    name: "MIONIX Castor",       //maybe can create an object of the product too
    price: 80,
    quantity: 0
    }


}

window.onload = function(){
  // var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');

  //createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
  // calculatePriceButton.onclick = getTotalPrice(product.price, product.quantity);
}

//document.getElementById('calc-prices-button').onclick = getTotalPrice(product.price, product.quantity);
