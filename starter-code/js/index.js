
/*

// obtain button
let button = document.getElementById("add-item-button");
// obtain elemny list
const List = document.getElementById('item-list')
// 
let counter = 0
button.onclick = function(){
counter++
  let NewlistElement = document.createElement('li')
  NewlistElement.innerHTML = `Item number ${counter}`
  List.appendChild(NewlistElement)
    console.log("adding an element to the list");
}l
*/

let name = document.getElementById("name");
let priceProduct = document.getElementById('priceProduct');
let quantityProducts = document.getElementById('units');
let priceTotalProducts = document.getElementById('priceProducts');

console.log(name)




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
