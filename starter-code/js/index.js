function deleteItem(e){
  var deleteItem = e.currentTarget.parentNode.parentNode;
  var container = deleteItem.parentNode;
  container.removeChild(deleteItem);
}

/*function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}*/

function getTotalPrice() {
  var price = document.getElementsByClassName('price');
  var quantity = document.getElementsByClassName('quantity');

  var subtotal = document.getElementsByClassName('subtotal');
  var total = parseFloat(document.getElementById('total').innerHTML);

  for(var i = 0; i<subtotal.length; i++){
    subtotal[i].innerHTML = parseFloat(price[i].innerHTML)*parseFloat(quantity[i].value);
    total += parseFloat(subtotal[i].innerHTML);
  }
  document.getElementById('total').innerHTML = total;
}


function createQuantityInput(){

}

function createDeleteButton(){
  var deleteButton = document.createElement('button');
  deleteButton.setAttribute('class','btn');
  deleteButton.setAttribute('class','btn-delete');
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  var itemName = document.getElementById('item-name').value;
  var itemPrice = document.getElementById('item-price').value;
  console.log(itemName);
  console.log(itemPrice);
  createNewItemRow(itemName, itemPrice);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.addEventListener('click', getTotalPrice);
  createItemButton.addEventListener('click', createNewItem);

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener('click', deleteItem);
  }
};
