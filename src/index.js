function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
}


function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach((product) => {
    total += updateSubtotal(product);
  });
  document.querySelector('#total-value span').innerText = total;
}

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.closest('.product');
  product.remove();
  calculateAll();
}

function updateCreateButton() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');
  const createButton = document.getElementById('create');
  const name = nameInput.value.trim();
  const price = priceInput.value;

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
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (!name || price <= 0) {
    updateCreateButton();
    return;
  }

  const product = document.createElement('tr');
  product.classList.add('product');

  const nameCell = document.createElement('td');
  nameCell.classList.add('name');
  const nameSpan = document.createElement('span');
  nameSpan.innerText = name;
  nameCell.appendChild(nameSpan);

  const priceCell = document.createElement('td');
  priceCell.classList.add('price');
  const priceSpan = document.createElement('span');
  priceCell.append('$', priceSpan);
  priceSpan.innerText = price.toFixed(2);

  const quantityCell = document.createElement('td');
  quantityCell.classList.add('quantity');

  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';

  quantityInput.value = 0;
  quantityInput.min = 0;

  quantityInput.placeholder = 'Quantity';
  quantityCell.appendChild(quantityInput);

  const subtotalCell = document.createElement('td');
  subtotalCell.classList.add('subtotal');

  const subtotalSpan = document.createElement('span');
  subtotalCell.append('$', subtotalSpan);

  subtotalSpan.innerText = 0;

  const actionCell = document.createElement('td');
  actionCell.classList.add('action');

  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-remove');

  removeButton.innerText = 'Remove';
  removeButton.addEventListener('click', removeProduct);

  actionCell.appendChild(removeButton);

  product.append(nameCell, priceCell, quantityCell, subtotalCell, actionCell);
  document.querySelector('#cart tbody').appendChild(product);

  nameInput.value = '';
  priceInput.value = 0;
  
  updateCreateButton();
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

  const createProductInputs = document.querySelectorAll('.create-product input');
  createProductInputs.forEach((input) => {
    input.addEventListener('input', updateCreateButton);
  });

  updateCreateButton();
});
