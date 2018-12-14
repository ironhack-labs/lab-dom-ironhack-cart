function deleteItem(element){ 
  let product = document.getElementById("container-products");
  product.removeChild(element.currentTarget.parentNode.parentNode); // also could be used currentTarget instead of target
}

function getPriceByProduct(product){
  let quantity = product.querySelector('.quantity').value;
  let price = parseFloat(product.querySelector('.unitPrice').innerText);
  return quantity * price;
}

function updatePriceByProduct(productPrice, product){
  let updateTotalPrice = product.querySelector('.subTotal');
  updateTotalPrice.innerText = productPrice;
}

function getTotalPrice() {
  let products = document.querySelectorAll('.product'); // Saving just the product DIV wrapper (so each product) to the variable.
  let totalPrice = 0;

  products.forEach(function(product){ // forEach can be used as querySelectorAll returns an array.
    let totalProductPrice = getPriceByProduct(product); // Saving product individual subtotal price in variable obtained by calling the function. Note that for each iteration (product) will be different.
    updatePriceByProduct(totalProductPrice, product); // Updating price to each product.  
    totalPrice += totalProductPrice; // Total price from all products to be shown in the product cart.
  });
  document.querySelector('.total-price').innerText = totalPrice;
}

function createProductName(name) {
  let divBorn = document.createElement('div');
  
  let spanBorn = document.createElement('span');
  let spanText = document.createTextNode(name);
  spanBorn.appendChild(spanText);
  divBorn.appendChild(spanBorn);

  return divBorn;
}

function createProductPrice(price) {
  let divBorn = document.createElement('div');
  
  let spanBorn = document.createElement('span');
  let spanText = document.createTextNode(price + '$');
  spanBorn.setAttribute('class', 'unitPrice');
  spanBorn.appendChild(spanText);
  divBorn.appendChild(spanBorn);

  return divBorn;
}

function createQuantityInput(){
  let divBorn = document.createElement('div');

  let labelBorn = document.createElement('label');
  let labelText = document.createTextNode('QTY');
  labelBorn.setAttribute('for', 'texttest');
  labelBorn.appendChild(labelText);

  let inputBorn = document.createElement('input');
  inputBorn.setAttribute('class', 'quantity');
  inputBorn.setAttribute('type', 'number');
  inputBorn.setAttribute('value', '0');
  inputBorn.setAttribute('placeholder', '0');
  inputBorn.setAttribute('name', 'qty');
  
  divBorn.appendChild(labelBorn);
  divBorn.appendChild(inputBorn);

  return divBorn;
}

function createSubtotalPrice(){
  let divBorn = document.createElement('div');
  
  let spanBorn = document.createElement('span');
  let spanText = document.createTextNode('0');
  spanBorn.setAttribute('class', 'subTotal');
  spanBorn.appendChild(spanText);
  divBorn.appendChild(spanBorn);

  return divBorn;
}

function createDeleteButton(){
  let divBorn = document.createElement('div');

  let buttonBorn = document.createElement('button');
  let buttonText = document.createTextNode('Delete');
  buttonBorn.setAttribute('class', 'btn-delete btn');
  buttonBorn.appendChild(buttonText);
  divBorn.appendChild(buttonBorn);
  buttonBorn.addEventListener("click", deleteItem);

  return divBorn;
}

function createNewItemRow(itemName, itemUnitPrice){
  let divBorn = document.createElement('div');
  divBorn.setAttribute('class', 'product');

  divBorn.appendChild(createProductName(itemName));
  divBorn.appendChild(createProductPrice(itemUnitPrice));
  divBorn.appendChild(createQuantityInput());
  divBorn.appendChild(createSubtotalPrice());
  divBorn.appendChild(createDeleteButton());

  return divBorn;
}

function createNewItem(){
  let newItemName = document.getElementById('create-name').value;
  let newItemPrice = document.getElementById('create-price').value;
  let containerProducts = document.getElementById('container-products');

  if ( newItemName !== '' || newItemPrice > 0){
    containerProducts.appendChild(createNewItemRow(newItemName, newItemPrice));
  } 
}

window.onload = function(){
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
