function deleteItem(e){

}

function getPriceByProduct(){
  var unit = document.getElementsByClassName('qty-input');
  var price = document.getElementsByClassName('price');
  var totalPrice = document.getElementsByClassName('total-price');
  for (var i = 0; i < price.length; i++) {
    var qty = unit[i].value;
    var pr = parseInt(price[i].innerHTML.slice(1));
    totalPrice[i].innerHTML = "$" + pr * qty;
  }
}



function updatePriceByProduct(productPrice, index){ 

}

function getTotalPrice() {
  var totalPrice = document.getElementsByClassName('total-price');
  var sum = 0;
  for (var i = 0; i < totalPrice.length; i++) {
    var tP = parseInt(totalPrice[i].innerHTML.slice(1));
    sum = tP + sum;
  }
  var calc = document.getElementById("result");
  calc.innerHTML = sum;

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
 /* createItemButton.onclick = createNewItem;   */

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
//
