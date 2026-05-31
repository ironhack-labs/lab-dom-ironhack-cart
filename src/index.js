// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceElement = product.querySelector('.price span');
  const quantityInput = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  const price = Number(priceElement.innerText);
  const quantity = Number(quantityInput.value);

  const subtotal = price * quantity;

  subtotalElement.innerText = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // ITERATION 2

  const products = document.querySelectorAll('.product');

  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  // ITERATION 3

  const totalElement = document.querySelector('#total-value span');

  totalElement.innerText = total.toFixed(2);
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

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');

  const priceInput = document.querySelector(
    '.create-product input[type="number"]'
  );

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (name === '' || price <= 0) {
    return;
  }

  const product = document.createElement('tr');

  product.classList.add('product');

  product.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>

    <td class="price">$<span>${price.toFixed(2)}</span></td>

    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>

    <td class="subtotal">$<span>0</span></td>

    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const cartBody = document.querySelector('#cart tbody');

  cartBody.appendChild(product);

  const removeButton = product.querySelector('.btn-remove');

  removeButton.addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = 0;

  calculateAll();
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