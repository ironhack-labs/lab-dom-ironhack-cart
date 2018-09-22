
//clickEvent Calculate Prices
/*var pricesButton = document.getElementById("calc-prices-button);
pricesButton.onclick = function () {
  var unitPrice = document.getElementsByClassName(unit-price) 
}*/

function deleteItem(e){
  
}

function getPriceByProduct(){
  var productPrice = document.getElementsByClassName('unit-price')[0].innerHTML.replace("$", "");
  return productPrice;
}

function updatePriceByProduct(productPrice, quantity){
var quantity = document.getElementsByTagName('input').value;
return quantity * productPrice;
} 


function getTotalPrice() {

}

function createQuantityInput(){
var qtyInput = document.getElementByTagName('input')[0];
return qtyInput.value;
}


/*var input = document.getElementsByTagName('input')[0];
console.log(input.value);*/



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

/*window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};*/
