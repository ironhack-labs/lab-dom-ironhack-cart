function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var price = document.querySelectorAll("#price")[0].innerHTML;
    price = parseFloat(price.split("$")[1]); //
    console.log(price);
    

  var quantity = document.querySelectorAll('.quantity')[0].value;
    quantity = parseFloat(quantity);

  var totalPrice = price*quantity;
  var result = document.querySelectorAll('.result')[0].innerHTML = "$"+totalPrice;

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
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
