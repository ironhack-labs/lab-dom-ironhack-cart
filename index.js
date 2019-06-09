
console.log("connected")
$price = document.getElementsByClassName("item_price");
$quantity = document.getElementsByClassName("input").value;
$sum = document.getElementsByClassName("total_sum_of_items");
$delete_button = document.getElementsByClassName("btn btn-delete");
$green_button = document.getElementsByClassName("btn-success");

$price.onclick = function(){
  console.log("The element was clicked");
}
//Nothing happens!!!

/*
function deleteItem(e){

}

function getPriceByProduct(itemNode){

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
*/