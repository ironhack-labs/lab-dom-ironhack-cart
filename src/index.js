function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.textContent);
  const quantityValue = parseInt(quantity.value);

  const subtotalValue = priceValue * quantityValue;

  const subtotal = product.querySelector('.subtotal span');

  subtotal.textContent = subtotalValue.toFixed(2);
  return subtotalValue;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');

  let total = 0;

  allProducts.forEach(product => {
    total += updateSubtotal(product); 
  });

  const totalValue = document.querySelector('#total-value span');
  totalValue.textContent = total.toFixed(2);
}

window.addEventListener('load', () => {
  const calculateBtn = document.getElementById('calculate');
  calculateBtn.addEventListener('click', calculateAll);
});


function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.closest('.product');
  productRow.remove();
  calculateAll(); 
}

window.addEventListener('load', () => {
  const removeButtons = document.querySelectorAll('.btn-remove');
  
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
});


function createProduct() {
  const nameInput = document.querySelector('.create-product td:nth-child(1) input');
  const priceInput = document.querySelector('.create-product td:nth-child(2) input');

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value).toFixed(2);

  if (!name || price <= 0) {
    alert('Please enter a valid name and a price greater than 0.');
    return;
  }

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

  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(newRow);

  nameInput.value = '';
  priceInput.value = 0;

  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});