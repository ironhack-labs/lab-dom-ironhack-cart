function deleteItem(e){

}
//let productNew = '';
//let productPrice ='';

let productPrice = document.getElementById('price').value;
let quantityItems = document.getElementById('units').value;
let priceItems = document.getElementById('total-price').value;


function getPriceByProduct(itemNode){
  
  let productPrice = document.getElementById('price');
  //let quantityItems = document.getElementById('units');

  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let productPrice = parseInt(document.getElementById('price').value);
  let quantityItems = parseInt(document.getElementById('units').value);
  document.getElementsById('total-price').innerHTML = productPrice * quantityItems;

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
