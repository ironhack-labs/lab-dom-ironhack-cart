function deleteItem(e){
  var buttonSelect = e.currentTarget;
  var divABorrar = buttonSelect.parentNode.parentNode;
  var padre = divABorrar.parentNode;
  padre.removeChild(divABorrar);
}

/*function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}*/

/* Function for calculating the total price of one product.
   Gets the number of items the user wants of this product,
   the unit price*/
function getTotalPrice() {
  var prices = document.getElementsByClassName("prodPrice");
  var quantitys = document.getElementsByClassName("prodQuantity");
  var price, quantity, totalProdPrice, totalPrice = 0;
  for (var i = 0; i < prices.length; i++){
    price = prices[i].getElementsByTagName("span")[0].innerHTML.substr(1);
    quantity = quantitys[i].getElementsByTagName("input")[0].value;
    totalProdPrice = price * quantity;
    totalPrice = totalPrice + totalProdPrice;
    document.getElementsByClassName("prodTotalPrice")[i].innerHTML = "$"+totalProdPrice.toFixed(2);
  }
  document.getElementById("totalPrice").getElementsByTagName("span")[0].innerHTML = "$"+totalPrice.toFixed(2);
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
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
