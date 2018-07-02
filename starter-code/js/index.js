function deleteItem(e){
  var itemToDelete = e.target.parentElement.parentElement;
  var parentOfTheItem = itemToDelete.parentElement;
  
  parentOfTheItem.removeChild(itemToDelete);
}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){
  
}

function getTotalPrice() {
  var unitCosts = document.getElementsByClassName('unit-cost');
  var quantities = document.getElementsByClassName('quantity');
  var totalPrices = document.getElementsByClassName('total-price');
  var totalPriceElement = document.getElementById('total-price');
  var totalPrice = 0;

  for (i = 0; i <= unitCosts.length - 1; i++) {
    var unitCost = unitCosts[i].innerText.replace('$','');
    var quantity = quantities[i].value;
    var total = unitCost * quantity;
  
    totalPrices[i].innerText = '$' + total.toFixed(2);  
    totalPrice += total;
  }

  totalPriceElement.innerText = '$' + totalPrice.toFixed(2);
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

function createNewItem(e){
  // var copyElement = e.target.parentElement.parentElement.previousElementSibling.cloneNode();
  // console.log(copyElement);
  // console.log(copyElement.parentElement);
  // var product = e.target.parentElement.parentElement.previousElementSibling.parentElement.appendChild(copyElement);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.addEventListener("click", getTotalPrice);
  createItemButton.addEventListener("click", createNewItem);

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener("click", deleteItem);
  }
};
