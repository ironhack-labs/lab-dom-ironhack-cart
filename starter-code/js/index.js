function deleteItem(e){

}

function getPriceByProduct(itemNode){
  priceProduct = parseFloat();
}

function updatePriceByProduct(productPrice, index){
  totalCost.innerText = '${finalValue}';
}

function getTotalPrice() {
  let quantity = document.querySelector(".quantity input").value;
  let priceElement = document.querySelector(".unityprice");
  let priceValue = priceElement.innerText;
  
  let finalValue = priceValue * quantity;
  console.log('finalValue', finalValue);
  let totalCost = document.querySelector(".totalcost");
  totalCost.innerText = finalValue;
  
  //updatePriceByProduct(finalValue, totalCost);
  // let quantity = document.querySelector("totalcost");
  // let total = getPriceByProduct() + createQuantityInput();
  // updatePriceByProduct(total);
}

function createQuantityInput(){
  let quantity = document.querySelector("value");
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
