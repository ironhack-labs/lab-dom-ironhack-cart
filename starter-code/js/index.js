function getPriceByProduct(itemNode) {
  var price = document.querySelector(itemNode).innerHTML;
  return price;
}


function createQuantityInput(itemNode) {
  var qty = document.querySelector(itemNode).value;
  return qty;
}

function getTotalPrice() {
  var price = getPriceByProduct('.price');
  var qty = createQuantityInput('.qty');
  var totalPrice = qty * price;
  document.querySelector('.total-price').innerText = totalPrice;
}



function deleteItem(e){

}


function updatePriceByProduct(productPrice, index) {}


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
  //var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  /*for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }  */
};


