function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
const unit1 = document.getElementsByClassName("cost1Unit")
const numberUnits = document.getElementsByClassName("numberUnits")
const totalLabel = document.getElementsByClassName("totalValue")
for (let i = 0; i < unit1.length; i++) {
  totalLabel[i].innerHTML = unit1[i].innerHTML * numberUnits[i].valueAsNumber  
  
}

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
const newline = document.createElement("div")
const producName = document.createElement("div")
const unit1 = document.createElement("div")
const numberUnits = document.createElement("div")
const total = document.createElement("div")
const remove = document.createElement("div")
const currentLine = document.getElementsByClassName("flex-list")
document.body.insertBefore(newline,currentLine)
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
