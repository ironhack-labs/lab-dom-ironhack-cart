function deleteItem(e){
  // currentTarget to not delete everything by clicking on the button
  var itemContainer = e.currentTarget.parentElement.parentElement;
  var productContainer = document.querySelector("#products");
  productContainer.removeChild(itemContainer);
  // updates total price
  getTotalPrice();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}



function getTotalPrice() {
  var productPrice = document.querySelectorAll('.price');
  var quantity = document.querySelectorAll(".product-quantity");
  var totalPrice = document.querySelectorAll(".total-price");


  for(var i = 0; i < productPrice.length; i++) {
    totalPrice[i].textContent = "$" + parseFloat((productPrice[i].textContent.slice(1) * quantity[i].value)).toFixed(2);
  }
  var calculatedPrice = document.querySelector(".calculated-price")
  var result = 0;
  for(var i = 0; i < totalPrice.length; i++) {
    result += parseFloat((totalPrice[i].textContent.slice(1)))
  } 
  calculatedPrice.textContent = "$" + result.toFixed(2)
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
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


