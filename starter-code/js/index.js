function deleteItem(element){ 
  let product = document.getElementById('container-products'); 
  product.removeChild(element.target.parentNode.parentNode); 
}

function getPriceByProduct(product) {
  let productPrice = product.querySelector('.product-price'); // 1
  let productQuantity = product.querySelector('.product-quantity').value; // 2

  return parseInt(productPrice.innerText) * productQuantity; // 3
}

function updatePriceByProduct(product, price){ 
  let productTotalPrice = product.querySelector('.total-product-price'); // 1
  productTotalPrice.innerText = price; // 2
}


function getfinalProductPrice() {
  let products = document.querySelectorAll('.product-wrapper');
  let total = 0; 
  for (let i = 0; i < products.length; i++) { 
      let productPrice = getPriceByProduct(products[i]); 
      updatePriceByProduct(products[i], productPrice);
      total += productPrice;
  }
  let totalSpanPrice = document.getElementById('total-price-span');
  totalSpanPrice.innerText = total; 
}


function createQuantityInput(){
  let newQtyDiv = document.createElement('div');
  newQtyDiv.classList.add('quantity');

  let newQtyLabel = document.createElement('label');
  newQtyLabel.setAttribute('for', 'product-quantity');
  newQtyLabel.appendChild(document.createTextNode('QTY '))
  newQtyDiv.appendChild(newQtyLabel);

  let newQtyInput = document.createElement('input');
  newQtyInput.classList.add('product-quantity');
  newQtyInput.setAttribute('type', 'number');
  newQtyInput.setAttribute('name', 'product-quantity');
  newQtyInput.setAttribute('placeholder', 'How many?');
  newQtyInput.setAttribute('min', '0');
  newQtyDiv.appendChild(newQtyInput);

  return newQtyDiv;
}

function createDeleteButton(){
  let unitButtonDiv = document.createElement('div');
  unitButtonDiv.classList.add('btn-delete-container');
  let unitButton = unitButtonDiv.appendChild(document.createElement('button'));
  unitButton.appendChild(document.createTextNode('Delete'))
  unitButton.setAttribute('type', 'button');
  unitButton.classList.add("btn", "btn-delete");
  unitButton.addEventListener("click", deleteItem)

  return unitButtonDiv

}

function createUnitName(name) {

  let unitNameDiv = document.createElement('div');
  unitNameDiv.classList.add('product-name');
  let unitNameSpan = unitNameDiv.appendChild(document.createElement('span'));
  unitNameSpan.appendChild(document.createTextNode(name));

  return unitNameDiv;
}

function createUnitPrice(price) {

  let unitPriceDiv = document.createElement('div');
  unitPriceDiv.classList.add('product-price');
  let unitPriceSpan = unitPriceDiv.appendChild(document.createElement('span'));
  unitPriceSpan.appendChild(document.createTextNode(price));

  return unitPriceDiv;
}

function createTotalProductPriceDiv() {
  let unitTotalPriceDiv = document.createElement('div');
  unitTotalPriceDiv.classList.add('total-product-price');
  let unitTotalPriceSpan = unitTotalPriceDiv.appendChild(document.createElement('span'));
  unitTotalPriceSpan.appendChild(document.createTextNode('0'));
  
  return unitTotalPriceDiv;
}

function createNewItemRow(name, price){

  let rowNewItem = document.createElement('div');
  rowNewItem.classList.add('product-wrapper', 'flexbox-container');
  rowNewItem.appendChild(createUnitName(name));
  rowNewItem.appendChild(createUnitPrice(price));
  rowNewItem.appendChild(createQuantityInput())
  rowNewItem.appendChild(createTotalProductPriceDiv())
  rowNewItem.appendChild(createDeleteButton())
  return rowNewItem;
}

function createNewItem(){
  let name = document.getElementById('product-name-creater').value;
  let price = document.getElementById('product-price-creater').value;
  let containerProducts = document.getElementById('container-products');

  if ( name !== '' || price >= 0){
    containerProducts.appendChild(createNewItemRow(name, price))
  } 
}

window.onload = function(){
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getfinalProductPrice;
  createItemButton.onclick = createNewItem;

  for(let i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
