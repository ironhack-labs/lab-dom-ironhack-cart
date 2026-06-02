window.addEventListener('load', () => {
  document
    .getElementById('calculate')
    .addEventListener('click', calculateAll);

  document.querySelectorAll('.btn-remove').forEach(btn => {
    btn.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');

  if (createButton) {
    createButton.addEventListener('click', createProduct);
  }
});

function updateSubtotal(productRow) {
  const price = parseFloat(
    productRow.querySelector('.price span').textContent
  );

  const quantity = parseInt(
    productRow.querySelector('.quantity input').value,
    10
  );

  const subtotal = price * quantity;

  productRow.querySelector('.subtotal span').textContent = subtotal;

  return subtotal;
}

function calculateAll() {
  const productRows = document.querySelectorAll('.product');

  const grandTotal = [...productRows].reduce(
    (sum, row) => sum + updateSubtotal(row),
    0
  );

  const totalDisplay = document.querySelector('#total-value span');

  if (totalDisplay) {
    totalDisplay.textContent = grandTotal;
  }
}

function removeProduct(event) {
  const row = event.target.closest('.product');

  if (row) {
    row.remove();
  }

  calculateAll();
}

function createProduct() {
  const nameInput = document.querySelector(
    '.create-product input[type="text"]'
  );

  const priceInput = document.querySelector(
    '.create-product input[type="number"]'
  );

  const name = nameInput.value.trim();
  const price = priceInput.value;

  if (!name || !price) return;

  const product = document.createElement('tr');

  product.className = 'product';

  product.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">
      $<span>${price}</span>
    </td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity">
    </td>
    <td class="subtotal">
      $<span>0</span>
    </td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  document.querySelector('#cart tbody').appendChild(product);

  product
    .querySelector('.btn-remove')
    .addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = '';
}