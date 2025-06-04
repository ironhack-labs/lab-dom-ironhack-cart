// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = parseFloat(product.querySelector('.price span').innerText);
  let quantity = parseInt(product.querySelector('.quantity input').value);

  let subtotal = quantity * price;
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);

  console.log('Subtotal:', subtotal);
  return subtotal;
}

// ITERATION 2 & 3
function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;

  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  });

  document.querySelector('#total-value span').innerText = total.toFixed(2);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const productRow = target.closest('.product'); // find the row
  productRow.remove(); // remove it from DOM

  calculateAll(); // recalculate total after removal
}

// ITERATION 5
function createProduct() {
  const nameInput = document.querySelector(
    '.create-product input[type="text"]',
  );
  const priceInput = document.querySelector(
    '.create-product input[type="number"]',
  );

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value).toFixed(2);

  if (!name || isNaN(price)) return; // simple validation

  const tbody = document.querySelector('#cart tbody');

  const newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
    <td class="name"><span>${name}</span></td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  tbody.appendChild(newRow);

  // Add event listener for new remove button
  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

  // Clear inputs
  nameInput.value = '';
  priceInput.value = 0;
}

// Add all event listeners when page loads
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
