'use strict';

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').innerHTML = quantity * price;
  return quantity * price;
}

function calculateAll() {
  let total = 0;
  const products = document.querySelectorAll('.product');
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
    total += updateSubtotal(products[i]);
  }
  let totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}

function removeProduct(event) {
  //With 2 parentNode, we select the complete product.
  const target = event.currentTarget.parentNode.parentNode;
  //We remove the complete element and refresh the cart
  target.remove();
  calculateAll();
}

function createProduct() {
  //We get the values Product name and Unit price
  const name = document.querySelector('.create-product input[type=text]')
  const price = document.querySelector('.create-product input[type=number]');
  //Get a full html product & make a copy with cloneNode
  const existingProduct = document.querySelector('.product');
  let newProduct = existingProduct.cloneNode(true);
  //Update the name & price values
  newProduct.querySelector('.name span').innerHTML = name.value;
  newProduct.querySelector('.price span').innerHTML = parseFloat(price.value);
  // Add the removeproduct() at click event
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);
  //Get complete cart body & add the new product
  const cart = document.querySelector('tbody');
  cart.appendChild(newProduct);
  // Restart the default values.
  name.value = "";
  price.value = 0;
}

window.addEventListener('load', () => {
  // Calculate price button
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //Delete buttons 
  const deleteBtns = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', removeProduct);
  }
  // Create button
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});