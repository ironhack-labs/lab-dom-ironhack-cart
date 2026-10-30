// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = parseInt(product.querySelector('.quantity input').value, 10);
  const subtotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
  return subtotal;
}

// ITERATION 2 & 3
function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  let total = 0;

  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }

  const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = total.toFixed(2);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const productRow = target.closest('tr.product');
  productRow.parentNode.removeChild(productRow);

  calculateAll();
}

// ITERATION 5
function createProduct() {
  const nameInput = document.querySelector('.new-product-name');
  const priceInput = document.querySelector('.new-product-price');

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (!name || isNaN(price) || price <= 0) {
    alert('Please enter a valid product name and price.');
    return;
  }

  const newRow = document.createElement('tr');
  newRow.className = 'product';

  newRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  document.querySelector('#cart tbody').appendChild(newRow);

  const newRemoveBtn = newRow.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', removeProduct);
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});