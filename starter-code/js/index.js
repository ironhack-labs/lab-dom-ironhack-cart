function calculatePrice(){
  let numberOfProducts = document.getElementsByClassName('product').length;
  let totalPrice = 0;
  
  for(let i = 0; i < numberOfProducts; i++){
    var itemQuantity = document.getElementsByTagName('input')[i].value;
    var itemPrice = document.getElementsByClassName('unitPrice')[i].innerText;
    var productPrice = document.getElementsByClassName('productPrice')[i];
    productPrice.innerHTML = parseFloat(itemQuantity * itemPrice);
    totalPrice += parseFloat(productPrice.innerHTML);
  }
  document.getElementById('totalPrice').innerHTML = totalPrice;
} 

function deleteItem(e){
  var clickedDelButton = e.currentTarget;
  var toBeDeleted = clickedDelButton.parentNode.parentNode;
  var master = toBeDeleted.parentNode;
  master.removeChild(toBeDeleted);
}

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

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

function createNewItem(e){
  var creatorRow = document.getElementById('creatorRow');
  var master = creatorRow.parentNode;
  var newItem = document.createElement('div');
  master.insertBefore(newItem, creatorRow);

  var newItemName = document.createElement('div');
  var newItemPrice = document.createElement('div');
  var newItemQuantity = document.createElement('div');
  var newItemTotal = document.createElement('div');
  var newItemDelete = document.createElement('div');
  
  var adj1 = document.createElement('span');
  adj1.innerHTML = ' ';
  var adj2 = document.createElement('span');
  adj2.innerHTML = ' ';
  var adj3 = document.createElement('span');
  adj3.innerHTML = ' ';
  var adj4 = document.createElement('span');
  adj4.innerHTML = ' ';
  var adj5 = document.createElement('span');
  adj5.innerHTML = ' ';

  newItem.appendChild(newItemName);
  newItem.appendChild(adj1);
  newItem.appendChild(newItemPrice);
  newItem.appendChild(adj2);
  newItem.appendChild(newItemQuantity);
  newItem.appendChild(adj4);
  newItem.appendChild(newItemTotal);
  newItem.appendChild(adj5);
  newItem.appendChild(newItemDelete);
  
  newItem.className = 'product';
  newItemName.className = 'product-component';
  newItemPrice.className = 'product-component';
  newItemQuantity.className = 'product-component';
  newItemTotal.className = 'product-component';
  newItemDelete.className = 'product-component';

  var NewItemNameText = document.createElement('span');
  newItemName.appendChild(NewItemNameText);
  NewItemNameText.innerHTML = document.getElementById('createName').value;

  var sign1 = document.createElement('span');
  var newItemUnitPrice = document.createElement('span');
  newItemPrice.appendChild(sign1);
  newItemPrice.appendChild(newItemUnitPrice);
  newItemUnitPrice.className = 'unitPrice';
  sign1.innerHTML = '$';
  newItemUnitPrice.innerHTML = document.getElementById('createPrice').value;
  
  var newQuantityInput = document.createElement('input');
  var newQuantityLabel = document.createElement('label');
  newItemQuantity.appendChild(newQuantityLabel);
  newItemQuantity.appendChild(adj3);
  newItemQuantity.appendChild(newQuantityInput);
  newQuantityInput.type = 'number';
  newQuantityLabel.innerHTML = 'QTY';
  
  var sign2 = document.createElement('span');
  var newProductPrice = document.createElement('span');
  newItemTotal.appendChild(sign2);
  newItemTotal.appendChild(newProductPrice);
  newProductPrice.className = 'productPrice';
  sign2.innerHTML = '$';
  newProductPrice.innerHTML = '0.00';
  
  var newDelButton = document.createElement('button');
  newItemDelete.appendChild(newDelButton);
  newDelButton.className = 'btn btn-delete';
  newDelButton.innerHTML = 'Delete';

  var deleteButtons = document.getElementsByClassName('btn-delete')
  for(var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};