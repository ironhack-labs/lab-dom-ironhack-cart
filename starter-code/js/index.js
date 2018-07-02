function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var unitPrice = document.getElementsByClassName('unit-price'),
      quantity = document.getElementsByTagName('input'),
      productInfo = document.getElementsByClassName('product-info'),
      productTotal,
      priceTotal = 0;
  
  for(var i = 0; i < productInfo.length; i++){
    productTotal = unitPrice[i].innerHTML * quantity[i].value;
    document.getElementsByClassName('product-price-total')[i].innerHTML = `${productTotal.toFixed(2)}`;
    priceTotal += productTotal;
  }
    document.getElementsByClassName('cart-total')[0].innerHTML = priceTotal.toFixed(2);
}

//Delete product
function deleteItem(e){
  var productRow = e.currentTarget.parentNode.parentNode,
      priceDiv = productRow.children[3],
      priceItem = priceDiv.children[0];

      reducePrice(priceItem.innerHTML);
      productRow.parentNode.removeChild(productRow);
}
function reducePrice(price){
  var cartTotal = document.getElementsByClassName('cart-total')[0].innerHTML;
  var newPrice = parseInt(cartTotal) - price;
  document.getElementsByClassName('cart-total')[0].innerHTML = newPrice;
}
//Creation of new product

function createInnerProductDiv(){
  var div = document.createElement('div');
  div.className = "col-20";
  return div;
}

function createQuantityInput(){
  var qInput = document.createElement('input');
  qInput.className = "qty",
  qInput.setAttribute('value',0);
  return qInput;
}
function createNameNode(name){
  var nameNode = createInnerProductDiv();
      nameNode.innerHTML = `<span class='product-name'>${name}</span>`;
      return nameNode;
}
function createPriceNode(price){
  var priceNode = createInnerProductDiv();
      priceNode.innerHTML = `$<span class='unit-price'>${price}</span>`;
      return priceNode;
}
function createQuantityNode(){
  var qNode = createInnerProductDiv(),
      qInput = createQuantityInput();
      qNode.innerHTML = "<span>QTY</span>";
      qNode.appendChild(qInput);
    return qNode;
}
function createDeleteButton(){
  var btnDiv = createInnerProductDiv();
  var btn = document.createElement('button');
  btn.className = "btn btn-delete",
  btn.innerHTML = 'Delete';
  btnDiv.appendChild(btn);
  return btnDiv;
}
function createNodeTotalPrice(){
  var totalPriceNode = createInnerProductDiv();
  totalPriceNode.innerHTML = "$<span class='product-price-total'>0.00</span>";
  return totalPriceNode;
}

function createNewItemRow(itemName, itemUnitPrice){
  var nameNode = createNameNode(itemName),
      priceNode = createPriceNode(itemUnitPrice),
      qNode = createQuantityNode(),
      totalSpan = createNodeTotalPrice(),
      deleteBtn = createDeleteButton(),
      productRow = [];

  var newRow = document.createElement('div');
  newRow.setAttribute('class','row product-info');

  productRow.push(nameNode,priceNode,qNode,totalSpan,deleteBtn);
  console.log(productRow);

  for(var i = 0; i < productRow.length; i++){
    newRow.appendChild(productRow[i]);
  }
  return newRow;
}
function createNewItem(){
  var productName = document.getElementById('new-product-name').value,
      productPrice = document.getElementById('new-product-price').value,
      productPrice = parseInt(productPrice).toFixed(2);
      
  if(!productName || !productPrice || isNaN(productPrice)){
    alert('Introduce a product name and the price in numbers')
    return;
  }
  var cart = document.getElementById('cart');
  var newRow = createNewItemRow(productName,productPrice);
  console.log(newRow);
  cart.appendChild(newRow);
  initDelete();
  clearInputs();
}
function initDelete(){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener('click',deleteItem);
  }
}
function clearInputs(){
  document.getElementById('new-product-name').value = "";
  document.getElementById('new-product-price').value = "";
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  
  calculatePriceButton.addEventListener('click',getTotalPrice);
  createItemButton.addEventListener('click',createNewItem);
  initDelete();
};