function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var price = document.getElementById(itemNode);
  return parseFloat(price.innerHTML);
}

function updatePriceByProduct(productPrice, index){
    var totalProduct = productPrice * index;
    return document.getElementById("productsum").innerHTML = "$"+totalProduct;
}

function getTotalPrice() {

}

function createQuantityInput(){
    var qtyElement = document.getElementById("QTY");
    return parseFloat(qtyElement.value);
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
