function deleteItem(e){

}

function getPriceByProduct(itemNode){

  var prices = document.getElementsByClassName('price');
  var price1 = prices[0].innerHTML;
  var price2 = prices[1].innerHTML;
  var priceNumber1 = price1.substring(1);
  var priceNumber2 = price2.substring(1);
  var input1 = document.getElementsByTagName('input')[0];
  var input2 =document.getElementsByTagName('input')[2];  
  var totalPrice1 = parseInt(priceNumber1) * input1.value;
  var totalPrice2 = parseInt(priceNumber2) * input2.value;
  var totalSum = document.getElementsByClassName('totalSumClass');
  var sum1 = totalSum[0];
  var sum2 = totalSum[1];
  sum1.innerHTML = '$' + totalPrice1;
  sum2.innerHTML = '$' + totalPrice2;
  var sumPrices = totalPrice1 + totalPrice2;
  return sumPrices;

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

  var getProductPrice = document.getElementById('calc-prices-button');

//var calculatePriceButton = document.getElementById('calc-prices-button');
 // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  getProductPrice.onclick = getPriceByProduct;

//  calculatePriceButton.onclick = getTotalPrice;
 // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

