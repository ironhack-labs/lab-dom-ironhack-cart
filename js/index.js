// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = parseFloat(price) * parseInt(quantity);
  return parseFloat(subtotal.textContent);
}

function calculateAll() {
  document.querySelector('#total-value span').textContent = [
    ...document.getElementsByClassName('product')
  ].reduce((acc, product) => (acc += updateSubtotal(product)), 0);
}

// ITERATION 4

function removeProduct(event) {
  const targetProduct = event.currentTarget.parentNode.parentNode;
  const cart = targetProduct.parentNode;
  cart.removeChild(targetProduct);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const name = document.querySelectorAll('.create-product input')[0].value;
  const price = addDecimalZeroes(
    document.querySelectorAll('.create-product input')[1].value
  );

  createNewProductRow(price, name);
  cleanCreateProductInputs();
}

function cleanCreateProductInputs() {
  [...document.querySelectorAll('.create-product input')].forEach(
    (e) => (e.value = '')
  );
}

function createNewProductRow(price, name) {
  const cart = document.querySelector('tbody');

  const trProduct = document.createElement('tr');
  trProduct.className = 'product';

  const tdName = document.createElement('td');
  const nameSpan = document.createElement('span');
  tdName.className = 'name';
  nameSpan.textContent = name;
  tdName.appendChild(nameSpan);

  const tdPrice = document.createElement('td');
  tdPrice.className = 'price';
  tdPrice.textContent = '$';
  const tdPriceContent = document.createElement('span');
  tdPriceContent.textContent = price;
  tdPrice.appendChild(tdPriceContent);

  const tdQuantity = document.createElement('td');
  tdQuantity.className = 'quantity';
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = 0;
  quantityInput.placeholder = 'Quantity';
  quantityInput.min = 0;
  tdQuantity.appendChild(quantityInput);

  const tdTotal = document.createElement('td');
  tdTotal.className = 'subtotal';
  tdTotal.textContent = '$';
  const totalSpan = document.createElement('span');
  totalSpan.textContent = 0;
  tdTotal.appendChild(totalSpan);

  const tdAction = document.createElement('td');
  tdAction.className = 'action';
  const buttonAction = document.createElement('button');
  buttonAction.className = 'btn btn-remove';
  buttonAction.textContent = 'Remove';
  buttonAction.addEventListener('click', removeProduct);
  tdAction.appendChild(buttonAction);

  trProduct.appendChild(tdName);
  trProduct.appendChild(tdPrice);
  trProduct.appendChild(tdQuantity);
  trProduct.appendChild(tdTotal);
  trProduct.appendChild(tdAction);

  cart.appendChild(trProduct);
}

function addDecimalZeroes(num) {
  const dec = num.split('.').length > 0 ? num.split('.')[1] : null;
  const len = dec && dec.length > 2 ? dec.length : 2;
  return Number(num).toFixed(len);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  [...document.getElementsByClassName('btn btn-remove')].forEach((el) =>
    el.addEventListener('click', removeProduct)
  );
  document.querySelector('#create').addEventListener('click', createProduct);
});
