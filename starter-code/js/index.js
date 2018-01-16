function deleteItem(e){
  
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
var total = document.getElementsByClassName('total-cost');
// aim: alter total cost 
var singleUnit = document.getElementsByClassName('single-unit');
var nTimes = document.getElementsByClassName('quantity'); 
var grandTotal = parseInt(singleUnit[0].innerText) * parseInt(nTimes[0].value)
total[0].innerText = grandTotal.toFixed(2);
}
//aim: modify total product cost
// to do so, we must access the existing total costs in the HTML file

// by means of getElementsByClassName (array-like object of child elements)
// in order to alter existing total cost, .innerHTML = ""; (e.g., replaces content with an empty string)

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
 var newItem = document.

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
