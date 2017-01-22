function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var rows = document.getElementsByClassName('row');

  for(var i = 0; i < rows.length; ++i){
    var pricePerUnitElem = rows[i].querySelector('.price-per-unit');
    var qtyOfUnit = rows[i].querySelector('.unit-qty').value;
    var rowTotalElem = rows[i].querySelector('.row-total');

    console.log(rows[i].id + ", ppe: " + rows[i].querySelectorAll('.container')[1].textContent +
       ", qty: " +
      qtyOfUnit + ", total: $" + rowTotalElem.innerHTML);

    console.log("ppe to int: " + parseInt(pricePerUnitElem.innerHTML));
    console.log("qty to int: " + parseInt(qtyOfUnit));

    rowTotalElem.innerHTML = String(parseInt(pricePerUnitElem.innerHTML) *
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
  row.setAttribute('class', 'row');
  row.setAttribute('id', "item-" + (++numOfItems));
  var productNameNode = createNewItem();
  var pricePerUnitNode = createNewItemPrice();
  row.appendChild(productNameNode);
  row.appendChild(pricePerUnitNode);
  var bodyElem = document.getElementsByTagName('body')[0];
  bodyElem.insertBefore(row, bodyElem.getElementsByClassName('bottom')[0]);
}

function createNewItem (){
  var itemNode = document.createElement('div');
  var item = document.createElement('span');
  //var dollarTxtNode = document.createTextNode('$');
  itemNode.setAttribute('class', 'container');
  item.setAttribute('class', 'product-name');
  //itemNode.appendChild(dollarTxtNode);
  itemNode.appendChild(item);
  item.innerHTML = "Baseball bat";
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
  item.innerHTML = "30.00";
  return itemNode;

}

var numOfItems = 1;

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItemRow;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
