function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName("item-container");  
  var cartTotalPrice = document.querySelector("#cart-total-price span");
  cartTotalPrice.innerText = 0;

  for (var i = 0; i < products.length; i++) {          
    products[i].querySelector(".total-price span").innerText = Number(Number(products[i].querySelector(".unit-price span").innerText) * Number(products[i].querySelector(".qty-input").value));    
    cartTotalPrice.innerText = Number(cartTotalPrice.innerText) + Number(products[i].querySelector(".total-price span").innerText);
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