function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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


  calculatePriceButton.onclick = function getTotalPrice() {
    // variable for unit price
    // variable for quantity of items
    // innerhtml to the total className
    var unitPrice = document.getElementById("initial");
    var newUnitPrice = unitPrice.innerHTML;
    newUnitPrice = newUnitPrice.slice(1, unitPrice.length);

    console.log(newUnitPrice);

    var quantity = document.querySelector(".quant-class");
    console.log(quantity.value);
    // var newQuant = document.querySelector(quantity);
    // console.log(newQuant.value);
    
  };


  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
