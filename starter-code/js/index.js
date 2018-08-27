function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}
/* Create a click event for the Calculate Prices button
This event will execute a function that:
Retrieves the unit price of the product
Retrieves the quantity of items desired
Calculates the total price based on this data
Updates the total price in the DOM*/

function getTotalPrice() {

  length = document.getElementsByClassName("product-name").length;

  var sumPrice = 0;

  for (var i = 0; i < length; i++) {
    document.getElementsByClassName("totalprice")[i].innerHTML = "$" + document.getElementsByClassName("quantity-text")[i].value * document.getElementsByClassName("product-cost")[i].innerHTML;
    sumPrice += document.getElementsByClassName("quantity-text")[i].value * document.getElementsByClassName("product-cost")[i].innerHTML;
  }
  document.getElementById("final-price").innerHTML = "Total Price: $" + sumPrice;
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
  var calculatePriceButton = document.getElementsByClassName("btn-success");
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton[0].onclick = function() {  
    getTotalPrice();
  }

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

var wholeProduct = document.getElementsByClassName("product-cost")[i];
//console.log(wholeProduct.innerHTML);

  for(var i = 0; i<deleteButtons.length ; i++){
    if (deleteButtons[i].onclick) {
    document.getElementsByClassName("product-container")[i].parentNode.removeChild(document.getElementsByClassName("product-container")[i]);
    }
  }

};