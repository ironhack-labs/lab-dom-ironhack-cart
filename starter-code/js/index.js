function deleteItem(e){
  getTotalPrice();
  updatePriceByProduct();
}
allTheProducts = document.getElementsByClassName('new-product');


function getPriceByProduct(itemNode){
  allTheProducts = document.getElementsByClassName('new-product');
  var price = parseInt(((allTheProducts[itemNode-1].getElementsByClassName('price'))[0].innerHTML).substring(1));
  var quantity = parseInt(((allTheProducts[itemNode-1].getElementsByClassName('quantity'))[0].value));
  (allTheProducts[itemNode-1].getElementsByClassName('sub-total'))[0].innerHTML = "$"+price*quantity;
  return price*quantity;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  productNumber = (document.getElementsByClassName('new-product')).length;
  allTheProducts = document.getElementsByClassName('new-product')
  debugger
  var total = 0;
  for (var i = 1; i<=productNumber;i++){
    total += getPriceByProduct(i)
  }
  document.getElementById('total-price').innerHTML = "Total Price: $"+total;
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
