function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}
function updateQuantity (){
  input.onkeyup.setAttribute(name, value);
}
function getTotalPrice() {
  //We initialize our price variable at 0
  var totalPrice = 0;
  //
  var products = document.getElementsByClassName('product')

  for ( i = 0 ; i < products.length ; i++){
    totalPrice 
  }
  console.log(input*price)
return input * price

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
  var input = document.getElementById('quantity')[0]
  var price = document.getElementsByClassName('price')[0]
  

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
