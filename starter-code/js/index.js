
function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var totalPrice = 0;
  
  for (let i = 0; i < 2; i++) {
    if (document.getElementsByClassName("b")[i].value === "")
      totalPrice += document.getElementsByClassName("a")[i].value;
    else
      totalPrice += document.getElementsByClassName("a")[i].value * document.getElementsByClassName("b")[i].value;
  }
  
  
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
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
  document.getElementsByClassName("a")[0].value = 25;
  document.getElementsByClassName("a")[1].value = 25;

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
