function deleteItem(e){
  var item = e.currentTarget.parentNode.parentNode;
  var itemLine = item.parentNode;
  itemLine.removeChild(item)
}


function getPriceByProduct(){

}


function updatePriceByProduct(productPrice, index){

}


function getTotalPrice() {
 
var unitPrice = document.getElementsByClassName("costPerUnit");
var unitPriceArray = [];
for (var i=0; i < unitPrice.length; i++) {
  var unitPriceValue = unitPrice[i].innerText;
  // console.log(unitPriceValue);
  unitPriceArray.push(unitPriceValue);
  // console.log(unitPriceArray) 
}

var unitQuantity = document.getElementsByClassName("itemQuantity");
var unitQuantityArray = [];
for (var i=0; i < unitQuantity.length; i++) {
  var unitQuantityValue = unitQuantity[i].value;
  // console.log(unitQuantityValue);
  unitQuantityArray.push(unitQuantityValue);
  // console.log(unitQuantityArray);
  if (unitQuantityValue === "") {
    unitQuantityValue = "0";
  }
}

var items = document.getElementsByClassName("items");
for (var i=0; i < items.length; i++) {
  var totalItemPrice = unitPrice[i].value * unitQuantity[i].value;
  // console.log(totalItemPrice);
}

var priceByProduct = document.getElementsByClassName("totalPrice");
var itemPricesArray = [];
for (var i=0; i < priceByProduct.length; i++) {
  var totalItemPriceValues = priceByProduct[i].innerHTML = unitPriceArray[i]*unitQuantityArray[i];
  itemPricesArray.push(totalItemPriceValues);
  // console.log(itemPricesArray);
  // console.log(totalItemPriceValues)
}

var sum = itemPricesArray.reduce(sumArray, 0);
function sumArray(a, b) {
return a + b;
// console.log(sum);
}

var finalTotal = document.getElementsByClassName("finalTotal");
for (var i=0; i < finalTotal.length; i++) {
  var finalTotalValue = finalTotal[i].childNodes[1].childNodes[1].innerHTML = sum;
  // console.log(finalTotalValue);
}
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


