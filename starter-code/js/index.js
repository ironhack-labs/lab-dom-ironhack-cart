function deleteItem(e){

}

function getPriceByProduct(itemNode){
  let singlePrice = document.getElementsByClassName("single-price");
  return singlePrice
}

let individualPrice = getPriceByProduct();

function updatePriceByProduct(productPrice, index){
  var updatePrice = document.getElementById("total-price");
  updatePrice.value = individualPrice * quantityInput;

}

function getTotalPrice() {

}

function createQuantityInput(){
  let quantity = document.getElementById("qty");
  console.log(quantity)
  return quantity;
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
