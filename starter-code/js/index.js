function deleteItem(e){

}

function getPriceByProduct(itemNode){
  

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  document.getElementsByClassName("total-price-span")[0].innerHTML =
  document.getElementsByClassName("span-price")[0].innerHTML *
  document.getElementsByClassName("qty-value")[0].value
  
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
