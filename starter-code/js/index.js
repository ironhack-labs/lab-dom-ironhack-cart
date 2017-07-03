function deleteItem(e){
  var itemToDelete = e.currentTarget.parentNode.parentNode;
  var parent = e.currentTarget.parentNode.parentNode.parentNode;

  parent.removeChild(itemToDelete);

}


function getTotalPrice() {

  var itemPrice = 0;
  var itemQuantity = 0;
  var totalPrice = 0;
  var grandTotal = 0;

  numItems = document.getElementsByClassName('item-name').length - 1;

  for (i = 0; i < numItems; i++) {
    itemPrice = parseFloat(document.getElementsByClassName('item-price')[i].innerText.slice(1));
    itemQuantity = parseFloat(document.getElementsByClassName('item-quantity-input')[i].value);

    var totalPrice = itemPrice * itemQuantity;

    document.getElementsByClassName('item-total')[i].innerText = '$' + totalPrice.toFixed(2);
    grandTotal += totalPrice
  }

  document.getElementById('cart-total').innerHTML = 'Total price: $' + grandTotal.toFixed(2);
}


function createNewItemRow(itemName, itemUnitPrice){
  var parent = document.getElementById('item-list');
  var itemToCopy = document.getElementsByClassName('item-row')[0];

  var newItem = itemToCopy.cloneNode(true);
  parent.appendChild(newItem);
  numItems = document.getElementsByClassName('item-name').length - 1;

  //set name and productPrice
  document.getElementsByClassName('item-name')[numItems - 1].innerText = itemName;
  document.getElementsByClassName('item-price')[numItems - 1].innerText = '$' + itemUnitPrice.toFixed(2);

  //clear new item line
  document.getElementById('new-item-name').value = "";
  document.getElementById('new-item-price').value = "";

}

function createNewItem(){

  var itemName = document.getElementById('new-item-name').value;
  var itemPrice = parseFloat(document.getElementById('new-item-price').value.slice(1));

  createNewItemRow(itemName, itemPrice);

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
