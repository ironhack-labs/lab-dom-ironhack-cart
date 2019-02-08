function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){
  
}

function getTotalPrice() {
  // DGG: Para obtener las cantidades
  const qt = document.getElementsByTagName('input');
  var arrQty = [].slice.call(qt).map( input => parseInt(input.value) );
  console.log(arrQty);

  // DGG: Para obtener los precios
  const priceX = document.getElementsByClassName('product-price');
  var arrPrice = [].slice.call(priceX).map( price => parseFloat( price.textContent.substr(1) ) );
  console.log(arrPrice);

  // DGG: Para actualizar precios
  var totalPriceArray = [];
  for (var i= 0; i < arrPrice.length; i++) {
    totalPriceArray[i] = arrPrice[i] * arrQty[i];
  }
  console.log(totalPriceArray);
  
  const spanTotalParcial = document.getElementsByClassName('total-price');
  var arrTP = [].slice.call(spanTotalParcial);

  for (var i= 0; i < totalPriceArray.length; i++) {
    spanTotalParcial[i].textContent = '$' + totalPriceArray[i].toFixed(2);
  }
  console.log(totalPriceArray);

  

  
  
  
  /*var qty = document.getElementsByTagName('input')[0];
  var price = document.getElementsByClassName('product-price')[0].textContent;
  var a = price.substr(1);
  var totalPrice = a * qty.value;
  var spanTotal = document.getElementsByClassName('total-price');
  //spanTotal[0].textContent = '$' + totalPrice.toFixed(2);

  var qty = document.getElementsByTagName('input')[1];
  var price = document.getElementsByClassName('product-price')[1].textContent;
  var a = price.substr(1);
  var totalPrice = a * qty.value;
  //spanTotal[1].textContent = '$' + totalPrice.toFixed(2);*/
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
  //var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  /*for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }*/
};
