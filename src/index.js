// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  const price = Number(priceElement.innerHTML);
  const quantity = Number(quantityElement.value);

  const subtotal = price * quantity;

  subtotalElement.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');

  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total = total + updateSubtotal(products[i]);
  }

  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const productRow = target.parentNode.parentNode;

  productRow.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const inputs = document.querySelectorAll('.create-product input');

  const productName = inputs[0].value;
  const productPrice = inputs[1].value;

  const tbody = document.querySelector('#cart tbody');

  const newRow = document.createElement('tr');
  newRow.classList.add('product');

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

  const newRemoveButton = newRow.querySelector('.btn-remove');
  newRemoveButton.addEventListener('click', removeProduct);

  inputs[0].value = '';
  inputs[1].value = '0';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');

  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
