function deleteItem(e){

}

function getPriceByProduct(itemNode){
  //price = parseInt(document.getElementsByClass('unit-cost')[0].innerText);

 
}

function updatePriceByProduct(productPrice, index){
  var pricebyProduct = []

}

function createQuantityInput(){
  //parseInt(document.getElementsByName('item-quantity')[0].value);
}

function getTotalPrice() {
  var input = Number(document.getElementsByName('item-quantity')[0].value);
  var price = Number(document.getElementsByClassName('unit-cost')[0].innerText);
  var TotalPrice = input * price;
  return TotalPrice;
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
  //var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

 // for(var i = 0; i<deleteButtons.length ; i++){
   // deleteButtons[i].onclick = deleteItem;
  }
//}
