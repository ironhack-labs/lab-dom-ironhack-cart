function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName("product");
  
  for(var i = 0; i < products.length; i++ ) {
    var unitPrice = products[i].getElementsByClassName("unit-price")[0].getAttribute("value");
    var quantity = products[i].getElementsByClassName("quantity")[0].value;
    var totalPrice = products[i].getElementsByClassName("total-price")[0];

    totalPrice.setAttribute("value", unitPrice * quantity);
    totalPrice.innerHTML = unitPrice * quantity;
  }

  var totalPrices = document.getElementsByClassName("total-price");
  var total = 0;
  for(var j = 0; j < totalPrices.length; j++) {
    total += parseInt(totalPrices[j].getAttribute("value"));
  }
  
  document.getElementById("result").innerHTML = total;

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
