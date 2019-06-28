// -----------------------------------------------------------------------------------------
// Deleting items
// -----------------------------------------------------------------------------------------

function deleteItem(e){
  
}

// -----------------------------------------------------------------------------------------
// Calculating Product total price
// -----------------------------------------------------------------------------------------



  // Get 
function getProductInfo() {
}

function getProductUnitPrice(itemNode){

}

function calcProductTotalPrice(productPrice, index){

}

function updatePrices() {

}

// -----------------------------------------------------------------------------------------
// Creating new items
// -----------------------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------------------
// Creating the event listeners
// -----------------------------------------------------------------------------------------

window.onload = function(){

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.addEventListener("click", updatePrices);
  createItemButton.addEventListener("click", createNewItem);

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener("click", deleteItem);
  }


};
