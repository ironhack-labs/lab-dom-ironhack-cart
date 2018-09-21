// Create a click event for the Calculate Prices button
// This event will execute a function that:
// Retrieves the unit price of the product
// Retrieves the quantity of items desired
// Calculates the total price based on this data
// Updates the total price in the DOM




function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var unitPrice=document.getElementById('unit-price');
  var qty = document.getElementsByTagName('input')[0];
  var totalPrice=document.getElementById("total-price");
  //  console.log(unitPrice.innerText);
  // console.log(qty.value);


  var unitPriceNum = parseFloat(unitPrice.innerText.substr(1));
  // console.log(unitPriceNum);

  totalPrice.innerHTML="$"+(unitPriceNum*qty.value);
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
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
