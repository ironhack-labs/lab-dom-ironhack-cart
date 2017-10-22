function deleteItem(e){
  var id = e.currentTarget.parentNode.parentNode.remove();
}

function getPriceByProduct(item){
  return parseFloat(item.getElementsByClassName('cost')[0].innerHTML);
}

function updatePriceByProduct(productPrice, product){
  var itemQuantity = product.getElementsByClassName('QTY')[0].value;
  product.getElementsByClassName('totalcost')[0].innerHTML = productPrice * itemQuantity + " $";
  return productPrice * itemQuantity;
}

function getTotalPrice() {
  var items = document.getElementsByTagName('article');
  var totalPrices = 0;

  for (var i=0; i<items.length; i++) {
    var itemCostNumber = getPriceByProduct(items[i]);
    var price = updatePriceByProduct(itemCostNumber, items[i]);
    totalPrices = totalPrices + price;
    document.getElementById('final_price').innerHTML = totalPrices + ' $';
  }
}

function createQuantityInput(){
  return '<input type="number" min="1" class="QTY" value="0">'
}

function createPriceNode(price){
  return '<div class="product1_cost"><span class="cost"> ' + price + ' $ </span></div>';
}
function createDeleteButton(){
  return '<div class="delete1"><button class="btn btn-delete"> Delete </button></div>';
}

function createQuantityNode(){
  return '<div class="product1_qty"><label>QTY ' + createQuantityInput() + '</label></div>';
}

function createItemNode(itemData){
  return '<div class="product1_name"><span>' + itemData +'</span></div>';
}

function createNewItemRow(itemName, itemUnitPrice){
  return '<article class="' + itemName + '">' + createItemNode(itemName) + createPriceNode(itemUnitPrice) + createQuantityNode() + '<div class="totalcost1"><span class="totalcost">0 $</span></div>' + createDeleteButton() +  '</article>'
}

function createNewItem(){
  var name = document.getElementById('create-name').value;
  var price = document.getElementById('create-price').value;
  document.getElementById('content').innerHTML = document.getElementById('content').innerHTML + createNewItemRow(name, price);
    
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
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
