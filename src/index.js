function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = Number(quantity.value);

  const subtotalValue = priceValue * quantityValue;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalValue.toFixed(2);

  return subtotalValue;
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total.toFixed(2);
}

function removeProduct(event) {
  const productRow = event.currentTarget.parentNode.parentNode;
  productRow.parentNode.removeChild(productRow);
  calculateAll();
}

function setupRemoveButtons() {
  const removeButtons = document.querySelectorAll('.btn-remove');

  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
}

function createProduct() {
  const createRow = document.querySelector('.create-product');
  const nameInput = createRow.querySelector('input[type="text"]');
  const priceInput = createRow.querySelector('input[type="number"]');

  const productName = nameInput.value;
  const productPrice = Number(priceInput.value).toFixed(2);

  const tbody = document.querySelector('#cart tbody');
  const newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
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
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  setupRemoveButtons();

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
