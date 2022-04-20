// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  const multiplication = price.innerHTML * quantity.value;
  subtotal.innerHTML = multiplication;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  let allProducts = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }

  let totalSpan = document.querySelector('#total-value span');
  totalSpan.innerHTML = total;

  // ITERATION 3
}

// ITERATION 4

function removeProduct(event) {
  const rowToRemove = target.parentNode.parentNode;
  const tbody = target.parentNode.parentNode.parentNode;
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  tbody.removeChild(rowToRemove);
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('input[type="text"]');
  const priceInput = document.querySelector(
    '.create-product input["number"]'
  ).value;
  let fixedPrice = Number(priceInput).toFixed(2);
  let tbody = document.getElementsByTagName('tbody')[0];
  let newProductRow = document.createElement('tr');
  newProductRow.classList.add('product');
  newProductRow.innerHTML = ` <tr class="product">
  <td class="name">
    <span>${nameInput.value}</span>
  </td>
  <td class="price">$<span>${fixedPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;

  tbody.appendChild(newProductRow);
  const removeBtn = newProductrow.querySelector(.btn-remove);
  removeBtn.onclick = removeProduct;

  nameInput.value = '';
  priceInput.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < allRemoveButtons.length; i++) {
    allRemoveButtons[i].onclick = removeProduct;
  }

  let createButton = document.getElementById('create');
  createButton.onclick = createProduct;
});
