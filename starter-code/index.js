function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}


// Getting the final price x product but not x purchase
function getTotalPrice(itemNode) {
  var pricePerUnit = document.getElementsByClassName('price-per-unit');
  var calculatePriceButton = document.getElementById('calculate-price');
  var quantityInput = document.getElementById('quantity-input').value;
  var deleteButton = document.getElementsByClassName('btn-delete');
  var totalPrice = document.getElementsByClassName('total-price');
  var total = pricePerUnit * quantityInput ;
  return total.createTextNode(total)
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

  calculatePriceButton.onclick = getTotalPrice();
  quantityInput.onclick = createNewItem;

  for(var i = 0; i<deleteButton.length ; i++){
    deleteButton[i].onclick = deleteItem;
  }
};
