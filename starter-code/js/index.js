function deleteItem(e){

}

//Event listener over the button
var button = document.getElementsByClassName("btn-success")[0];
button.onclick = function(){
  //pick up the price, the amount of objets and the total amount of cost
  var precio= document.getElementsByClassName("product-price")[0].innerHTML;
  var cantidad= document.getElementsByClassName("quantity")[0].value;
  var total=parseFloat(precio.replace('$', ''))*cantidad;
 //Equal the final price to the pricexunits price
  document.getElementsByClassName('total-price')[0].innerHTML=total;
  
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
