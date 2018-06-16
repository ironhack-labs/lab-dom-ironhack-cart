

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var total=0;

  var productPriceArr=document.getElementsByClassName("product-price");
  var quantityArr=document.getElementsByClassName("quantity");
  var totalPriceArr=document.getElementsByClassName("total-price");
 
  for(var i=0; i<productPriceArr.length; i++){

    var price=parseFloat(productPriceArr[i].innerHTML.slice(1));
    
    
    totalPriceArr[i].innerHTML="$"+(price*parseInt(quantityArr[i].value)); 
  }
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


var calculatePriceButton = document.getElementById('calc-prices-button');

