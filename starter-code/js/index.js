function deleteItem(e){
  var elementToRemove = e.currentTarget.parentNode.parentNode;
  var parent = document.querySelector('#main');
  parent.removeChild(elementToRemove);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.querySelectorAll('.product-wrapper');
  var totalPrice = document.querySelector('#total-price > h2 > span')
  var productsTotal = 0;
  for(var i = 0; i < products.length; i++){
    var price = parseFloat(products[i].querySelector('.product-price > span').innerHTML.substr(1));
    var qty = +products[i].querySelector('.product-qty > input').value;
    var total = products[i].querySelector('.product-total');
    
    total.innerHTML = '$' + (price * qty).toFixed(2);
    productsTotal += price * qty;
  }
  totalPrice.innerHTML = '$' + productsTotal.toFixed(2);
}

//<input name="qty-input" type="number" value="0" />
function createQuantityInput(){
  var qtyInput = document.createElement('input');
  qtyInput.setAttribute('name', 'qty-input');
  qtyInput.setAttribute('type', 'number');
  qtyInput.setAttribute('value', 0);
  qtyInput.value = 0;

  return qtyInput;
}

/* */
function createDeleteButton(){
  var deleteDiv = document.createElement('div');
  
  var deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'btn btn-delete');
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = deleteItem;

  deleteDiv.append(deleteButton);

  return deleteDiv;
}

function createQuantityNode(){
  var qtyNode = document.createElement('div');
  qtyNode.setAttribute('class', 'product-qty');

  var label = document.createElement('label');
  label.setAttribute('class', 'quantity');
  label.innerHTML = "QTY";

  qtyNode.appendChild(label);
  qtyNode.appendChild(createQuantityInput());


  return qtyNode;
}

function createItemNode(dataType, itemData){

}

/*
<div class="product-name">
  <span>IronBubble-head</span>
</div>
<div class="product-price"><span>$25.00</span></div>
<div class="product-qty">
  <label for="qty-input" class="quantity">QTY</label>
  <input name="qty-input" type="number" value="0" />
</div>
<div class="product-total"><span>$0.00</span></div>
<div><button class="btn btn-delete">Delete</button></div>
*/
function createNewItemRow(itemName, itemUnitPrice){
  var productList = document.querySelector('#main');
  
  var productWrapper = document.createElement('div');
  productWrapper.setAttribute('class', 'product-wrapper');
  
  var productName = document.createElement('div');
  productName.setAttribute('class', 'product-name');
  productName.innerHTML = "<span>" + itemName + "</span>";

  var productPrice =  document.createElement('div');
  productPrice.setAttribute('class', 'product-price');
  productPrice.innerHTML = "<span>$"+ parseFloat(itemUnitPrice).toFixed(2) + "</span>";
  
  var productTotal = document.createElement('div');
  productTotal.setAttribute('class', 'product-total');
  productTotal.innerHTML = "<span>$0.00</span>";

  productWrapper.append(productName);
  productWrapper.append(productPrice);
  productWrapper.append(createQuantityNode());
  productWrapper.append(productTotal);
  productWrapper.append(createDeleteButton());
  
  productList.append(productWrapper);
}

function createNewItem(){
  var itemName = document.querySelector('#new-item-name').value; //input value its accessed through .value attribute
  var itemUnitPrice = document.querySelector('#new-item-price').value;
  createNewItemRow(itemName, itemUnitPrice);
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
