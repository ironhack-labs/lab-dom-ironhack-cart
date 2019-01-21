function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

let quantityItems = document.getElementById('quantity');
let priceItem = document.getElementsByClassName('priceOfItem');

let getPrice = priceItem[0].innerHTML * quantityItems[0].value;

return getPrice
}
thePrice.value = "getPrice"
// $('#thePrice').on('DOMSubtreeModified',function(e){
//   if($(this).text() == quantity
//     alert(getPrice);
// });
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
