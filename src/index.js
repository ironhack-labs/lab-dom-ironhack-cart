// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  const subtotalValue = Number(price.textContent) * Number(quantity.value);

  subtotal.textContent = subtotalValue;

  return subtotalValue;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  document.querySelector('#total-value span').textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;

  product.parentNode.removeChild(product);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('.create-product input[type="text"]');
  const productPrice = document.querySelector('.create-product input[type="number"]');
  const product = document.createElement('tr');

  product.classList.add('product');

  const nameCell = document.createElement('td');
  nameCell.classList.add('name');

  const name = document.createElement('span');
  name.textContent = productName.value;
  nameCell.appendChild(name);

  const priceCell = document.createElement('td');
  priceCell.classList.add('price');
  priceCell.append('$');

  const price = document.createElement('span');
  price.textContent = Number(productPrice.value);
  priceCell.appendChild(price);

  const quantityCell = document.createElement('td');
  quantityCell.classList.add('quantity');

  const quantity = document.createElement('input');
  quantity.setAttribute('type', 'number');
  quantity.setAttribute('value', '0');
  quantity.setAttribute('min', '0');
  quantity.setAttribute('placeholder', 'Quantity');
  quantityCell.appendChild(quantity);

  const subtotalCell = document.createElement('td');
  subtotalCell.classList.add('subtotal');
  subtotalCell.append('$');

  const subtotal = document.createElement('span');
  subtotal.textContent = '0';
  subtotalCell.appendChild(subtotal);

  const actionCell = document.createElement('td');
  actionCell.classList.add('action');

  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-remove');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', removeProduct);
  actionCell.appendChild(removeButton);

  product.append(nameCell, priceCell, quantityCell, subtotalCell, actionCell);
  document.querySelector('#cart tbody').appendChild(product);

  productName.value = '';
  productPrice.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
