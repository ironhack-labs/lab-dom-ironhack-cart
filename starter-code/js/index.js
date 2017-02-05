function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}
//get array of elements by tag name and iterate through it
function getTotalPrice() {
  var prices = document.querySelectorAll('.col-xs-2');
  console.log(prices[0]);
  var quantities = document.querySelectorAll('.quantity');
  console.log(quantities[0]);
  var total = document.querySelectorAll('.col-xs-4');
  console.log(total[0]);

  prices.forEach(function (price, i) {
    if (quantities[i].value > 0) {
      total[i].innerHTML = "$" + (quantities[i].value * prices[i].innerHTML).toFixed(2);
    }
  });
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
