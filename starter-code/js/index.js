function deleteItem(e){
  var deleteButtons = document.getElementsByClassName('btn-delete');
   if (createQuantityInput() > 0) {
     createQuantityInput() = 0;
   }

}

function getPriceByProduct(itemNode){
  var getPrice = document.getElementsByClassName('price');
  return parseInt(getPrice[0].innerHTML);

}


function updatePriceByProduct(productPrice, index){
  var subPrice = getPriceByProduct() * createQuantityInput();
  var getZero = document.getElementsByClassName('subTotal');
  getZero[0].innerHTML = subPrice;
  return subPrice;
}

function getTotalPrice() {
  var totalPrice = document.getElementsByClassName('totalNumber');
  totalPrice[0].innerHTML = updatePriceByProduct();
}

function createQuantityInput(){
var getItem = document.getElementsByTagName('input');
 return parseInt(getItem[0].value);
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
  deleteButtons.onclick = deleteItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
