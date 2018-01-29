function deleteItem(e){
var item = e.currentTarget.parentNode.parentNode;
var container = document.getElementById("container");
container.removeChild(item);
}

function getPriceByProduct(itemNode){

}
var prices = document.getElementsByClassName("price");
var quantity = document.getElementsByClassName("quantity");
console.log(prices);
function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

var totalPrice = 0;
for(var i = 0; i < prices.length; i++)
{
document.getElementsByClassName("total-price")[i].innerHTML = "$" + (prices[i].innerHTML.slice(1)*quantity[i].value).toFixed(2);
totalPrice += prices[i].innerHTML.slice(1)*quantity[i].value;
}
document.getElementById("total-price-id").innerHTML = "$" + totalPrice.toFixed(2);
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
