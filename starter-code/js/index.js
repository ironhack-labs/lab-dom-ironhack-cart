function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var costs = document.getElementsByClassName('unit-price');
  var quantities = document.getElementsByClassName('quantity');
  var allPrices = [];
  var allQuantities = [];
  var totalPrices = 0.0;

  for(i=0; i<costs.length; i++) {
    allPrices.push(parseFloat(costs[i].innerHTML.replace('$', '')));
    allQuantities.push(parseInt(quantities[i].value));
    totalPrices += (allPrices[i]*allQuantities[i]);
  }

  var parent = document.getElementsByClassName('div-total');
  var pTag = document.createElement('div');
  var text = document.createTextNode('Total price is: ' + totalPrices);

  pTag.appendChild(text);
  parent[0].insertBefore(pTag, null);
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
