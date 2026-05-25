function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = Number(
    product.querySelector('.price span').innerText
  );

  const quantity = Number(
    product.querySelector('.quantity input').value
  );

  const subtotal = price * quantity;

  product.querySelector('.subtotal span').innerText =
    subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');

  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  document.querySelector('#total-value span').innerText =
    total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  console.log('The target in remove is:', target);

  const product = target.closest('.product');

  product.remove();

  calculateAll();
}

// ITERATION 5

function updateCreateButton() {
  const nameInput = document.querySelector(
    '.create-product input[type="text"]'
  );

  const priceInput = document.querySelector(
    '.create-product input[type="number"]'
  );

  const createButton = document.getElementById('create');

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (name && price > 0) {
    createButton.style.backgroundColor = 'green';
    createButton.style.color = 'white';
    createButton.style.border = '1px solid black';
  } else {
    createButton.style.backgroundColor = '#F0F0F0';
    createButton.style.color = 'black';
    createButton.style.border = '1px solid #ccc';
  }
}

function createProduct() {
  const nameInput = document.querySelector(
    '.create-product input[type="text"]'
  );

  const priceInput = document.querySelector(
    '.create-product input[type="number"]'
  );

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (!name || price <= 0) {
    updateCreateButton();
    return;
  }

  const product = document.createElement('tr');
  product.classList.add('product');

  // NAME
  const nameCell = document.createElement('td');
  nameCell.classList.add('name');

  const nameSpan = document.createElement('span');
  nameSpan.innerText = name;

  nameCell.appendChild(nameSpan);

  // PRICE
  const priceCell = document.createElement('td');
  priceCell.classList.add('price');

  const priceSpan = document.createElement('span');
  priceSpan.innerText = price.toFixed(2);

  priceCell.append('$', priceSpan);

  // QUANTITY
  const quantityCell = document.createElement('td');
  quantityCell.classList.add('quantity');

  const quantityInput = document.createElement('input');

  quantityInput.type = 'number';
  quantityInput.value = 0;
  quantityInput.min = 0;
  quantityInput.placeholder = 'Quantity';

  quantityCell.appendChild(quantityInput);

  // SUBTOTAL
  const subtotalCell = document.createElement('td');
  subtotalCell.classList.add('subtotal');

  const subtotalSpan = document.createElement('span');
  subtotalSpan.innerText = '0.00';

  subtotalCell.append('$', subtotalSpan);

  // ACTION
  const actionCell = document.createElement('td');
  actionCell.classList.add('action');

  const removeButton = document.createElement('button');

  removeButton.classList.add('btn', 'btn-remove');
  removeButton.innerText = 'Remove';

  removeButton.addEventListener('click', removeProduct);

  actionCell.appendChild(removeButton);

  // APPEND
  product.append(
    nameCell,
    priceCell,
    quantityCell,
    subtotalCell,
    actionCell
  );

  document.querySelector('#cart tbody').appendChild(product);

  // RESET INPUTS
  nameInput.value = '';
  priceInput.value = '';

  updateCreateButton();
}

window.addEventListener('load', () => {
  const calculatePricesBtn =
    document.getElementById('calculate');

  calculatePricesBtn.addEventListener(
    'click',
    calculateAll
  );

  // REMOVE BUTTONS
  const removeButtons =
    document.querySelectorAll('.btn-remove');

  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  // CREATE PRODUCT
  const createProductBtn =
    document.getElementById('create');

  createProductBtn.addEventListener(
    'click',
    createProduct
  );

  // INPUT EVENTS
  const createProductInputs =
    document.querySelectorAll('.create-product input');

  createProductInputs.forEach((input) => {
    input.addEventListener(
      'input',
      updateCreateButton
    );
  });

  updateCreateButton();
});