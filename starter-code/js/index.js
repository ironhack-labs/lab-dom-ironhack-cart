var getProduct = document.getElementsByClassName('productName');
var getUnitPrice = document.getElementsByClassName('productCost');
var getUnitQty = document.getElementsByClassName('qty');
var getTotalProductPrice = document.getElementsByClassName('totalProductPrice');
var deleteButtons = document.getElementsByClassName('btn-delete');

function deleteItem(e){
  for(i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = parentNode();

  }
}

function parentNode() {
  var x = deleteButtons[i].parentNode.parentNode;
  console.log(x);
  x.style.display = "none";
}

function getPriceByProduct(itemNode){
}

function updatePriceByProduct(productPrice, index){

}
function addTotalProductPrice(a, b) {
  return a + b;
}

function getTotalPrice() {
  var priceArray = [];
  for(i = 0; i < getProduct.length; i++) {
    var productPriceValue = parseInt(getTotalProductPrice[i].innerHTML);
    priceArray.push(productPriceValue);
  }
  document.getElementById('spanTotal').innerHTML = priceArray.reduce(addTotalProductPrice, 0);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

function calculatePrices() {
  for( i = 0; i < getProduct.length; i++ ) {
    var totalPrice = Number(getUnitPrice[i].innerHTML.replace(/[^0-9\.]+/g,"")) * getUnitQty[i].value;
    document.getElementsByClassName('totalProductPrice')[i].innerHTML = totalPrice;
  }
  getTotalPrice();
}
