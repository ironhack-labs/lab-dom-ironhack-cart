function deleteItem(e){  
   var currentItem = e.currentTarget.parentNode.parentNode;
   currentItem.parentNode.removeChild(currentItem);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() { 

  var unitPrice  = document.getElementsByClassName('unit-price');
  var qtyProduct = document.getElementsByTagName('input');
  var totalPrice = document.getElementsByClassName('total-price');  
  var totalToPay = document.getElementsByClassName('total-to-pay');

  

  for(i = 0; i < totalPrice.length; i++) {
    var result  = unitPrice[i].innerText * qtyProduct[i].value;
    totalPrice[i].innerText = result;
  }
  
  var acum = 0;
  for (j = 0 ; j < totalPrice.length; j++) {    
    acum += parseInt(totalPrice[j].innerText);    
  }

  totalToPay[0].innerText = acum;
  
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
 // Work in progress
  
  document.getElementById('new-item-create').parentNode.parentNode.appendChild(document.createElement('div'))  
}

function createNewItem(){
  var itemName      = document.getElementsByClassName('newProductName');
  var itemUnitPrice = document.getElementsByClassName('newProductPrice');  

  createNewItemRow(itemName[0].value, itemUnitPrice[0].value);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  calculatePriceButton.addEventListener('click',getTotalPrice);
  createItemButton.addEventListener('click',createNewItem);

  for(var i = 0; i < deleteButtons.length ; i++){
    // deleteButtons[i].onclick = deleteItem;
    deleteButtons[i].addEventListener('click',deleteItem);
  }
};
