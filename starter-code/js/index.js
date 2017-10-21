function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

/* Function for calculating the total price of one product.
   Gets the number of items the user wants of this product,
   the unit price*/
function getTotalPrice() {
  var prices = document.getElementsByClassName("prodPrice");
  var quantitys = document.getElementsByClassName("prodQuantity");
  var price, quantity, totalPrice;
  for (var i = 0; i < prices.length; i++){
    price = prices[i].getElementsByTagName("span")[0].innerHTML.substr(1);
    quantity = quantitys[i].getElementsByTagName("input")[0].value;
    totalPrice = price * quantity;
    console.log(totalPrice);
    document.getElementsByClassName("prodTotalPrice")[i].innerHTML = "$"+totalPrice.toFixed(2);
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
