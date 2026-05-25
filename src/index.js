function updateSubtotal(product) {
  const priceString = product.querySelector('.price span').innerText;
  const quantityString = product.querySelector('.quantity input').value;

  const priceValue = parseFloat(priceString);
  const quantityValue = parseInt(quantityString, 10);

  const subtotalValue = priceValue * quantityValue;

  const subtotalDOM = product.querySelector('.subtotal span');
  subtotalDOM.innerText = subtotalValue.toFixed(2);

  return subtotalValue;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  let cartTotalSum = 0;

  Array.from(allProducts).forEach((singleProductRow) => {
    cartTotalSum += updateSubtotal(singleProductRow);
  });

  const totalDOM = document.querySelector('#total-value span');
  totalDOM.innerText = cartTotalSum.toFixed(2);
}

function removeProduct(event) {
  const targetBtn = event.currentTarget;
  const productRow = targetBtn.parentNode.parentNode;
  productRow.parentNode.removeChild(productRow);
  calculateAll();
}

function createProduct() {
  const createRow = document.querySelector('.create-product');
  const nameInput = createRow.querySelector('input[type="text"]');
  const priceInput = createRow.querySelector('input[type="number"]');

  const productName = nameInput.value;
  const productPrice = parseFloat(priceInput.value).toFixed(2);

  if (!productName || priceInput.value <= 0) {
    return;
  }

  const newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(newRow);

  const newRemoveBtn = newRow.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const initialRemoveButtons = document.querySelectorAll('.btn-remove');
  initialRemoveButtons.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  if (createProductBtn) {
    createProductBtn.addEventListener('click', createProduct);
  }
});