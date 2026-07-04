// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const subtotalValue = Number(price.innerHTML) * Number(quantity.value);
  subtotal.innerHTML = subtotalValue;

  return subtotalValue;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  const totalValue = document.querySelector('#total-value span');
  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;

  product.parentNode.removeChild(product);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');
  const tbody = document.querySelector('#cart tbody');

  const product = document.createElement('tr');
  product.classList.add('product');

  product.innerHTML = `
    <td class="name">
      <span>${nameInput.value}</span>
    </td>
    <td class="price">$<span>${priceInput.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  product.querySelector('.btn-remove').addEventListener('click', removeProduct);
  tbody.appendChild(product);

  nameInput.value = '';
  priceInput.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  if (createProductBtn) {
    createProductBtn.addEventListener('click', createProduct);
  }
});
