function deleteItem(e){

}

function getPriceByProduct(){
itemPrice = document.getElementById("item-price").innerHTML;
amount = document.getElementsByTagName("input")[0].value;
subTotal = document.getElementById("subtotal");
var sum = itemPrice * amount;
subTotal.innerHTML = sum.toFixed(2);
}

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
  var calculatePriceButton = document.getElementsByClassName('btn-success')[0];
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getPriceByProduct;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
