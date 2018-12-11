function deleteItem(element){ 
  var product = document.getElementById('container-products'); 
  product.removeChild(element.target.parentNode.parentNode); 
}

function getPriceByProduct(product) {
  var productPrice = product.querySelector('.product-price'); // 1
  var productQuantity = product.querySelector('.product-quantity').value; // 2

  return parseInt(productPrice.innerText) * productQuantity; // 3
}

function updatePriceByProduct(product, price){ 
  var productTotalPrice = product.querySelector('.total-product-price'); // 1
  productTotalPrice.innerText = price; // 2
}


function getfinalProductPrice() {
  var products = document.querySelectorAll('.product-wrapper');
  var total = 0; 
  for (var i = 0; i < products.length; i++) { 
      var productPrice = getPriceByProduct(products[i]); 
      updatePriceByProduct(products[i], productPrice);
      total += productPrice;
  }
  var totalSpanPrice = document.getElementById('total-price-span');
  totalSpanPrice.innerText = total; 
}


function createQuantityInput(){
  var newQtyDiv = document.createElement('div');
  newQtyDiv.classList.add('quantity');

  var newQtyLabel = document.createElement('label');
  newQtyLabel.setAttribute('for', 'product-quantity');
  newQtyLabel.appendChild(document.createTextNode('QTY '))
  newQtyDiv.appendChild(newQtyLabel);

  var newQtyInput = document.createElement('input');
  newQtyInput.classList.add('product-quantity');
  newQtyInput.setAttribute('type', 'number');
  newQtyInput.setAttribute('name', 'product-quantity');
  newQtyInput.setAttribute('placeholder', 'How many?');
  newQtyInput.setAttribute('min', '0');
  newQtyDiv.appendChild(newQtyInput);

  return newQtyDiv;
}

function createDeleteButton(){
  var unitButtonDiv = document.createElement('div');
  unitButtonDiv.classList.add('btn-delete-container');
  var unitButton = unitButtonDiv.appendChild(document.createElement('button'));
  unitButton.appendChild(document.createTextNode('Delete'))
  unitButton.setAttribute('type', 'button');
  unitButton.classList.add("btn", "btn-delete");
  unitButton.addEventListener("click", deleteItem)

  return unitButtonDiv

}

function createUnitName(name) {

  var unitNameDiv = document.createElement('div');
  unitNameDiv.classList.add('product-name');
  var unitNameSpan = unitNameDiv.appendChild(document.createElement('span'));
  unitNameSpan.appendChild(document.createTextNode(name));

  return unitNameDiv;
}

function createUnitPrice(price) {

  var unitPriceDiv = document.createElement('div');
  unitPriceDiv.classList.add('product-price');
  var unitPriceSpan = unitPriceDiv.appendChild(document.createElement('span'));
  unitPriceSpan.appendChild(document.createTextNode(price));

  return unitPriceDiv;
}

function createTotalProductPriceDiv() {
  var unitTotalPriceDiv = document.createElement('div');
  unitTotalPriceDiv.classList.add('total-product-price');
  var unitTotalPriceSpan = unitTotalPriceDiv.appendChild(document.createElement('span'));
  unitTotalPriceSpan.appendChild(document.createTextNode('0'));
  
  return unitTotalPriceDiv;
}

function createNewItemRow(name, price){

  var rowNewItem = document.createElement('div');
  rowNewItem.classList.add('product-wrapper', 'flexbox-container');
  rowNewItem.appendChild(createUnitName(name));
  rowNewItem.appendChild(createUnitPrice(price));
  rowNewItem.appendChild(createQuantityInput())
  rowNewItem.appendChild(createTotalProductPriceDiv())
  rowNewItem.appendChild(createDeleteButton())
  return rowNewItem;
}

function createNewItem(){
  var name = document.getElementById('product-name-creater').value;
  var price = document.getElementById('product-price-creater').value;
  var containerProducts = document.getElementById('container-products');

  if ( name !== '' || price >= 0){
    containerProducts.appendChild(createNewItemRow(name, price))
  } 
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getfinalProductPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
