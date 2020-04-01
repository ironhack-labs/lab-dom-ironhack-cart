/*jshint esversion: 6 */
function updateSubtotal(product) {
  // ITERATION 1
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = quantity.value * Number(price.innerText);
  return Number(subtotal.innerText);
}

function calculateAll() {
  // ITERATION 2
  let total = 0;
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    total += updateSubtotal(product);
  });
  // ITERATION 3
  const totalValue = document.getElementById('total-value');
  totalValue.innerText = `Total: $${total}`;
}

// ITERATION 4
function removeProduct(event) {
  document.querySelector('tbody').removeChild(event.currentTarget.parentNode.parentNode);
}

// ITERATION 5
function createProduct() {
  const newProductName = document.querySelector('.new-product-name');
  const newProductPrice = document.querySelector('.new-product-price');
  const productTable = document.querySelector('tbody');
  const newTable = document.createElement('tr');
  console.log(newProductPrice.value);
  // Check if a new product has been added
  if (!newProductName.value) {
    window.alert('Please add product Name');
    return;
  }
  if (newProductPrice.value == 0) {
    window.alert('Please add product price');
    return;
  }
  newTable.innerHTML = `<tr class="product">
  <td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
  newTable.className = 'product';
  productTable.appendChild(newTable);
  addEventsToNewRmBnt();
  newProductPrice.value = '0';
  newProductName.value = '';
}

function addEventsToNewRmBnt() {
  // add click listener to a button
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => button.addEventListener('click', removeProduct));
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  addEventsToNewRmBnt();
});
