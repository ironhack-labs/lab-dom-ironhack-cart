function deleteItem(e){

}

function getPriceByProduct(itemNode){
  
  
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var productPrice = document.getElementById('ProductPrice');
  var quantity = document.getElementById('quantity').value;
  var totalPrice = document.getElementById('totalPrice');
  return totalPrice.innerHTML = parseFloat(productPrice)*parseFloat(quantity)
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
