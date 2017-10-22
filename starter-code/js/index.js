function deleteItem(e){

}

function getPriceByProduct(itemNode,i){
  var priceUnit = document.getElementById("price-unit");
  updatePriceByProduct(priceUnit);
}

function updatePriceByProduct(productPrice, index){
  var totalPrice = document.getElementById("total-price");
  var quantity = document.getElementById("quantityy");
  totalPrice.innerHTML = productPrice.innerHTML * quantity.value;
}

function getTotalPrice() {
  getPriceByProduct();
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
