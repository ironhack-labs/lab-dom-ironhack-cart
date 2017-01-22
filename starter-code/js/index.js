function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var items = document.getElementsByClassName('item');

  for(var i = 0; i < items.length; ++i){
    var pricePerUnitElem = items[i].querySelector('.price-per-unit');
    var qtyOfUnit = items[i].querySelector('.unit-qty').value;
    var itemTotalElem = items[i].querySelector('.item-total');

    console.log(items[i].id + ", ppe: " + items[i].querySelectorAll('.container')[1].textContent +
       ", qty: " +
      qtyOfUnit + ", total: $" + itemTotalElem.innerHTML);

    console.log("ppe to int: " + parseInt(pricePerUnitElem.innerHTML));
    console.log("qty to int: " + parseInt(qtyOfUnit));

    itemTotalElem.innerHTML = String(parseInt(pricePerUnitElem.innerHTML) *
      parseInt(qtyOfUnit));
  }

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
  var row = document.createElement('div');
  row.setAttribute('class', 'row item');
  row.setAttribute('id', "item-" + (++numOfItems));
  var productNameNode = createNewItem();
  var pricePerUnitNode = createNewItemPrice();
  row.appendChild(productNameNode);
  row.appendChild(pricePerUnitNode);
  var bodyElem = document.getElementsByTagName('body')[0];
  bodyElem.insertBefore(row, document.getElementById('new-item-row'));
}

function createNewItem (){
  var itemNode = document.createElement('div');
  var item = document.createElement('span');
  //var dollarTxtNode = document.createTextNode('$');
  itemNode.setAttribute('class', 'container');
  item.setAttribute('class', 'product-name');
  //itemNode.appendChild(dollarTxtNode);
  itemNode.appendChild(item);
  item.innerHTML = document.getElementById('new-product-name').value;
  return itemNode;
}

function createNewItemPrice(){
  var itemNode = document.createElement('div');
  var item = document.createElement('span');
  var dollarTxtNode = document.createTextNode('$');
  itemNode.setAttribute('class', 'container');
  item.setAttribute('class', 'price-per-unit');
  itemNode.appendChild(dollarTxtNode);
  itemNode.appendChild(item);
  item.innerHTML = document.getElementById('new-price-per-unit').value;
  return itemNode;

}

var numOfItems = 1;

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-btn');
  var createItemButton = document.getElementById('new-item-create-btn');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItemRow;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
