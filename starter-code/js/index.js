function deleteItem(e){
  e.path[2].remove()
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  for (var i = 0; i < document.getElementsByClassName("input").length; i++){
    var total = document.getElementsByClassName("span-total-price")[i].innerHTML = 
    document.getElementsByClassName("span-price")[i].innerHTML * 
    document.getElementsByClassName("input")[i].value;
  }
  return parseInt(total);
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
  // var newIt = document.getElementById("row-in");

  // document.getElementById("row-in").appendChild(newIt);
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
