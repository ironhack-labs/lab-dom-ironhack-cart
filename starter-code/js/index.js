// document.getElementById('site-header')
// document.getElementsByClassName('feature')
// document.querySelector('.features .feature')
// document.querySelectorAll('.features .feature')
// node.appendChild(child)
// node.remove()
// newElement = document.createElement('div')



/*

function deleteItem(e){

}

function getPriceByProduct(itemNode){

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
*/
// Create a click event for the Calculate Prices button
// This event will execute a function that:
  // Retrieves the unit price of the product
  // Retrieves the quantity of items desired
  // Calculates the total price based on this data
  // Updates the total price in the DOM

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
  // Create a click event for the Calculate Prices button
  calculatePriceButton.addEventListener('click', calculatePrice);

/*
  calculatePriceButton.onclick = function() {
    var priceProduct = document.getElementById('priceProduct');
    console.log(priceProduct);
  }
  */

};

function calculatePrice() {
  // Retrieves the unit price of the product
  var priceProduct = document.getElementById('priceProduct').innerHTML;
  var priceProductNumber = parseInt(priceProduct.replace(/[^\d\.]/ ,''));
  console.log(typeof priceProductNumber);
  console.log(priceProductNumber);

  // Retrieves the quantity of items desired
  var quantityItems = parseInt(document.getElementById('quantityItems').value);
  console.log(typeof quantityItems);
  //quantityItemsNumber = parseInt(quantityItems)
  console.log(quantityItems);

  // Calculates the total price based on this data
  var totalPrice = priceProductNumber * quantityItems;
  console.log(totalPrice);

  // Updates the total price in the DOM
  document.getElementById('totalPrice').innerHTML = totalPrice;
}



/*

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  */

