function calculatePrice(){
  var money = document.getElementById('productPrice').innerHTML;
  var quantity = document.getElementById('quantity').value;
  var resultado = money*quantity;
  document.getElementById('total').innerHTML=resultado;
}

function deleteItem(){
  var remove = document.getElementById('total');
  total.removeAttribute('id')
}

/*
function updatePriceByProduct(productPrice, index){
  console.log(index * productPrice);
  return  index * productPrice;
}

*/






/*
function deleteItem(e){

}
function getPriceByProduct(itemNode){

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
*/
