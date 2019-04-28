function deleteItem(e){
  const dele = event.currentTarget.parentNode.parentNode.remove()
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
console.log({totalLabel})
let prize = 0;
for(let i = 0;i < totalLabel.length;i++){
prize += parseInt(totalLabel[i].innerHTML)
}
const finalPrize = document.getElementById("finalPrize")
finalPrize.innerHTML = prize

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
 // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
