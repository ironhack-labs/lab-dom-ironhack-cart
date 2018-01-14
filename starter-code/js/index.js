function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var prodPrices = document.getElementsByClassName("prod-price");
  var prodQuantities= document.querySelectorAll(".prod-quantity input");
  var totalPrices = document.querySelectorAll(".prod-total-price span");

  console.log(prodPrices)
  console.log(prodQuantities)
  console.log(totalPrices)
  
  for(i = 0; i < prodPrices.length; i++) {
    totalPrices[i].innerHTML = (parseFloat(prodPrices[i].innerHTML) * prodQuantities[i].value).toFixed(2) + "€";
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
