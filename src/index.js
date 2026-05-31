// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  const price = parseFloat(priceElement.innerHTML);
  const quantity = parseInt(quantityElement.value);
  
  const subtotal = price * quantity;

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;
  
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let totalValue = 0;
  
  for (let product of allProducts) {
    totalValue += updateSubtotal(product);
  }

  // ITERATION 3
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const row = target.parentNode.parentNode;
  row.parentNode.removeChild(row);
  
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const createRow = document.querySelector('.create-product');
  const nameInput = createRow.querySelector('input[type="text"]');
  const priceInput = createRow.querySelector('input[type="number"]');

  const nameValue = nameInput.value;
  const priceValue = parseFloat(priceInput.value).toFixed(2);

  if (!nameValue || !priceInput.value) {
    alert('Please enter product name and price.');
    return;
  }

  const tableBody = document.querySelector('#cart tbody');

  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const newRemoveBtn = newRow.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);

  tableBody.appendChild(newRow);

  nameInput.value = '';
  priceInput.value = 0;
}

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
