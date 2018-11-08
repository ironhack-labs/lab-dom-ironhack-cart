var totalPrices = 0;

function getTotalPrice() {
  var myNodelist = document.querySelectorAll(".product");

  for (var i = 0; i < myNodelist.length; i++) {
    var eachProduct = myNodelist.item(i);
    
    var priceProduct = eachProduct.querySelector('.product-price span');
    var priceProductNum = priceProduct.textContent;

    var quantityProduct = eachProduct.querySelector('.product-quantity .qty');
    var quantityProductNum = quantityProduct.value;

    var productPrice = priceProductNum * quantityProductNum;
    var finalProductPrice = eachProduct.querySelector('.product-total-price span');
    var totalPrice = finalProductPrice
    totalPrice.innerHTML;

    finalProductPrice.innerText = productPrice;

    totalPrices += finalProductPrice;
    console.log(totalPrices);
    document.getElementById('totalValue').innerHTML = totalPrices.value;
  }
}


function deleteItem(event){
  var deleteBtn = event.target;

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

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
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};