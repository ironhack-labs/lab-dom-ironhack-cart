function deleteItem(e){
  var rowToDelete = e.currentTarget.parentNode;
  document.body.removeChild(rowToDelete);
  --numOfItems;
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var items = document.getElementsByClassName('item');
  var cartTotal = 0;
  for(var i = 0; i < items.length; ++i){
    var lineTotal = 0;
    var pricePerUnitElem = items[i].querySelector('.price-per-unit');
    var qtyOfUnit = items[i].querySelector('.unit-qty').value;
    var itemTotalElem = items[i].querySelector('.item-total');

    console.log(items[i].id + ", ppe: " + items[i].querySelectorAll('.container')[1].textContent +
       ", qty: " +
      qtyOfUnit + ", total: $" + itemTotalElem.innerHTML);

    console.log("ppe to int: " + parseInt(pricePerUnitElem.innerHTML));
    console.log("qty to int: " + parseInt(qtyOfUnit));

    lineTotal = parseInt(pricePerUnitElem.innerHTML *
      parseInt(qtyOfUnit));
    itemTotalElem.innerHTML = String(lineTotal);
    cartTotal += lineTotal;
  }

  document.getElementById('total-price-value').innerHTML = cartTotal;
}

function createNewItemRow(itemName, itemUnitPrice){
  if (document.getElementById('new-product-name').value === ""){
    alert("Can't add item. Name is empty!");
    return;
  }
  var row = document.createElement('div');
  row.setAttribute('class', 'row item');
  row.setAttribute('id', "item-" + (++numOfItems));
  var productNameNode = createNewItemNode();
  var pricePerUnitNode = createNewItemPriceNode();
  var quantityOfUnitNode = createNewQtyNode();
  var rowTotalNode = createNewRowTotalNode();
  var delBtnNode = createNewDeleteBtn();
  row.appendChild(productNameNode);
  row.appendChild(pricePerUnitNode);
  row.appendChild(quantityOfUnitNode);
  row.appendChild(rowTotalNode);
  row.appendChild(delBtnNode);
  var bodyElem = document.getElementsByTagName('body')[0];
  bodyElem.insertBefore(row, document.getElementById('new-item-row'));
}

function createNewItemNode (){
  var itemNode = document.createElement('div');
  var item = document.createElement('span');
  itemNode.setAttribute('class', 'container');
  item.setAttribute('class', 'product-name');
  item.innerHTML = document.getElementById('new-product-name').value;
  itemNode.appendChild(item);
  return itemNode;
}

function createNewItemPriceNode(){
  var itemNode = document.createElement('div');
  var item = document.createElement('span');
  var dollarTxtNode = document.createTextNode('$');
  itemNode.setAttribute('class', 'container');
  item.setAttribute('class', 'price-per-unit');
  itemNode.appendChild(dollarTxtNode);
  item.innerHTML = document.getElementById('new-price-per-unit').value;
  itemNode.appendChild(item);
  return itemNode;
}

function createNewQtyNode(){
  var itemNode = document.createElement('div');
  var item = document.createElement('label');
  var txtInput = document.createElement('input');
  itemNode.setAttribute('class', 'container');
  txtInput.setAttribute('class', 'unit-qty');
  txtInput.setAttribute('type', 'text');
  txtInput.setAttribute('value', '0');
  item.appendChild(document.createTextNode('QTY: '));
  item.appendChild(txtInput);
  itemNode.appendChild(item);
  return itemNode;
}

function createNewRowTotalNode(){
  var itemNode = document.createElement('div');
  var total = document.createElement('span');
  var dollarTxtNode = document.createTextNode('$');
  var defaultVal = document.createTextNode('0.00');
  itemNode.setAttribute('class', 'container');
  total.setAttribute('class', 'item-total');
  total.appendChild(defaultVal);
  itemNode.appendChild(dollarTxtNode);
  itemNode.appendChild(total);
  return itemNode;
}

function createNewDeleteBtn(){
  var delBtnNode = document.createElement('input');
  delBtnNode.setAttribute('class', 'btn btn-delete');
  delBtnNode.setAttribute('type', 'button');
  delBtnNode.setAttribute('value', 'Delete');
  delBtnNode.onclick = deleteItem;
  return delBtnNode;
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
