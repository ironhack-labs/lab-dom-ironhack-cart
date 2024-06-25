// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;

  const subtotalNode = product.querySelector('.subtotal span');
  subtotalNode.textContent = subtotal;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll('.product');
  const subtotals = Array.from(products).map(updateSubtotal);

  // ITERATION 3
  let total = sum(subtotals);
  let totalNode = document.querySelector('#total-value span');
  totalNode.textContent = total;
}

// ITERATION 4
let removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach((button) => {
  button.addEventListener('click', removeProduct);
});

function removeProduct(event) {
  const target = event.currentTarget;
  const productNode = target.closest('.product');
  productNode.remove();
  calculateAll();
}

// ITERATION 5
const createButton = document.querySelector('#create');
createButton.addEventListener('click', createProduct);
function createProduct() {
  const createProductRow = document.querySelector('.create-product');
  const nameNode = createProductRow.querySelector('input[type="text"]');
  const priceNode = createProductRow.querySelector('input[type="number"]');
  const tbody = document.querySelector('#cart tbody');

  const name = nameNode.value;
  const price = priceNode.value;

  if (name.trim().length < 1) {
    alert('Please enter a product name');
    return;
  }

  if (price <= 0) {
    alert('Please enter a price greater than 0');
    return;
  }

  const newProductRow = document.createElement('tr');
  newProductRow.className = 'product';
  newProductRow.innerHTML =
    `<td class="name">` +
    `  <span>${name}</span>` +
    `</td>` +
    `<td class="price">$<span>${price}</span></td>` +
    `<td class="quantity">` +
    `  <input type="number" value="0" min="0" placeholder="Quantity" />` +
    `</td>` +
    `<td class="subtotal">$<span>0</span></td>` +
    `<td class="action">` +
    `  <button class="btn btn-remove">Remove</button>` +
    `</td>`;

  const removeButton = newProductRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

  tbody.appendChild(newProductRow);

  nameNode.value = '';
  priceNode.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

// Helper functions
function sum(array) {
  return array.reduce((acc, value) => acc + value, 0);
}