function deleteItem(e){

}

//Just getting the item price
function getPriceByProduct(itemNode){
  var itemUnit = document.getElementsByClassName('item-price');
  var itemUnitPrice = itemUnit[0].childNodes[itemNode].innerHTML;
  return itemUnitPrice
}


document.addEventListener('keyup', getUnitsByProduct)

function getUnitsByProduct() {
  var qty = document.getElementById('qty');
    return console.log(parseInt(qty.value));
}

totalPrice[0].innerHTML = '$<span>' + getPriceByProduct(1) * getUnitsByProduct(0) +'</span>'

var totalPrice = document.getElementsByClassName('total-price');
//var totalUnitPrice = totalPrice[0].childNodes[1].innerText;



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
