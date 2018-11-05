function deleteItem(e){
  
  document.getElementsByClass("btn-delete").onclick = function(){
    var productoDiv = document.getElementsByClass("producto1")
    productoDiv.innerHTML = ""; 
  };
}
 

function getPriceByProduct(itemNode){
    var precioItem = document.getElementById('precio');
}

function updatePriceByProduct(productPrice, index){
var pretot = precioItem * input
pretot = document.setElementById('total')
};


function getTotalPrice() {
document.setElementsByClass('btn-success').onclick = function(){
(document.getElementById('precio') * (document.getElementsByClass('quantity'))
};
}
console.log(setElementById('total'))


function createQuantityInput(){
  var input = document.getElementsByTagName('input')[0];
  console.log(input.value); 
}

function createDeleteButton(){

}

function createQuantityNode(){
var quantity = document.getElementsByTagName('input');

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
