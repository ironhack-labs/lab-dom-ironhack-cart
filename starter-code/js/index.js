function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var priceOne = itemNode.getElementsByClassName('price')[0].innerHTML;
  return priceOne;
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var price= getPriceByProduct(document.getElementsByClassName("products")[0])
  var quantity = document.getElementsByClassName("products")[0].getElementsByClassName("quantity")[0].value;
  console.log(price*quantity)
  document.getElementsByClassName("total-price")[0].innerHTML=price*quantity;

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
