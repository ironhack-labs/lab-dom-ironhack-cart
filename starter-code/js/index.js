


function deleteItem(e){

}

function getPriceByProduct(){
  let productPrice = document.querySelector('.price span').innerHTML; // select the class name and the span
  let quantity = document.getElementById('quantity-value').value;
  let proPrice = parseFloat(productPrice.slice(2));
  //console.log(proPrice);
  let arrPrice = [];
  let arrQuantity = [];
  arrPrice.push(proPrice);
  arrQuantity.push(Number(quantity));
  let endPrice = arrPrice * arrQuantity;
  return endPrice.toFixed(2); 
}

function updatePriceByProduct(){
  let price = getPriceByProduct();
  const priceSpan = document.getElementById('endPrice');
  priceSpan.innerText = '';
  let span = document.createElement('span');
  span.innerText = '$ ' + price;
  priceSpan.appendChild(span);
}

function getTotalPrice() {
  getPriceByProduct();
  updatePriceByProduct();
  

}

function createQuantityInput(){
  
}
// to change the string price to a number , erase the $ and the .

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
  var calculatePriceButton = document.getElementById('calc-btn');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
