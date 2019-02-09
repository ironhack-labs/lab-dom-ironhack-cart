function deleteItem(e){
  var wrapper = document.getElementsByClassName('wrapper-product');
  removedPrice = e.path[1].parentElement.getElementsByClassName('product-final-price')[0].getElementsByTagName('span')[0].innerHTML;
  removedPrice = parseFloat(removedPrice.replace('$', ''));
  totalPrice = document.getElementById('total').getElementsByTagName('span')[0].innerHTML
  total = parseFloat(totalPrice.replace('$', ''))
  document.getElementById('total').getElementsByTagName('span')[0].innerHTML = '$' + (total - removedPrice);
  e.path[1].parentElement.parentElement.removeChild(e.path[1].parentElement);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var total = 0;
  var wrapper = document.getElementsByClassName('wrapper-product');
  for(var i=0; i < wrapper.length; i++){    
    var price = wrapper[i].getElementsByClassName('product-price')[0].getElementsByTagName('span')[0].innerHTML;
    var qty = wrapper[i].getElementsByClassName('product-quantity')[0].getElementsByTagName('input')[0].value;
    var fprice = wrapper[i].getElementsByClassName('product-final-price')[0].getElementsByTagName('span')[0];  
    currentPrice = parseFloat(price.replace('$', '')) * parseInt(qty)
    fprice.innerHTML = '$' + currentPrice;
    total = total + currentPrice;
  }
  document.getElementById('total').getElementsByTagName('span')[0].innerHTML = '$' + total;
  console.log(total)
}

function createQuantityInput(){
  var input = document.createElement('input')
  input.value = 1;
  return input;
}

function createDeleteButton(){
  var dltbtn = document.createElement("div");
  dltbtn.setAttribute('class', 'product-action');
  dltbtn.appendChild(document.createElement('button'));  
  dltbtn.getElementsByTagName('button')[0].innerHTML = 'Delete';
  dltbtn.getElementsByTagName('button')[0].setAttribute('class', 'btn-delete btn ');
  
  return dltbtn;
}

function createQuantityNode(){
  var productItem = document.createElement("div");
  productItem.setAttribute('class', 'product-quantity');
  productItem.appendChild(document.createElement('label'));
  productItem.getElementsByTagName('label')[0].innerHTML = 'QTY';
  productItem.appendChild(createQuantityInput());
  return productItem;
}

function createItemNode(dataType, itemData){
  var productItem = document.createElement("div");
  productItem.setAttribute('class', dataType);
  productItem.appendChild(document.createElement('span'));
  productItem.getElementsByTagName('span')[0].innerHTML = itemData;  
  return productItem;
}

function createNewItemRow(itemName, itemUnitPrice){
  var row = document.createElement("div");
  var wrapper = document.getElementsByClassName('wrapper-product');

  row.setAttribute('class', 'wrapper-product');

  var name = createItemNode('product-name', itemName);
  var price = createItemNode('product-name', itemUnitPrice);
  var qty = createQuantityNode();
  var fprice = createItemNode('product-name', '$0.00');
  var dltbtn = createDeleteButton();
  
  row.appendChild(name);
  row.appendChild(price);
  row.appendChild(qty);
  row.appendChild(fprice);
  row.appendChild(dltbtn);

  var products = document.getElementById('products');
  products.appendChild(row);

}

function createNewItem(){
  var label = document.getElementById('new').getElementsByTagName('input')[0].value;
  var price = document.getElementById('new').getElementsByTagName('input')[1].value;
  createNewItemRow(label, price)
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


