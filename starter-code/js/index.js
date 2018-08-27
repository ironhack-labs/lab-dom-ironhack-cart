


var button = document.getElementById("button")

var delete = document.getElementsByClassName("btn-delete")
delete.addEventListener("click", e => {
  delete.removeChild(e.target)
})







function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var costo = document.getElementsByClassName("cost")
  var input = document.getElementById("input")
  return  input*costo

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
