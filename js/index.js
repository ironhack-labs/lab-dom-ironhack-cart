// ITERATION 1

// const { product } = require('puppeteer');

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = Number(price) * Number(quantity);

  let DOMSubTotal = product.querySelector('.subtotal span');
  DOMSubTotal.innerHTML = subTotal.toFixed(2);

  return subTotal;
}

function calculateAll() {
  // ITERATION 2

  let result = 0;

  const allProducts = document.getElementsByClassName('product');

  for (let i = 0; i < allProducts.length; i++) {
    const currentProduct = allProducts[i];
    result += updateSubtotal(currentProduct);
  }

  // ITERATION 3

  let DOMTotal = document.querySelector('#total-value span');
  DOMTotal.innerText = result.toFixed(2);

  console.log(result);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const grandParentNode = target.parentNode.parentNode;

  grandParentNode.parentNode.removeChild(grandParentNode);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productContainer = document.getElementById('product-container'); // parent

  const product = document.createElement('tr'); // to product-container
  product.className = 'product';

  const name = document.createElement('td'); // to product
  name.className = 'name';

  const spanNameValue = document.createElement('span'); // to name
  spanNameValue.innerText = 'hi';

  const price = document.createElement('td'); // to product
  price.className = 'price';

  const spanPriceValue = document.createElement('span'); // to price
  spanPriceValue.innerText = '$3';

  const quantity = document.createElement('td'); // to product
  quantity.className = 'quantity';

  const input = document.createElement('input'); // to quantity

  const subtotal = document.createElement('td');
  subtotal.className = 'subtotal';

  const spanSubTotal = document.createElement('span');
  spanSubTotal.id = 'subtotal';
  spanSubTotal.innerText = '$3';

  const action = document.createElement('td');
  action.className = 'action';

  const button = document.createElement('button');
  button.classList = 'btn btn-remove';
  button.innerText = Remove;

  productContainer.appendChild(product);
  product.appendChild(name);
  name.appendChild(spanNameValue);
  product.appendChild(price);
  price.appendChild(spanPriceValue);
  product.appendChild(quantity);
  quantity.appendChild(input);
  product.appendChild(subtotal);
  product.appendChild(action);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    const currentRemoveBtn = removeButtons[i];

    currentRemoveBtn.addEventListener('click', removeProduct);
  }
});
