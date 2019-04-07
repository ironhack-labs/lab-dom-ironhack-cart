function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(index){
let priceArray = document.getElementsByClassName('item-price');
let quantityArray = document.getElementsByClassName('quantity');
let totalArray = document.getElementsByClassName('item-total');
  totalArray[index].innerHTML = '$' + (Number(priceArray[index].innerHTML) * quantityArray[index].value).toFixed('2');


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
  let quantityArray = document.getElementsByClassName('quantity');

  for(let i = 0; i < quantityArray.length; i++){
    quantityArray[i].addEventListener('input', () => updatePriceByProduct(i));
  }
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }


};


