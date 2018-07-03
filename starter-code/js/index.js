function deleteItem(e){
  var itemToDelete = e.currentTarget;
  var parentBtn = itemToDelete.parentElement.parentElement;
  var parentItem = parentBtn.parentElement;
  parentItem.removeChild(parentBtn);
}

function getPriceByProduct(itemNode){

  var price = itemNode.getElementsByClassName('product-price');
  price = parseFloat(price[0].innerHTML.slice(1));
  var qty = parseInt(itemNode.getElementsByTagName('input')[0].value);

  var result = parseFloat(price*qty);
  itemNode.getElementsByClassName('total-price-product')[0].innerHTML = `$${result}`;

  return result;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName('product');

  var total = 0;
  for (var i = 0; i < products.length; i++){
    total += getPriceByProduct(products[i]);

  }
  document.getElementById('final-price').innerHTML = `$${total}`;
  return total;
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

  for(var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', deleteItem);
  }

  calculatePriceButton.addEventListener('click', getTotalPrice);
  createItemButton.addEventListener('click', createNewItem);
};
