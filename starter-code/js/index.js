
var calculatePriceButton = document.getElementById('calc-prices-button');
var createItemButton = document.getElementById('new-item-create');
var deleteButtons = [document.getElementsByClassName('btn-delete')[0], document.getElementsByClassName('btn-delete')[1]];
var products = document.getElementsByClassName('product');

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var totalPrice = document.getElementById('total-price');
  var priceUnit = [document.getElementsByTagName('span')[2],document.getElementsByTagName('span')[8]];
  var qty = [document.getElementsByTagName('input')[0], document.getElementsByTagName('input')[1]];
  var totalValues = [document.getElementsByTagName('span')[5], document.getElementsByTagName('span')[11]]

  totalPrice.innerHTML = 0;

  for(var i = 0; i < qty.length; i++){
    totalValues[i].innerHTML = priceUnit[i].innerHTML * qty[i].value;
    totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(totalValues[i].innerHTML) 
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

calculatePriceButton.onclick = getTotalPrice;

for(var i = 0; i < deleteButtons.length ; i++){
  deleteButtons[i].onclick = function(e){
    var allProducts = document.getElementById('all-products');
    var products = document.getElementsByClassName('product');
    e.currentTarget.parentNode.parentNode.removeChild(products[deleteButtons.indexOf(e.currentTarget)]);
    deleteButtons.splice(deleteButtons.indexOf(e.currentTarget),1);
}
}