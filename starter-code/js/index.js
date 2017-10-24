function deleteItem(e){
  var deleteBtn = document.querySelector('.btn-delete');
  var totPrice = document.querySelector('.total-price');
  e = 0.00;
  deleteBtn.onclick = function () {
  // console.log(totPrice.innerHTML=e);
  return totPrice.innerHTML = e;
 };
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}



 function getTotalPrice() {
  var price = document.querySelector('.price');
  var priceNumber = parseInt(price.innerHTML);
  var inputValue = document.querySelector('.quantity').value;
  var priceCalc = (priceNumber * inputValue);
  return priceCalc;
}

var totalButton = document.querySelector('.btn-success');
totalButton.onclick = function () {
  var totalPrice = document.querySelector('.total-price');
  return totalPrice.innerHTML = getTotalPrice();
};

// var totalPrice = document.querySelector('.total-price');
// console.log(totalPrice.innerHTML);


  // console.log(priceNumber * quantityNumber);
//x}

function createQuantityInput(){
  var inputValue = document.querySelector('.quantity').value;
  // console.log(inputValue);
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
  // var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
