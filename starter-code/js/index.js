function deleteItem(e){

}


function getPriceByProduct(itemNode){
  var product = itemNode.parentElement.parentElement;
  var qty = itemNode.value;
  var unitPrice = [].slice.call(product.getElementsByClassName('unitCost'));  
  unitPrice = parseFloat((unitPrice[0].innerHTML).slice(1,6));
  if (qty === 0) {
  } else if (qty >= 0) {
    [].slice.call(product.getElementsByClassName('totalCost'))[0].innerHTML = "$"+ (qty * unitPrice).toFixed(2);
  }
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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
