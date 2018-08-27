function deleteItem(e){

}

function getPriceByProduct(itemNode){

  let price = document.getElementById('pro1').innerHTML;
  price= price.slice(1)
  return price;

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let total = getPriceByProduct()*createQuantityInput();
  return total

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){
let price2= getTotalPrice= getTotalPrice();
document.getElementById('total').innerHTML * Total2

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
