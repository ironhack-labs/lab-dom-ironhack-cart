function deleteItem(e){

}

function getPriceByProduct(itemNode){

  var button = document.getElementsByClassName('btn-success')[0];

  button.onclick = function(){
    var unitPrice = document.getElementById("product-price-unit").innerHTML;
    var qty = document.getElementById("qty").value;
    var totalPrice = document.getElementById("total-price");
    var total = unitPrice * qty;
    totalPrice.innerHTML = total;

  }

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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
