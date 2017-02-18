function deleteItem(e){

}

function getPriceByProduct(itemNode){
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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
  var getUnitPrice = document.getElementById('productCost').innerHTML;
  var getUnitQty = document.getElementById('qty').value;
  var totalPrice = Number(getUnitPrice.replace(/[^0-9\.]+/g,"")) * getUnitQty;
  document.getElementById('totalProductPrice').innerHTML = totalPrice;
}
