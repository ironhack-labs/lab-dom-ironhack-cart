function deleteItem(e){

}


function getPriceByProduct(itemNode){
  return itemNode[0].innerText;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var itemPriceNode = document.getElementsByClassName("item-price");
  var itemPrice = getPriceByProduct(itemPriceNode);
  var itemNum = document.getElementsByTagName('input');
  var totalPrice = 0;
  for(var i = 0; i < itemNum.length; i++){
    totalPrice = itemPrice * itemNum[i].value;
  }

  var updatePrice = document.getElementById('total').innerHTML = '$' + totalPrice;
  // return totalPrice;
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

  calculatePriceButton.addEventListener("click", getTotalPrice);

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
