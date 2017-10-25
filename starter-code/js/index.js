function deleteItem(e){

}

function getPriceByProduct(itemNode){

  var price = document.querySelector('.price');

  return price.innerHTML;

}

function updatePriceByProduct(productPrice, index){

  var updatedPrice = productPrice * index;

  var newPrice = document.querySelector('.total-price');

  newPrice.innerHTML = updatedPrice;

  var wrapper = document.querySelector('.wrapper');

  var eachWrapper = wrapper.forEach(function(updatedPrice){
    return updatedPrice;
  });

  newPrice.innerHTML = eachWrapper;

}


function getTotalPrice() {

  var myInput = document.querySelector('.quantity');

  var getPrice = getPriceByProduct();
  updatePriceByProduct (getPrice, myInput.value);

}

function createQuantityInput(){

  var quantity = document.querySelector('input');

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
  var calculatePriceButton = document.querySelector('.calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
