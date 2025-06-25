window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseInt(quantity.value);

  const subtotalValue = priceValue * quantityValue;
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = subtotalValue.toFixed(2);
  return subtotalValue;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;

  allProducts.forEach(product => {
    total += updateSubtotal(product);
  });

  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total.toFixed(2);
}

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.closest('.product');
  productRow.remove();
  calculateAll();
}

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value).toFixed(2);

  if (!name || isNaN(price)) return;

  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  newRow.innerHTML = `
    <td class="name"><span>${name}</span></td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  const tableBody = document.querySelector('#cart tbody');
  tableBody.appendChild(newRow);

  // Agregar el event listener al nuevo botón "Remove"
  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = 0;
}
