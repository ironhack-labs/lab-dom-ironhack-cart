function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var price = document.getElementById("price").getAttribute("value");
  console.log(price);
  var quantity = document.getElementById("quantity").value;
  console.log(quantity);
  quantity=parseInt(quantity);
  var totalPrice = document.getElementById("total-price")
  totalPrice.innerHTML = price*quantity;
totalPrice=parseFloat(totalPrice.innerHTML);
  console.log(totalPrice);


  
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
  console.log(calculatePriceButton);
  calculatePriceButton.onclick = getTotalPrice;

  var createItemButton = document.getElementById('new-item-create');
  
  createItemButton.onclick = createNewItem;

  var deleteButtons = document.getElementsByClassName('btn-delete');

  

  

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

var price;
function generateRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

generateRandomColor();
console.log(generateRandomColor());