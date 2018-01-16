'use strict';


function deleteItem(event){
  event.currentTarget.parentNode.remove();
  getTotalPrice();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var productList = document.querySelectorAll('.product-item');
  var totalPriceContainer = document.getElementById('total-price');
  var totalPrice = 0;

  for(var i = 0; i < productList.length; i++){
    var productPrice = productList[i].querySelector('.product-cost');
    var productQty = productList[i].querySelector('.product-quantity');
    var productTotal = productList[i].querySelector('.product-total');

    var totalProductPrice = Math.round((Number(productPrice.textContent) * productQty.value)*100)/100;
    totalPrice += totalProductPrice;
    productTotal.innerText = totalProductPrice;
    
  }
  
  totalPriceContainer.innerText = totalPrice;

  // var productPrice = document.getElementsByClassName('product-cost');
  // var productQty = document.getElementsByClassName('product-quantity');
  // var productTotal = document.getElementsByClassName('product-total');
  // var totalPriceContainer = document.getElementById('total-price');
  // var totalPrice = 0;

  // for(var i = 0; i < productPrice.length; i++){

  //   var totalProductPrice = Math.round((Number(productPrice[i].textContent) * Number(productQty[i].value))*100)/100;
  //   totalPrice += totalProductPrice;    
  //   productTotal[i].innerHTML = totalProductPrice;
    
  // }
  
  // totalPriceContainer.innerHTML = totalPrice;
}

function createQuantityInput(){

}

function createDeleteButton(){
  var newDeleteButton = document.createElement('div');
  newDeleteButton.classList.add('btn', 'btn-delete');
  var buttonSpan = document.createElement('span');
  buttonSpan.innerText = "Delete";
  newDeleteButton.appendChild(buttonSpan);
  
}

function createQuantityNode(){
  var newQtyNode = document.createElement('div');
  newDeleteButton.classList.add('product-qty');
  var newLabel = document.createElement('label');
  newLabel.classList.add('quantity');
  newLabel.innerText = "QTY";
  var newInput = document.createElement('input');
  newInput.classList.add('product-quantity');
  newInput.setAttribute('value','0');
  newQtyNode.appendChild(newLabel);
  newQtyNode.appendChild(newInput);

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  // Product Name
  var productList = document.getElementById('product-list');
  var newProduct = document.createElement('div');
  newProduct.setAttribute('class', 'product-item');
  var newProductName = document.createElement('div');
  var productNameSpan = document.createElement('span');
  var productNameInput = document.getElementById('create-name').value;
  newProductName.setAttribute('class', 'product-name');
  productNameSpan.innerText = productNameInput;
  newProductName.appendChild(productNameSpan);

  newProduct.appendChild(newProductName);

  // createDeleteButton();
  var newDeleteButton = document.createElement('div');
  newDeleteButton.classList.add('btn', 'btn-delete');
  var buttonSpan = document.createElement('span');
  buttonSpan.innerText = "Delete";
  newDeleteButton.appendChild(buttonSpan);
  newProduct.appendChild(newDeleteButton);


  productList.appendChild(newProduct);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
