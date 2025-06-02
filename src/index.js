

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(btn => btn.addEventListener('click', removeProduct));

  
  const createBtn = document.getElementById('create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
});

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  const priceValue = parseFloat(price.textContent);
  const quantityValue = parseInt(quantity.value);

  const subtotal = priceValue * quantityValue;
  subtotalElement.textContent = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;

  allProducts.forEach(product => {
    total += updateSubtotal(product);
  });

  const totalValueElement = document.querySelector('#total-value span');
  totalValueElement.textContent = total.toFixed(2);
}

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.closest('.product');
  productRow.remove();
  calculateAll();
}

function createProduct() {
  const nameInput = document.querySelector('.create-product td input[type="text"]');
  const priceInput = document.querySelector('.create-product td input[type="number"]');

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value).toFixed(2);

  if (!name || isNaN(price) || price <= 0) return;

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
    <td class="subtotal">$<span>0.00</span></td>
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
