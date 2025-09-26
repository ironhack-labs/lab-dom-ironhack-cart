// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceElem = product.querySelector('.price span');
  const quantityInput = product.querySelector('.quantity input');

  const price = Number(priceElem.textContent);
  const quantity = Number(quantityInput.value);

  const subtotal = price * quantity;

  const subtotalElem = product.querySelector('.subtotal span');
  subtotalElem.textContent = subtotal.toFixed(2);

  return subtotal;
}

// ITERATION 2 & 3
function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;

  products.forEach((prod) => {
    total += updateSubtotal(prod);
  });

  const totalValueElem = document.querySelector('#total-value span');
  totalValueElem.textContent = total.toFixed(2);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const productRow = target.closest('.product');
  if (productRow) {
    productRow.remove();
    calculateAll();
  }
}

// ITERATION 5
function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const nameValue = nameInput.value.trim();
  const priceValue = Number(priceInput.value);

  if (!nameValue || isNaN(priceValue) || priceValue < 0) return;

  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name"><span>${nameValue}</span></td>
    <td class="price">$<span>${priceValue.toFixed(2)}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(newRow);

  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = 0;
}

// Event Listeners beim Laden setzen
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

  const createBtn = document.getElementById('create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
});