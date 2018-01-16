function deleteItem(e){

}

// function getPriceByProduct(nodeItem)
function getPriceByProduct(){
  var priceItem = document.getElementsByClassName('.price-item');
  priceItem = parseInt(priceItem[0].innerText); 
  return priceItem;
}

function updatePriceByProduct(productPrice, index){
  var subtotal = document.getElementsByClassName('subtotal');
  subtotal = parseInt(subtotal[0].innerText);

  var quantity = document.getElementsByClassName('quantity');
  quantity = parseInt(quantity[0].value);
  subtotal = getPriceByProduct() * quantity;
  return subtotal;
}

function getTotalPrice() {
  return subtotal;  
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
  var quantity = document.getElementsByClassName('quantity');
  
  
  // return totalPrice.innerText = getTotalPrice;

  calculatePriceButton.onclick = getTotalPrice;

  
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
