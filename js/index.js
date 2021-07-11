// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subt = product.querySelector('.subtotal span');
  let price1 = price.innerHTML;
  let qty = quantity.value;
  let subtotal = price1 * qty;
  subt.innerHTML = `${subtotal}`;
  console.log('Calculating subtotal, yey!');
  return subtotal;
  //... your code goes here
}

function calculateAll() {

  const products = document.querySelectorAll('.product');
  const total1 = document.querySelector('#total-value span');
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }
  total1.innerHTML = `${total}`;
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const products = document.querySelector('#cart tbody');
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  products.removeChild(target.parentNode.parentNode);

  calculateAll();
  //... your code goes here
}

// ITERATION 5
const newProduct = document.getElementById('create');

newProduct.onclick = function createProduct() {
  const createProd = document.querySelector('.create-product');
  const name = document.querySelector('.create-product input[type=text]');
  const price = document.querySelector('.create-product input[type=number]');
  const Btn = document.querySelectorAll('.btn-remove');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  const nameElement = document.createElement('td');
  nameElement.classList.add('name');
  nameElement.innerHTML = `<span>${name.value}</span>`;
  newRow.appendChild(nameElement);
  const priceElement = document.createElement('td');
  priceElement.classList.add('price');
  priceElement.innerHTML = `<span> ${price.value} </span>`;
  newRow.appendChild(priceElement);
  const quantityElement = document.createElement('td');
  const input = document.createElement('input');
  quantityElement.appendChild(input);
  quantityElement.classList.add('quantity');
  input.setAttribute('type', 'number');

  input.value = `${0}`;
  newRow.appendChild(quantityElement);
  const subtotalElement = document.createElement('td');
  subtotalElement.classList.add('subtotal');
  subtotalElement.innerHTML = `<span> $${0}</span>`;
  newRow.appendChild(subtotalElement);

  const actionElement = document.createElement('td');
  actionElement.classList.add('action');
  const btnElement = document.createElement('button');
  btnElement.classList.add('btn');
  btnElement.classList.add('btn-remove');
  btnElement.innerHTML = "Remove";
  btnElement.addEventListener('click', removeProduct);
  actionElement.appendChild(btnElement);
  newRow.appendChild(actionElement);
  document.querySelector('#cart tbody').appendChild(newRow);

name.value = '';
price.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const Btn = document.querySelectorAll('.btn-remove');
  Btn.forEach(element => {
    element.addEventListener('click', removeProduct);
   });



  //... your code goes here
});
