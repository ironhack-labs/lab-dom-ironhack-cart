function deleteItem(e){

}

//Event listener over the button
var button = document.getElementsByClassName("btn-success")[0];
button.onclick =function(){ 
  for (var i=0;i<100;i++){
  //pick up the price, the amount of objets and the total amount of cost
  var precio= document.getElementsByClassName("product-price")[i].innerHTML;
  var cantidad= document.getElementsByClassName("quantity")[i].value;
  var total=parseFloat(precio.replace('$', ''))*cantidad;
 //Equal the final price to the pricexunits price
  document.getElementsByClassName('total-price')[i].innerHTML=total;
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
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
