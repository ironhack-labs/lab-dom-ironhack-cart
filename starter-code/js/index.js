function calculatePriceButton(){
  
  var getPriceID = document.getElementById('cost-of-item'); // Gets the priceID
  var itemPrice = getPriceID.innerHTML; // Gets the price from the ID.
  itemPrice = itemPrice.replace("$",""); // Removes the $ from the price.
  itemPrice = Number(itemPrice); // Turns price into a #.

  var quantityInput = document.getElementById('qty-input').value;  // Grabs user input for quantity.
  quantityInput = Number(quantityInput); // Turns quantity into a #.

  var inputTotal = itemPrice * quantityInput; // inputTotal is the item price multiplied by quantity.

  var totalPrice = document.getElementById('total-price'); 
  var currentQtyTotal = totalPrice.innerHTML; // Gets the totalPrice. 

  currentQtyTotal = currentQtyTotal.replace("$",""); // Removes the $ from the total.
  currentQtyTotal = Number(currentQtyTotal); // Turns currentQtyTotal into a #.

  var updatedQtyTotal = currentQtyTotal + inputTotal;

  return document.getElementById('total-price').innerHTML = "$" + updatedQtyTotal;
};


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
