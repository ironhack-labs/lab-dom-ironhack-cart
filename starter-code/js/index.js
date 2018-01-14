function deleteItem(e){
console.log(e);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var quantityArray = document.getElementsByClassName('quantity-input');
  var priceArray = document.getElementsByClassName('price');
  for (var i = 0; i < quantityArray.length; i++){
    document.getElementsByClassName('total-line')[i].innerText = quantityArray[i].value * priceArray[i].innerHTML;
  }
  var totalLine = document.getElementsByClassName('total-line');
  var total = document.getElementById('total').innerHTML;
  for (var i = 0; i<totalLine.length; i++){
    total = parseInt(total) + parseInt(totalLine[i].innerText);
  }
  document.getElementById('total').innerText = parseInt(total);
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
