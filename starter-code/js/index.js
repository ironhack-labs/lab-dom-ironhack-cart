function deleteItem(e){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(){
  debugger
  items=document.getElementsByClassName("mainwrapper");
  for (i=0; i<items.length; i++){
  var Price = document.getElementsByTagName("span")[0+i].innerHTML;
  var PriceNum = parseInt(Price);
  var Quantity = document.getElementsByClassName("quantity")[i].value;
  var Total = PriceNum * Quantity;
  var totalpantalla = document.getElementsByClassName("Total")[i];
  totalpantalla.innerHTML = Total + " $";
  }
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

  //for(var i = 0; i<deleteButtons.length ; i++){
    //deleteButtons[i].onclick = deleteItem;
  
};
