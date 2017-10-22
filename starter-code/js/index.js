function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

//Define the total price of the product
function getTotalPrice() {
  var qtys = document.getElementsByClassName("quantity");
  var prices = document.getElementsByClassName("costUnit");
  var totals = document.getElementsByClassName("totalPrice");
  var totalPrice = document.getElementById("total").innerHTML;
  var sum = 0;
  for(var x = 0; x < prices.length; x++){
    var fCost = prices[x].innerHTML.substring(1);
    var result = qtys[x].value * fCost;
    sum += result;
    totals[x].innerHTML = "$" + result;
  }
  totalPrice = totalPrice.split(" ");
  totalPrice.pop();
  totalPrice.push("$" + sum);
  totalPrice = totalPrice.join(" ");
  total.innerHTML = totalPrice;
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
