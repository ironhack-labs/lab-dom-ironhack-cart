// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = Number(price.innerHTML);
  const quantityValue = Number(quantity.value);
  const subtotalValue = priceValue * quantityValue; 
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  let totalValue = 0;

  for (let product of products) {
    totalValue += updateSubtotal(product);
  }
  const total = document.querySelector('#total-value span');

  total.innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const product = target.parentNode.parentNode;

  product.remove();

  calculateAll();
}
// ITERATION 5

function createProduct() {

  const productNameInput = document.querySelector('.create-product input[type="text"]');

  const productPriceInput = document.querySelector('.create-product input[type="number"]');

  const name = productNameInput.value;

  const price = productPriceInput.value;

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

  const removeBtn = newRow.querySelector('.btn-remove');

  removeBtn.addEventListener('click', removeProduct);

  productNameInput.value = '';

  productPriceInput.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const deleteProductBtns = document.querySelectorAll('.btn-remove');

  for (let button of deleteProductBtns) {
    button.addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');

  createBtn.addEventListener('click', createProduct);
});
