function deleteItem(e){

}

function getPriceByProduct(item){
  return parseFloat(item.getElementsByClassName('cost')[0].innerHTML);
}

function updatePriceByProduct(productPrice, product){
  var itemQuantity = product.getElementsByClassName('QTY')[0].value;
  product.getElementsByClassName('totalcost')[0].innerHTML = productPrice * itemQuantity + " $";
  return productPrice * itemQuantity;
}

function getTotalPrice() {
  var items = document.getElementsByTagName('article');
  var totalPrices = 0;

  for (var i=0; i<items.length; i++) {
    var itemCostNumber = getPriceByProduct(items[i]);
    var price = updatePriceByProduct(itemCostNumber, items[i]);
    totalPrices = totalPrices + price;
    document.getElementById('final_price').innerHTML = totalPrices + ' $'; 
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
