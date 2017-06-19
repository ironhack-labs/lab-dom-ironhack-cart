
function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var unitCostCollection = document.getElementsByClassName("cost");
  var qtyCollection = document.getElementsByClassName("qty");
  var totalCostCollection = document.getElementsByClassName("totalCost");

  var globalCost = 0;

  for(var i = 0; i < unitCostCollection.length; i++){
    var unitCost = parseFloat(unitCostCollection[i].innerHTML);
    var qty = qtyCollection[i].value;
    var totalCost = parseFloat(unitCost * qty);
    globalCost += totalCost;
    totalCostCollection[i].innerHTML = totalCost;
  }
  globalCost = parseFloat(globalCost).toFixed(2)
  document.getElementsByClassName("totalPrice")[0].innerHTML = "$" + globalCost
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
  var calcButton = document.getElementsByClassName('calcButton')[0];
  /*var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;*/

    calcButton.onclick = getTotalPrice;
  };
