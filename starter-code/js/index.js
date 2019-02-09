function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  
  var wrapper = document.getElementsByClassName("wrapper");
  var total = 0; 
  for (i = 0; i < wrapper.length; i++) {
      var productCost = document.getElementsByClassName("cost");
      var productQuantity = document.getElementsByClassName("units");
      var totalPrice = parseFloat(productCost) * productQuantity;
      var price = document.getElementsByClassName("total")[i];
      price.innerHTML = "$" + totalPrice;
    };
    
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
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
