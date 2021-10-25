// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;

  const subTotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let totalPrice = 0;
  products.forEach((p) => (totalPrice += updateSubtotal(p)));

  // ITERATION 3
  const totalValueElement = document.querySelector('#total-value');
  totalValueElement.textContent = `Total: $${totalPrice}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  const parent = target.parentNode;
  parent.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('#new-product-name').value;
  if (productName == '') return;
  document.querySelector('#new-product-name').value = '';
  const productPrice = document.querySelector('#new-product-price').value;
  document.querySelector('#new-product-price').value = '0';

  const productTableBody = document.querySelector('tbody');

  const tr = document.createElement('tr');
  productTableBody.appendChild(tr);
  tr.classList.add('product');

  let td = document.createElement('td');
  tr.appendChild(td);
  td.classList.add('name');
  let span = document.createElement('span');
  td.appendChild(span);
  span.innerText = span.textContent = productName;

  td = document.createElement('td');
  tr.appendChild(td);
  td.classList.add('price');
  td.innerText = '$';
  span = document.createElement('span');
  td.appendChild(span);
  span.innerText = span.textContent = `${(+productPrice).toFixed(2)}`;

  td = document.createElement('td');
  tr.appendChild(td);
  td.classList.add('quantity');
  let input = document.createElement('input');
  td.appendChild(input);
  input.type = 'number';
  input.min = 0;
  input.placeholder = 'Quantity';
  input.defaultValue = '0';

  td = document.createElement('td');
  tr.appendChild(td);
  td.classList.add('subtotal');
  td.innerText = '$';
  span = document.createElement('span');
  td.appendChild(span);
  span.innerText = span.textContent = `0`;

  td = document.createElement('td');
  tr.appendChild(td);
  td.classList.add('action');
  let btn = document.createElement('button');
  btn.classList.add('btn', 'btn-remove');
  td.appendChild(btn);
  btn.innerText = 'Remove';
  btn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.querySelectorAll('.btn.btn-remove');
  removeProductBtns.forEach((r) => r.addEventListener('click', removeProduct));

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
