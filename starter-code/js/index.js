function deleteItem(e){

}

function getPriceByProduct(itemNode){
  //var actualPrice = document.getElementById("product-price");
//
  //for(var i = 0; i < items.length ; i++){
  //  items[i];
  //}
  //console.log(actualPrice)
}

function updatePriceByProduct(productPrice, index){
  //var actualQuantity = document.getElementById("quantity").value;
  //var totalPrice = parseInt(actualPrice.textContent) * actualQuantity;
}

function getTotalPrice() {
  var actualPrice = document.getElementById("product-price");
  var actualQuantity = document.getElementById("quantity").value;
  var totalPrice = parseInt(actualPrice.textContent) * actualQuantity;
  
  document.getElementById("total").innerHTML = totalPrice;
}

// Creating new products
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
  var items = document.getElementsByClassName("wrapper");

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
