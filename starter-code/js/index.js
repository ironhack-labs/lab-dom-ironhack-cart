var currentPrice = document.getElementsByClassName("price");
var input = document.getElementsByTagName("input");
var itemTotal = document.getElementsByClassName("item-total");
var totalPrice = document.getElementById("total-price");



function deleteItem(e){
  var parent = e.currentTarget.parentElement.parentElement.parentElement
  var deleteWrap = parent.removeChild(e.currentTarget.parentElement.parentElement)
   return deleteWrap
}

function getPriceByProduct(itemNode){
  for (i = 0; i < itemNode.length; i++) {
    productPrice = itemNode[i].textContent;
    return productPrice;
  }
}

function updatePriceByProduct(){
  for (var i = 0; i < currentPrice.length; i++) {
   var total = currentPrice[i].textContent * input[i].value;
   itemTotal[i].innerHTML = total;
    console.log(itemTotal);
  }
}

function getTotalPrice() {
  updatePriceByProduct();
  var newPrice;
  for (var i = 0; i < currentPrice.length; i++) {
    newPrice += itemTotal[i];
  }
  return totalPrice.innerHTML = newPrice;
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
