const products = document.querySelectorAll('.product')
const cost = document.querySelectorAll('.cost')
const label = document.querySelector('.label')
const total = document.querySelector('.total')
const del = document.querySelector('.delete')
const pricesBtn = document.querySelector('.btn-success')
const deleteBtn = document.querySelector('.btn-delete')



function deleteItem(e){

}

function getPriceByProduct(itemNode){
  let precio=  itemNode.innerText
  precio = precio.substr(1);
  precio = parseInt(precio)
  return precio

}

function updatePriceByProduct(i){

  let unit = getPriceByProduct(cost[i])
  let cost = unit * parseInt(quantity.value)
  let signo="$"
  final=signo + cost + ".00"
  total[i].innerText=final
  
  
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
