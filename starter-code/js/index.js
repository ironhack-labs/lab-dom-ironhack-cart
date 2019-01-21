// Trying to calculate the total price of all the stuff I'm buying

let btnCalculate = document.getElementsByClassName("btn-calculate")

function getTotalPrice() {

}

let shoppingList = document.getElementsByClassName("shopping-list")

function deleteItem(element){
  shoppingList.addEventListener("click", element => shoppingList.removeChild(element.target))
}


function getPriceByProduct(productPrice, productQuantity){
  let productPrice = document.getElementsByClassName("price")
  let productQuantity = document.getElementsByClassName("quantity")
  let productSubtotal = document.getElementById("subtotal")

  productSubtotal = productPrice * productQuantity
  return productSubtotal
}

btnCalculate.onclick = getPriceByProduct

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
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(let i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
