function deleteItem(e){

}

function getPriceByProduct(itemNode)  {
  return parseInt(itemNode.slice(1));
}

function updatePriceByProduct(productPrice, index){
  return productPrice * index;
}

function getTotalPrice(arrOfPricesPerItem) {
  return arrOfPricesPerItem.reduce((accum, curr) => accum + curr, 0);
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
  let fixedPriceString = document.getElementById("fixedPrize").textContent.replace(/\D/g,'').slice(0, -2);
  let fixedPriceInteger = parseInt(fixedPriceString);

  let totalPrice = document.getElementById(fixedPriceString);

  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = function() {

    let quantityString = document.getElementById("quantity").value;
    let quantityInteger = parseInt(quantityString);

    let titalPriceResult = getTotalPrice(fixedPriceInteger, quantityInteger);
    totalPrice.innerHTML = algo;
  }
  
  getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(let i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
