function deleteItem(e){
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

function getPriceByProduct(itemNode){
  var ietmPrice =   document.getElementById("cost-unit");
  var items = document.getElementsByTagName('input')[0]
  if (items.value.length == 0){
  console.log("Enter item quantity")  
  } else {
  return items.value.length * itemPrice;
}    
};
console.log(getTotalPrice());


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
