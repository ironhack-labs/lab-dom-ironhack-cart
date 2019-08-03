function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let elements = 2;
  let final = 0;
  for(let i = 1; i <= elements; i++) {
    let quantity = document.getElementById('quantity' + i).value;
    let cost = document.getElementById('productCost' + i).innerHTML;  
    let result = quantity * cost.slice(1);
    document.getElementById('finalPrice' + i).innerHTML = `$${result}`;
    final += result;
  }  
  document.getElementById('finalPrice').innerHTML = `$${final}`
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
