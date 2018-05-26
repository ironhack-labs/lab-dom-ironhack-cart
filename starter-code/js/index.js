// Use at least 3 onclick events
// Use at least one getElementById
// Use at least one getElementsByTagName
// Use at least one getElementsByClassName


function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var unitPrice = parseFloat(itemNode.getElementsByClassName('price')[0].innerHTML);
  var quantity = parseFloat(itemNode.getElementsByClassName('quantityValue')[0].value);
  var totalPrice = unitPrice * quantity;
  return totalPrice;
}

function getTotalPrice() {
  var listItems = document.querySelectorAll('.list-items .item');
  var total = 0;
  var totalPrice = 0;
  listItems.forEach(function(item){
    totalPrice = getPriceByProduct(item);
    console.log("totalPrice: " + totalPrice);
    item.getElementsByClassName('total')[0].innerHTML = parseFloat(totalPrice.toFixed(2));
    total += parseFloat(item.getElementsByClassName('total')[0].innerHTML);
  });
  if (totalPrice > 0) document.querySelector('#total span').innerHTML = '$' + total;
}

function deleteItem(e){
  var deletedItem = e.currentTarget.parentElement;
  var parent = deletedItem.parentElement;
  parent.removeChild(deletedItem);
}

function createItem(e){
  var name_field = e.currentTarget.parentElement.parentElement.getElementsByClassName('input-name')[0];
  var price_field = e.currentTarget.parentElement.parentElement.getElementsByClassName('input-price')[0];
  if (name_field.value != "" && price_field.value != "") createNewItemRow(name_field.value, price_field.value);
  name_field.value = "";
  price_field.value = "";
}

function createNewItemRow(itemName, itemUnitPrice){
  var li = document.createElement('li');
  li.classList.add("item");
  li.innerHTML = '<div class="name">' + itemName +'</div>' +
  '<div class="unitPrice">$<span class="price">' + itemUnitPrice + '</span></div>' +
  '<div class="amount">' +
    '<label class="quantity">QTY</label>' +
    '<input type="text" value="0" class="quantityValue"/>' +
  '</div>' +
  '<div class="totalPrice">$<span class="total">0.00</span></div>' +
  '<button class="btn btn-delete">Delete</button>';

  var newItem_form = document.getElementsByClassName('new')[0];
  document.getElementsByClassName('list-items')[0].insertBefore(li, newItem_form);
  li.getElementsByClassName('btn-delete')[0].onclick = deleteItem;
  li.getElementsByClassName('name')[0].style.width = document.querySelector('.item .name').style.width;
  li.getElementsByClassName('unitPrice')[0].style.width = document.querySelector('.item .unitPrice').style.width;
}


function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}


function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var createButton = document.getElementById('create');

  calculatePriceButton.onclick = getTotalPrice;

  for (var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  };

  // deleteButtons.onclick = deleteItem;
  createButton.onclick = createItem;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
