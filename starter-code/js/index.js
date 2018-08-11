function deleteItem(e){

}

function getPriceByProduct(itemNode){
  return parseFloat(itemNode.textContent.replace('$',''));
}

function updatePriceByProduct(productPrice, index){
  var totalPriceColle = document.getElementsByClassName('totalPrice');
  var totalPrice = totalPriceColle[index];
  totalPrice.innerHTML = productPrice;
}

function getTotalPrice() {
  var unitPriceColle = document.getElementsByClassName('unitPrice');
  var qoutityColle = document.getElementsByClassName('inputQuatity');
  var totalPrice = 0;
  for(var i=0;i<unitPriceColle.length;i++){
    var unitPrice = unitPriceColle[i];
    var qoutity = qoutityColle[i];
    var multiply = getPriceByProduct(unitPrice) * parseInt(qoutity.value);
    updatePriceByProduct(multiply,i);
    totalPrice += multiply;
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

