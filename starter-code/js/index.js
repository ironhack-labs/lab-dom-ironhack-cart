function deleteItem(e) {
  var btnDeleteID = e.currentTarget;
  console.log(btnDeleteID);
  var productId = btnDeleteID.parentNode.parentNode.id;
  console.log(productId);
};

function getPriceByProduct(itemNode){
  var itemTotalPrice = itemNode.getElementsByClassName('item-total-price')
  var itemPrice = itemNode.getElementsByClassName('item-price')
  var itemQuantity = itemNode.getElementsByClassName('item-quantity')
  return itemTotalPrice[0].innerHTML = itemPrice[0].innerHTML * itemQuantity[0].value
}



function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var tableItems = document.getElementsByClassName("item");
  var totalPrice = document.getElementById("total-price");
  var sum = 0;
  for(i=0;i<tableItems.length;i++){
    getPriceByProduct(tableItems[i]);
    sum += getPriceByProduct(tableItems[i]);
  }
  totalPrice.innerHTML = '$'+sum;
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

  // createItemButton.onclick = createNewItem;


  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  

};
