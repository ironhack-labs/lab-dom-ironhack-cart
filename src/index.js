// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = parseFloat(product.querySelector('.price span').textContent);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = price * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  const products = document.querySelectorAll('.product');
  products.forEach(product => {

    const price = parseFloat(product.querySelector('.price span').textContent);
    const quantity = parseInt(product.querySelector('.quantity input').value);
    const subtotalEl = product.querySelector('.subtotal span');
    const subtotal = price * quantity;
    total += subtotal
    subtotalEl.textContent = subtotal;
  });

  // ITERATION 3
  //... your code goes here

  const totalEl = document.querySelector('#total-value span');
  totalEl.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  event.target.parentElement.parentElement.textContent = ''
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const inputs = document.querySelectorAll('.create-product td input');
  const name = inputs[0].value;
  const price = inputs[1].value;

  const tr = document.createElement('tr');
  tr.classList.add('product');


  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;
  const nameTd = document.createElement('td');
  nameTd.classList.add('name');
  nameTd.appendChild(nameSpan);
  tr.appendChild(nameTd);
  inputs[0].value = ''

  const priceSpan = document.createElement('span');
  priceSpan.textContent = price;
  const priceTd = document.createElement('td');
  priceTd.classList.add('price')
  priceTd.textContent = '$';
  priceTd.appendChild(priceSpan);
  tr.appendChild(priceTd);
  inputs[1].value = 0;

  const quantityInput = document.createElement('input');
  quantityInput.setAttribute('type', 'number');
  quantityInput.setAttribute('value', 0);
  quantityInput.setAttribute('min', 0);
  quantityInput.setAttribute('placeholder', 'Quantity');
  const quantityTd = document.createElement('td');
  quantityTd.classList.add('quantity')
  quantityTd.appendChild(quantityInput);
  tr.appendChild(quantityTd);

  const subtotalSpan = document.createElement('span');
  subtotalSpan.textContent = 0;
  const subtotalTd = document.createElement('td');
  subtotalTd.classList.add('subtotal')
  subtotalTd.textContent = '$';
  subtotalTd.appendChild(subtotalSpan);
  tr.appendChild(subtotalTd);

  const removeButton = document.createElement('button');
  removeButton.classList.add('btn');
  removeButton.classList.add('btn-remove')
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', (e) => removeProduct(e));
  const removeTd = document.createElement('td');
  removeTd.classList.add('action');
  removeTd.appendChild(removeButton);
  tr.appendChild(removeTd);

  const table = document.querySelector('tbody');

  table.appendChild(tr);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons
    .forEach((el) => el
      .addEventListener('click', (e) => removeProduct(e))
    )

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
