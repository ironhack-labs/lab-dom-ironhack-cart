function deleteItem(e){
  var product = event.currentTarget.parentNode;
  var allProducts = product.parentNode;
  allProducts.removeChild(product);
  getTotalPrice();
  console.log('hola');
}

function getPriceByProduct(itemNode){



}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var allProducts = document.getElementsByClassName('product');
  var totalPriceSum = 0;
    for(i=0; i<=allProducts.length-1; i++) {
    var quantity = document.getElementsByTagName('input')[i].value;
    var productCost = document.getElementsByClassName('product-cost')[i].innerHTML;
    var totalPrice = quantity*productCost;
    totalPriceSum += totalPrice;
    document.getElementsByClassName('total-price')[i].innerHTML = totalPrice;
    }
  document.getElementsByClassName('total-price-sum')[0].innerHTML = totalPriceSum;
}

function createQuantityNode(e){
  var quantityDiv = document.createElement('div');
  quantityDiv.className = 'quantity';
  var quantityLabel = document.createElement('label');
  quantityLabel.innerHTML = 'QTY';
  quantityDiv.appendChild(quantityLabel);
  var currentRow = e;
  currentRow.appendChild(quantityDiv);
  createQuantityInput(quantityDiv);

}

function createQuantityInput(e){
  var quantityInput = document.createElement('input');
  var quantityNode = e;
  quantityNode.appendChild(quantityInput);
}

function createDeleteButton(e){
  var button = document.createElement('button');
  button.className = 'btn-delete';
  button.innerHTML = 'DELETE';
var currentRow = e;
currentRow.appendChild(button);


}

function createItemNode(dataType, itemData){

}
function createTotalPriceNode (e){
  var totalPriceNode = document.createElement('div');
  var totalPriceSpan1 = document.createElement('span');
  totalPriceSpan1.className = 'total-price';
  totalPriceSpan1.innerHTML = '0';
  var totalPriceSpan2 = document.createElement('span');
  totalPriceSpan2.innerHTML = '€';
  totalPriceNode.appendChild(totalPriceSpan1);
  totalPriceNode.appendChild(totalPriceSpan2);
  var currentRow = e;
  currentRow.appendChild(totalPriceNode);

}

function createNewItemRow(itemName, itemUnitPrice){
  if (itemName && itemUnitPrice) {
    var newItemRow = document.createElement('div');
    newItemRow.className = 'product';
    var divName = document.createElement('div');
    divName.className = 'product-name';
    divName.innerHTML = itemName;
    var divPrice = document.createElement('div');
    var spanPrice1 = document.createElement('span');
    spanPrice1.className = 'product-cost';
    spanPrice1.innerHTML = itemUnitPrice;
    var spanPrice2 = document.createElement('span');
    spanPrice2.innerHTML = '€';

    var allProducts = document.getElementById('all-products');
    allProducts.appendChild(newItemRow);
    newItemRow.appendChild(divName);
    newItemRow.appendChild(divPrice);
    divPrice.appendChild(spanPrice1);
    divPrice.appendChild(spanPrice2);

    createQuantityNode(newItemRow);
    createTotalPriceNode(newItemRow);
    createDeleteButton(newItemRow);
  }
}

function createNewItem(){
var itemUnitPrice = document.getElementById('create-product-cost').value;
var itemName = document.getElementById('create-product-name').value;
createNewItemRow(itemName, itemUnitPrice);

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var createItemButton = document.getElementById('create-item-button');

  calculatePriceButton.onclick = getTotalPrice;

  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}
