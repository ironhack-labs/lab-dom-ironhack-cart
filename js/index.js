// ITERATION 1

function updateSubtotal(product) {
  const price = +product.querySelector('.price span').innerText;
  const quantity = +product.querySelector('.quantity input').value;

  const subtotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test
  // ITERATION 2
  const products = [...document.getElementsByClassName('product')];

  let total = 0;

  for (const singleProduct of products) {
    total += updateSubtotal(singleProduct);
  }

  // ITERATION 3

  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target.parentNode.parentNode;

  document.querySelector('tbody').removeChild(target);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productNameInput = document.querySelector(
    ".create-product input[placeholder='Product Name']"
  ).value;
  const productPriceInput = +document.querySelector(
    ".create-product input[placeholder='Product Price']"
  ).value;

  const newProduct = configureNewProductElement(
    productNameInput,
    productPriceInput
  );

  document.querySelector('tbody').appendChild(newProduct);

  document.querySelector(
    ".create-product input[placeholder='Product Name']"
  ).value = '';

  document.querySelector(
    ".create-product input[placeholder='Product Price']"
  ).value = 0;
}

function configureNewProductElement(productName, productPrice) {
  const newProductEl = document.createElement('tr');
  newProductEl.setAttribute('class', 'product');
  document.querySelector('tbody').appendChild(newProductEl);

  const productNameEl = document.createElement('td');
  productNameEl.setAttribute('class', 'name');
  const productNameSpan = document.createElement('span');
  productNameEl.appendChild(productNameSpan);
  newProductEl.appendChild(productNameEl);

  const productPriceEl = document.createElement('td');
  productPriceEl.setAttribute('class', 'price');
  productPriceEl.innerText = '$';
  const productPriceSpan = document.createElement('span');
  productPriceEl.appendChild(productPriceSpan);
  newProductEl.appendChild(productPriceEl);

  const productQuantityEl = document.createElement('td');
  productQuantityEl.setAttribute('class', 'quantity');
  const productQuantityInput = document.createElement('input');
  productQuantityInput.type = 'number';
  productQuantityInput.value = 0;
  productQuantityInput.min = 0;
  productQuantityInput.placeholder = 'Quantity';
  productQuantityEl.appendChild(productQuantityInput);
  newProductEl.appendChild(productQuantityEl);

  const subtotalEl = document.createElement('td');
  subtotalEl.setAttribute('class', 'subtotal');
  subtotalEl.innerText = '$';
  const subtotalSpan = document.createElement('span');
  subtotalEl.appendChild(subtotalSpan);
  newProductEl.appendChild(subtotalEl);

  const removeBtnEl = document.createElement('td');
  const removeBtn = document.createElement('button');
  removeBtn.setAttribute('class', 'btn btn-remove');
  removeBtn.textContent = 'Remove';
  removeBtnEl.appendChild(removeBtn);
  newProductEl.appendChild(removeBtnEl);

  newProductEl.querySelector('.name span').innerText = productName;
  newProductEl.querySelector('.price span').innerText = productPrice;

  newProductEl
    .querySelector('.btn-remove')
    .addEventListener('click', removeProduct);

  return newProductEl;
}

const createProductBtn = document.getElementById('create');

createProductBtn.addEventListener('click', createProduct);

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = [...document.getElementsByClassName('btn-remove')];

  for (const btn of removeProductBtns) {
    btn.addEventListener('click', removeProduct);
  }
});
