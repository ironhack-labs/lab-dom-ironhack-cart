function deleteItem(e){
  //e.currentTarget: button
  //e.currentTarget.parentNode: div
  //e.currentTarget.parentNode.parentNode: bubbleWrapper
  //e.currentTarget.parentNode.parentNode.parentNode: products container
  var deleteItem = e.currentTarget.parentNode.parentNode;
  //remove bubbleWrapper from the products container
  deleteItem.parentNode.removeChild(deleteItem);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  //Link between classes, ids and js variables
  var price = document.getElementsByClassName("price");
  var quantity = document.getElementsByClassName("inputField");
  var totalPrice = document.getElementsByClassName("totalPriceDisplay");
  var finalPrice = document.getElementById("finalPrice");
  //totalPrice is array with the totalPrice of subarray = price*quantity
  for (var i =0; i< price.length; i++) {
    totalPrice[i].value = parseInt(price[i].innerHTML) * parseInt(quantity[i].value);
    //Update the inner value to be displayed
    totalPrice[i].innerHTML = parseInt(price[i].innerHTML) * parseInt(quantity[i].value);
  }
  //Initialize finalPrice with value = 0
  finalPrice.value = 0;
  //Add all subprices together
  for (i=0 ; i < totalPrice.length ; i++) {
    finalPrice.value += parseInt(totalPrice[i].value);
  }
  //Update the value in the DOM
  finalPrice.innerHTML = finalPrice.value;

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

function createNewItem(e){
  //createItem is at body level
  //productName.parentNode.parentNode.parentNode is at productsContainer level
  var createItem = e.currentTarget.parentNode.parentNode.parentNode;
  var productName = document.getElementById("productName");
  var productPrice = document.getElementById("productPrice");
  var rightPlace = productName.parentNode.parentNode.parentNode.parentNode.firstElementChild;
  console.log(rightPlace);
  var newProductDiv = document.createElement("div");
  newProductDiv.innerHTML = '<div id="'+productName.value+'"><div><span>'+productName.value+'</span></div><div><span class="price">'+productPrice.value+'</span></div><div><label>QTY</label><input class="inputField"></div><div><pre class="totalPriceDisplay"></pre></div><div><button class="btn-delete">Delete</button></div></div>';
  rightPlace.appendChild(newProductDiv);
  //productName.parentNode.parentNode.parentNode.parentNode.firstElementChild.appendChild("Hello");
  //console.log(productName.parentNode.parentNode.parentNode.parentNode.firstElementChild);
  var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;

  }

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
