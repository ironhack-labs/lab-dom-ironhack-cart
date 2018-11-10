function deleteItem(e){
  
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var counter = 0;
  var numberOfProducts = document.getElementsByClassName('cost')

  while (counter < numberOfProducts.length) { 

  var price = Number(document.getElementsByClassName('cost')[counter].innerHTML);

  var quantity = Number(document.getElementsByClassName('quantity')[counter].value);
  var total = price*quantity;
  var totalProduct = document.getElementsByClassName('totalproduct')[counter];

  totalProduct.innerHTML = '$'+ total; 

  counter++; 
} 
  var totalPrice = document.getElementsByClassName('totalproduct');

  var totalCounter = 0;

  var totalTotal = 0;


  while (totalCounter < totalPrice.length) { 
    totalTotal = totalTotal + Number(totalPrice[totalCounter]);
    totalCounter++
  }

  var stateTotalPrice = document.getElementsByClassName('totalprice')[0];

  stateTotalPrice.innerHTML = '$' + totalTotal;
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
