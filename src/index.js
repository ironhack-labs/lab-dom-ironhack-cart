function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerText);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  document.querySelector('#total-value span').innerText = total;
}

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.parentNode.parentNode;
  row.parentNode.removeChild(row);
  calculateAll();
}

function createProduct() {
  const footRow = document.querySelector('.create-product');
  const nameInput = footRow.querySelector('td:nth-child(1) input');
  const priceInput = footRow.querySelector('td:nth-child(2) input');

  const name = nameInput.value.trim();
  const price = Number(priceInput.value).toFixed(2);

  if (!name || Number(price) <= 0) {
    return;
  }

  const tbody = document.querySelector('#cart tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  tbody.appendChild(newRow);

  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
});
