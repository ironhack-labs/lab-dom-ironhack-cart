// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalPrice = price.innerHTML * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
}


function calculateAll() {

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let total = 0;
  for (i = 0; i < products.length; i++) {
    const totalProduct = updateSubtotal(products[i]);
    total += totalProduct;
  }
  

  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total;
}


// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;

  // Remove the product
  const parent = target.parentNode;
  const toRemove = parent.parentNode;
  toRemove.parentNode.removeChild(toRemove);

  // Update total price
  const subtotalCurrentProduct = toRemove.querySelector('.subtotal span');
  const subtotalPrice = subtotalCurrentProduct.innerHTML;
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML -= subtotalPrice;
}


// ITERATION 5
function createProduct(event) {

  // Access new product info
  const target = event.currentTarget;
  const targetParent = target.parentNode;
  const row = targetParent.parentNode;

  // New product name
  const newProductName = row.querySelector('input[type=text]');
  const newProductNameValue = newProductName.value;

  // New product price
  const newProductPrice = row.querySelector('input[type=number]');
  const newProductPriceValue = newProductPrice.value;

  // Access tbody (where all products are)
  const parent = document.getElementsByTagName('tbody')[0];

  // Create a new product with its class
  const product = document.createElement('tr');
  parent.appendChild(product);
  product.setAttribute('class', 'product');

  // Create product name field
  const name = document.createElement('td');
  product.appendChild(name);
  name.setAttribute('class', 'name');
  const spanName = document.createElement('span');
  name.appendChild(spanName);
  spanName.innerHTML = newProductNameValue;

  // Create unit price field
  const price = document.createElement('td');
  price.innerHTML = '$';
  product.appendChild(price);
  price.setAttribute('class', 'price');
  const spanPrice = document.createElement('span');
  price.appendChild(spanPrice);
  spanPrice.innerHTML = newProductPriceValue;

  //Create quantity field
  const quantity = document.createElement('td');
  product.appendChild(quantity);
  quantity.setAttribute('class', 'quantity');
  const quantityInput = document.createElement('input');
  quantity.appendChild(quantityInput);
  quantityInput.setAttribute('type', 'number');
  quantityInput.setAttribute('value', '0');
  quantityInput.setAttribute('min', '0');
  quantityInput.setAttribute('placeholder', 'Quantity');

  // Create subtotal field
  const subtotal = document.createElement('td');
  subtotal.innerHTML = '$';
  product.appendChild(subtotal);
  subtotal.setAttribute('class', 'subtotal');
  const subtotalSpan = document.createElement('span');
  subtotal.appendChild(subtotalSpan);
  subtotalSpan.innerHTML = 0;

  // Create action field
  const action = document.createElement('td');
  product.appendChild(action);
  action.setAttribute('class', 'action');
  const actionBtn = document.createElement('button');
  action.appendChild(actionBtn);
  actionBtn.setAttribute('class', 'btn btn-remove');
  actionBtn.innerHTML = 'Remove';

}


window.addEventListener('load', () => {

  // Calculate prices button
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Remove product button
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
  
  // Create product button
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

});

// Enable deleting a new product
window.addEventListener('click', () => {
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
