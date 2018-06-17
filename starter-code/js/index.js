function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode){

}

var itemNode = document.getElementsByClassName("wrapper");
var prices = document.getElementsByClassName("product-price");
var quantities = document.getElementsByTagName("input");
var totalPrice = document.getElementsByClassName("total");

function updatePriceByProduct(){
  var units = 0;

  for (var i = 0; i < itemNode.length; i++){
    units = quantities[i].value;
    updatePrice = parseInt(prices[i].textContent) * units; // Calculate price x QTY
    totalPrice[i].innerHTML = updatePrice; // Add total product prices 
  }
  return getTotalPrice();
}

function getTotalPrice() {
  var finalPrice = document.getElementById("final-price");
  var absolutePrice = 0;

  for (var i = 0; i < itemNode.length; i++){
    var sum = parseInt(totalPrice[i].textContent);
    absolutePrice += sum;
    finalPrice.innerHTML = absolutePrice;
  }

}

// Creating new products
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
  var itemNode = document.getElementsByClassName("wrapper");
  var actualPrice = document.getElementsByClassName("product-price");
  var actualQuantity = document.getElementsByClassName("quantity").value;


  calculatePriceButton.onclick = updatePriceByProduct;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

};
