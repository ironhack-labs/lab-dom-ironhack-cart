// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = Number(price) * Number(quantity);
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  let total = 0;
  const products = document.querySelectorAll('.product');
  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const row = target.parentNode.parentNode;

  const table = target.parentNode.parentNode.parentNode;

  table.removeChild(row);
}

// ITERATION 5

function createProduct() {
  const newProductName = document.querySelector('.create-product .input-name');

  const newProductPrice = document.querySelector(
    '.create-product .input-price'
  );

  const cart = document.querySelector('#cart');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
  <td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `;
  const newRemoveBtn = newRow.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);

  cart.appendChild(newRow);

  newProductName.value = '';
  newProductPrice.value = '0';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');

  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');

  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
});
