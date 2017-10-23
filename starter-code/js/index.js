function deleteItem(e){
  let item = e.currentTarget.parentNode.parentNode;
  let container = item.parentNode;
  container.removeChild(item);
}

function getPriceByProduct(itemNode){
  for (var i = 0; i < itemNode.length; i++){
    let product = itemNode[i];
    let price = product.children[1].innerText.replace("$","");
        price = parseFloat(price);
    let quantity = product.children[2].children[1].value;
        quantity = parseInt(quantity);
    let priceByProduct = price * quantity;
        priceByProduct = "$" + priceByProduct;
    updatePriceByProduct(priceByProduct, i)
  }
}

function updatePriceByProduct(productPrice, index){
  let updatePrice = document.getElementsByClassName('total')[index]
  updatePrice.innerText = productPrice;
}


function getTotalPrice(){
  let product = document.getElementsByClassName('item-nodo');
  getPriceByProduct(product);
  let totalsPrice = document.getElementsByClassName('total');
  let sumTotal = 0;
  for(var i = 0; i < totalsPrice.length; i++){
    let price = totalsPrice[i].innerText.replace("$","");
        price = parseFloat(price);
     sumTotal +=  price;
  }
  document.getElementById('sum-total').innerText = "$" + sumTotal;
}

function createQuantityInput(){
  var imputNode = document.createElement('input');
  return imputNode
}

function createQuantityLabel(){
  var labelNode = document.createElement('label');
  var dataNodeQuantity = document.createTextNode('QTY');
  labelNode.appendChild(dataNodeQuantity);
  return labelNode
}

function createQuantityNode(){
  var itemLabelNode = createQuantityLabel();
  var itemInputNode = createQuantityInput();
  var itemNode = document.createElement('div');

  itemNode.className += "product"
  itemNode.appendChild(itemLabelNode);
  itemNode.appendChild(itemInputNode);
  return itemNode
}



function createTotalPriceNode(){
  var itemNode = document.createElement('div');
  var totalsPriceNode = document.createElement('span');
  totalsPriceNode.className += "total"
  var dataTotalNode = document.createTextNode('$0.00');

  itemNode.appendChild(totalsPriceNode);
  totalsPriceNode.appendChild(dataTotalNode);
  return itemNode
}

function createDeleteButton(){
  var itemNode = document.createElement('div');
  var itemButton = document.createElement('button');
  itemButton.onclick = deleteItem;
  var dataButtonNode = document.createTextNode('delete');

  itemButton.appendChild(dataButtonNode);
  itemButton.className += "btn btn-delete";
  itemNode.appendChild(itemButton);
  return itemNode
}

function createItemNode(dataType, itemData){
  var itemNode = document.createElement('div');
  itemNode.className += "product";
  var spanTag = document.createElement('span');
  var dataNode = document.createTextNode(itemData);
  itemNode.appendChild(spanTag);
  spanTag.appendChild(dataNode);
  return itemNode
}

function createNewItemRow(itemName, itemUnitPrice){
  var parent = document.getElementsByTagName('section')[0];
  var firstItemRow = parent.children[1];

  var itemRow = document.createElement('div');
  itemRow.className += "item-nodo"

  var itemNameNode = createItemNode("name", itemName);
  var itemPriceNode = createItemNode("price","$"+ itemUnitPrice);
  var itemQuantityNode = createQuantityNode();
  var itemTotalPriceNode = createTotalPriceNode();
  var itemDeleteButton = createDeleteButton();

  itemRow.appendChild(itemNameNode);
  itemRow.appendChild(itemPriceNode);
  itemRow.appendChild(itemQuantityNode);
  itemRow.appendChild(itemTotalPriceNode);
  itemRow.appendChild(itemDeleteButton);

  parent.insertBefore(itemRow, firstItemRow);
}

function createNewItem(){
  let item = document.getElementsByClassName('create-product');
  let nameProduct = item[0].children[0].value;
  let price = item[1].children[0].value;
  createNewItemRow(nameProduct, price);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
