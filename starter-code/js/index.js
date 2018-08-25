function deleteItem(e){
  var deleteButtons = document.getElementsByClassName('btn-delete');
   if (createQuantityInput() > 0) {
     createQuantityInput() = 0;
   }

}

function getPriceByProduct(qty, price, subT){
  var subTotalValue = parseInt(qty.value)*parseInt(price.innerHTML.slice(1))
  subT.innerHTML = '$' + subTotalValue;
  return subTotalValue;
  // almacena el valor por la cantidad, sustituye el cero por el resultado y retorna ese resultado también
}


function updatePriceByProduct(productPrice, index){
  var subPrice = "$" + getPriceByProduct() * createQuantityInput();
  var getZero = document.getElementsByClassName('subTotal');
  getZero[0].innerHTML = subPrice;
  return subPrice;
  // multiplica el precio por la cantidad y nos da el SUBTOTAL
}

function getTotalPrice() {
  var qtyItems = document.getElementsByClassName('quantity');
  var priceItems = document.getElementsByClassName('price');
  var subTotalItems = document.getElementsByClassName('subTotal');
  var totalPrice = 0;
  for(var i=0; i < qtyItems.length; i++) {
    totalPrice += getPriceByProduct(qtyItems[i], priceItems[i], subTotalItems[i]);
  } 
  document.getElementById('totalNumber').innerHTML = '$' + totalPrice;
  // recorre cada elemento, almacena los datos en totalPrice y sustituye
  // la suma en totalPrice
}

function createQuantityInput(){
var getItem = document.getElementsByTagName('input');
 return parseInt(getItem[0].value);
 // donde introducimos la cantidad
}

function createDeleteButton(){
  
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(item, price){
  var itemTitle = document.getElementById('new-item-name');
  //var itemPrice = document.getElementById('new-item-price');
  var newItem = document.createElement('div');
  
  itemTitle.appendChild(newItem);
  document.getElementById('new-item-name').appendChild(itemTitle);

}




window.onload = function(){

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  //deleteButtons.onclick = deleteItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
