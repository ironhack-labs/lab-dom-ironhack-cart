function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  const subtotal = +price * +quantity;

  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  let totalPricesSum = 0;
  const products = document.querySelectorAll('.product');
  products.forEach((singleProduct) => {
    totalPricesSum += updateSubtotal(singleProduct);
  });

  const totalPriceElement = document.querySelector('#total-value span');

  totalPriceElement.innerText = totalPricesSum;
}

// ITERATION 4

function removeProduct(event) {
  const productToRemove = event.currentTarget.parentNode.parentNode;
  const tableBody = productToRemove.parentNode;

  tableBody.removeChild(productToRemove);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productNameElement = document.querySelector('#new-product-name');
  const productPriceElement = document.querySelector('#new-product-price');

  const productsContainer = document.querySelector('tbody');

  const tr = document.createElement('tr');
  tr.classList.add('product');

  const tdName = document.createElement('td');
  tdName.classList.add('name');
  const spanName = document.createElement('span');
  spanName.innerText = productNameElement.value;
  tdName.appendChild(spanName);

  const tdPrice = document.createElement('td');
  tdPrice.classList.add('price');
  const spanValue = document.createElement('span');
  spanValue.innerText = productPriceElement.value;
  tdPrice.innerText = '$';
  tdPrice.appendChild(spanValue);

  const tdQuantity = document.createElement('td');
  tdQuantity.classList.add('quantity');
  const inputQuantity = document.createElement('input');
  inputQuantity.setAttribute('type', 'number');
  inputQuantity.setAttribute('value', '0');
  inputQuantity.setAttribute('min', '0');
  inputQuantity.setAttribute('placeholder', 'Quantity');
  tdQuantity.appendChild(inputQuantity);

  const tdSubtotal = document.createElement('td');
  tdSubtotal.classList.add('subtotal');
  const spanSubtotal = document.createElement('span');
  spanSubtotal.innerText = '0';
  tdSubtotal.innerText = '$';
  tdSubtotal.appendChild(spanSubtotal);

  const tdAction = document.createElement('td');
  tdAction.classList.add('action');
  const buttonRemove = document.createElement('button');
  buttonRemove.setAttribute('class', 'btn btn-remove');
  buttonRemove.innerText = 'Remove';
  tdAction.appendChild(buttonRemove);

  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  tr.appendChild(tdQuantity);
  tr.appendChild(tdSubtotal);
  tr.appendChild(tdAction);

  productsContainer.appendChild(tr);

  const removeButtons = productsContainer.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.onclick = removeProduct;
  });

  productNameElement.value = '';
  productPriceElement.value = 0;
}

window.addEventListener('load', () => {
  // Calcular o preço total do carrinho
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.onclick = calculateAll;

  // Criar um novo produto
  const createButton = document.getElementById('create');
  createButton.onclick = createProduct;

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.onclick = removeProduct;
  });
});