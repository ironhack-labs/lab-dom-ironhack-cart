function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var priceUnity = Number(document.querySelectorAll('.unity-price')[i].innerText);
  return priceUnity;
}

function updatePriceByProduct(productPrice, index){
  var productPrice = document.querySelectorAll('.unity-price');
  for (i=0; i < productPrice.length; i++) {
    var quantityUnity = Number(document.querySelectorAll('.input-qty')[i].value);
    var total = quantityUnity * getPriceByProduct();
    document.querySelectorAll('.total-price')[i].innerText = total;
  }
}

function getTotalPrice() {

    updatePriceByProduct();
  
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
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
