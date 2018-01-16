
function deleteItem(e){
  e.target.parentElement.parentElement.remove();

}

function getPriceByProduct(itemNode){
  // var unitPrice = document.querySelectorAll('.unit-price')[i].innerText;

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var len = document.querySelectorAll('.unit-price').length;

  var total = 0;
  for (var i = 0; i < len; i++) {
    var unitPrice = document.querySelectorAll('.unit-price')[i].innerText;
    var numberItems = Number(document.querySelectorAll('.number-Items')[i].value);
    var totalItem = Number(unitPrice.slice(1)) * numberItems;
    total += totalItem;
    document.querySelectorAll('.total')[i].innerText = "$" + totalItem.toFixed(2);
  }

  document.querySelector('.totalTotal').innerText = "$" + total.toFixed(2);

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
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var inputs = document.querySelectorAll('.number-Items').value;
  
  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
