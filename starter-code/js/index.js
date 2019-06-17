function deleteItem(e){

}

function getPriceByProduct(itemNode){
  
    
}

function updatePriceByProduct(productPrice, index){
 
}

function getTotalPrice(e) {
  let total = document.getElementsByClassName("totalPrice")
  let qty =document.getElementsByClassName("quantity");
  let productPrice = document.getElementsByClassName("productCost");
  let x = productPrice[0].innerHTML.split('$');
  let price = parseFloat(x[i]);
  totalPrice = price * parseFloat(qty[i].value);
  console.log(totalPrice);
 total[0].innerHTML= totalPrice.toFixed(2);
var i;
 for (i = 0 ; i <= productPrice.length; i++);
 for (i = 0 ; i <= price.length; i++);
 for (i = 0 ; i <=qty.length; i++);




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
  //createItemButton.onclick = createNewItem;
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
