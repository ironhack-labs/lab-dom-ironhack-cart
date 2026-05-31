// ITERATION 1: Calculate and display subtotal for a single product row

function updateSubtotal(product) {
  const priceSpan = product.querySelector('.price span');
  const quantityInput = product.querySelector('.quantity input');

  const price = parseFloat(priceSpan.textContent);
  const quantity = parseInt(quantityInput.value, 10) || 0;

  const subtotal = price * quantity;

  const subtotalSpan = product.querySelector('.subtotal span');
  subtotalSpan.textContent = subtotal.toFixed(2);

  return subtotal;
}

// ITERATION 2 & 3: Update all subtotals and the cart total

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  const totalSpan = document.querySelector('#total-value span');
  totalSpan.textContent = total.toFixed(2);
}

// ITERATION 4: Remove a product row and recalculate totals

function removeProduct(event) {
  const productRow = event.currentTarget.closest('.product');
  productRow.remove();
  calculateAll();
}

// ITERATION 5: Add a new product row from the create form

function createProduct() {
  const createRow = document.querySelector('.create-product');
  const nameInput = createRow.querySelector('input[type="text"]');
  const priceInput = createRow.querySelector('input[type="number"]');

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (!name || !price) {
    return;
  }

  const tbody = document.querySelector('#cart tbody');
  const newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
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

  tbody.appendChild(newRow);

  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = '0';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
