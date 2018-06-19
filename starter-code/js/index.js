function main () {
  var button = document.getElementById("calculate");
  var x = 0;
  var itClicks = function (){
    var div = document.querySelector("#total-div");
    var deleter = document.querySelector("#total");
    console.log("getting sum");
    var input = document.querySelector("#input");
    var total = document.createElement('span');
    total.innerText = input.value*25.00;
    x++;
    if (x === 1) {
      div.removeChild(deleter);
    }
    
    div.appendChild(total);
  }
  button.addEventListener('click',itClicks);
}

window.addEventListener('load', main);
/*
function deleteItem(){

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
*/
