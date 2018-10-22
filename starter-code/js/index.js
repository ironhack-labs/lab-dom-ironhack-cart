//Global variables
const productPrice = document.getElementsByClassName("price");
const productQuantity = document.getElementsByClassName("quantity");
const totalPriceDisplay = document.getElementsByClassName("total");
const actualTotal = document.getElementById("calc-prices");
const totalArr = [];
let totalValue;

const deleteButtons = document.getElementsByClassName("btn-delete"); 


function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
}

function getTotalPrice() {
  totalArr.splice(0, totalArr.length)
  for(let i = 0; i < productPrice.length; i++){
    totalPriceDisplay[i].textContent = productPrice[i].textContent * productQuantity[i].value;
    totalArr.push(parseInt(totalPriceDisplay[i].textContent));
  }
  //totalPriceDisplay.innerText = productPrice * productQuantity; 
  totalValue = totalArr.reduce((acc, cv) => acc += cv);
  actualTotal.textContent = "$" + totalValue;
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

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
  console.log(" know")
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem();

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
