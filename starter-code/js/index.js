function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var getPrice = document.getElementsByClassName('price');
  return parseInt(getPrice[0].innerHTML);

}


function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var totalPrice = getPriceByProduct() * createQuantityInput();
  return totalPrice;
}

function createQuantityInput(){
var getItem = document.getElementsByTagName('input');
 return parseInt(getItem[0].value);
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

console.log(updatePriceByProduct());


  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
