// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = Number(price.textContent);
  const quantityValue = Number(quantity.value);

  const subtotalValue = priceValue * quantityValue;

  const subtotal = product.querySelector('.subtotal span');

  subtotal.textContent = subtotalValue;
  return subtotalValue;
}

// ITERATION 2

function calculateAll() {
  const products = document.querySelectorAll('#cart .product');

  products.forEach(product => {
    updateSubtotal(product);
  });
}

  // ITERATION 3

  function calculateAll() {
  const products = document.querySelectorAll('#cart .product');
  let total = 0;

  products.forEach(product => {
    total += updateSubtotal(product);
  });

  const totalValue = document.querySelector('#total-value');
  totalValue.textContent = total;
}




// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.parentNode.parentNode;
  row.parentNode.removeChild(row);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (name === '' || price <= 0) return;

  const row = document.createElement('tr');
  row.className = 'product';
  row.innerHTML = `
    <td class="name"><span>${name}</span></td>
    <td class="price">$<span>${price.toFixed(2)}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  document.querySelector('#cart tbody').appendChild(row);

  row.querySelector('.btn-remove').addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  document.getElementById('create').addEventListener('click', createProduct);
});
