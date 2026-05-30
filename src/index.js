// ITERATION 1


function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  const price = parseFloat(priceElement.innerText);
  const quantity = parseInt(quantityElement.value);

  const subtotal = price * quantity;

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotal.toFixed(2); // Qiymətin qəpik hissəsi üçün .toFixed(2) istifadə etmək yaxşı təcrübədir

  return subtotal;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  
  let totalSum = 0;

  for (let product of allProducts) {
    totalSum += updateSubtotal(product);
  }

  const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = totalSum.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const buttonClicked = event.currentTarget;
  
  const productRow = buttonClicked.parentNode.parentNode;
  
  productRow.parentNode.removeChild(productRow);

  calculateAll();
}
// ITERATION 5

function createProduct() {
  const createProductRow = document.querySelector('.create-product');
  const nameInput = createProductRow.querySelector('input[type="text"]');
  const priceInput = createProductRow.querySelector('input[type="number"]');

  const name = nameInput.value;
  const price = parseFloat(priceInput.value).toFixed(2);

  if (!name || price <= 0) {
    alert('Zəhmət olmasa düzgün məhsul adı və qiyməti daxil edin!');
    return;
  }

  const tbody = document.querySelector('#cart tbody');

  const newRow = document.createElement('tr');
  newRow.className = 'product';

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

  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  tbody.appendChild(newRow);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');
  if (createButton) {
    createButton.addEventListener('click', createProduct);
  }
});