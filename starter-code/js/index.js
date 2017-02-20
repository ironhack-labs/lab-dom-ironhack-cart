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
  var getProduct = document.getElementsByClassName('productName');
  var getUnitPrice = document.getElementsByClassName('productCost');
  var getUnitQty = document.getElementsByClassName('qty');
  console.log(getUnitQty);
  for(i = 0; i < getProduct.length; i ++) {
    var totalPrice = Number(getUnitPrice[i].innerHTML.replace(/[^0-9\.]+/g,"")) * getUnitQty[i].value;
    document.getElementsByClassName('totalProductPrice')[i].innerHTML = totalPrice;
  }
}
