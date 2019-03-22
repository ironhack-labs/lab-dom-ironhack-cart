function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var unitPrice = document.querySelectorAll(".unit-price")

  var quantity = document.querySelectorAll(".quantity input")

  var totalPriceDomElem = document.querySelectorAll(".total-price span")

  for (var i=0; i<unitPrice.length; i++) {
    var unitValueString = unitPrice[i].textContent

    var unitValue = parseFloat(unitValueString.substring(1, unitValueString.length-1))
    
    var unitQuantity = parseInt(quantity[i].value)
    
    var totalPrice = unitValue*unitQuantity
    
    totalPriceDomElem[i].textContent = "$" + totalPrice.toFixed(2)
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
