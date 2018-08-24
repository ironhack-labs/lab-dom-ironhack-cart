function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  console.log('entra')
  var prices = document.getElementById("calculate-prices");
  
  var cost = document.getElementById("cost");
  cost.innerHTML.replace(0, "");
  cost = cost.innerHTML.replace('$', "");
  var quantity =document.getElementById("QTY");
  prices.innerHTML = "$" + (parseFloat(cost) * quantity.value).toFixed(2);

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

  calculatePriceButton.onclick = function(){
    getTotalPrice()
  };
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
