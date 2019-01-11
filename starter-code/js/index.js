function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

// getTotalPrice
var price = 0.5;
function getTotalPrice() {
  var cantidad= document.querySelector(".quantity").value;
  var total = price * cantidad
  document.querySelector(".span").innerHTML = total

  var price = 1;
function getTotalPrice() {
  var cantidad= document.querySelector(".quantity2").value;
  var total = price * cantidad
  document.querySelector(".span2").innerHTML = total
//  return (price * cantidad);
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
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;
  

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
