function deleteItem(e){
  var currentProduct = e.currentTarget.parentNode.parentNode;
  var docBody = document.getElementsByTagName('body')[0];
  docBody.removeChild(currentProduct);
}

function getPriceByProduct(itemNode){
  var prices = document.getElementsByClassName('product-cost');
  var parsedPrice = parseFloat(prices[itemNode].innerText.replace('$', ''));
  return parsedPrice;
}

function updatePriceByProduct(productPrice, index){
  var inputTexts = document.getElementsByTagName('input');
  var quantity = parseInt(inputTexts[index].value);
  var productTotals = document.getElementsByClassName("product-total");
  var totalPrice = quantity * productPrice;
  
  productTotals[index].innerHTML = totalPrice;
}

function getTotalPrice() {
  var productArray = document.getElementsByClassName('product-name');

  for (i=0; i<productArray.length; i++) {
    var indivPrice = getPriceByProduct(i);
    updatePriceByProduct(indivPrice,i);
  }

  var productTotals = document.getElementsByClassName('product-total');
  var priceArray =[];
  for (i=0; i<productTotals.length; i++) {
    parseTotal = parseFloat(productTotals[i].innerText);
    priceArray.push(parseTotal);
  }

  var sumTotal = 0;
  for (i=0; i<priceArray.length; i++) {
    sumTotal += priceArray[i];
  }
  sumTotal.toString();
  var h2 = document.getElementsByTagName('h2');
  var newNode = '$' + sumTotal;
  var text = document.createTextNode(newNode);
  h2[0].appendChild(text);
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
  var productWrapper = document.createElement('div');
  productWrapper.className = 'product-wrapper';
  var docBody = document.getElementsByTagName('body')[0];
  var newWrapper = document.getElementsByClassName('new-product-wrapper')[0];
  docBody.insertBefore(productWrapper, newWrapper);


}

function createNewItem(){
  var userProduct = document.getElementById('user-product').value;
  var userPrice = document.getElementById('user-price').value;


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
