function deleteItem(e){


}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var product = document.getElementById("units")
  console.log(product);
  var cost = document.getElementsByClassName("costOfUnit")
  console.log(cost);
  var calculatePriceButton = document.getElementsByClassName("btn-success")
  console.log(calculatePriceButton);
  calculatePriceButton.onclick = function {
  for (var i = 0; i<getTotalPrice; i++) {
    var total = product*cost
   }
  }
  return total
};

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
