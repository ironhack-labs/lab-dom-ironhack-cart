function deleteItem(e){
  var det=1*3;

}

function getPriceByProduct(itemNode){
  var price = itemNode.innerHTML;
  price = price.split("$");
  return Number(price[1]);
}

function getItemQuantity(index){
  var quantityElements = document.getElementsByTagName("input");
  if (quantityElements[index].value != null||quantityElements[index].value != "" || quantityElements[index].value != undefined){
      return quantityElements[index].value;
    } 
      return 0;
 }
function updatePriceByProduct(productPrice, index){  
  var totPriceELement = document.getElementsByClassName("product-total-price");
  totPriceELement[index].innerHTML = "$"+productPrice ; 
  return (totPriceELement[index].innerHTML);
}

function getTotalPrice() {
  var costElements = document.getElementsByClassName("product-cost");
  var totalPriceProduct=0;
  
  for (var i = 0; i < costElements.length; i ++){
    var priceUnit = getPriceByProduct(costElements[i]);
    var quantity = getItemQuantity(i);
    var totPrice = priceUnit * quantity;
     updatePriceByProduct(totPrice,i);  
     totalPriceProduct += totPrice;   
  }
  displayTotalOfAllProduct(totalPriceProduct);
}
function displayTotalOfAllProduct (totalPrice){
  var totPriceDisplayed=document.querySelector("span");
  totPriceDisplayed.innerHTML="$"+totalPrice;
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

}/*
var calculatePriceButton = document.getElementById('calc-prices-button')
calculatePriceButton.onclick = getTotalPrice;*/
var deleteButtons = document.getElementsByClassName('product-delete-btn');
deleteButtons.onclick = function(){
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem();
  }
};
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');

 // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('product-delete-btn');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;
  deleteButtons.onclick = function(){
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem();
    }
  };
  
};
