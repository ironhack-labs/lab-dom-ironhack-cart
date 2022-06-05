// Calculate subtotal amount
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalEl = product.querySelector('.subtotal span');

  let subtotal = price * quantity;
  subtotalEl.innerHTML = subtotal;

  return subtotal;
}

// Calculate total amount
function calculateAll() {
  const totalPrice = document.querySelector('#total-value span');
  const allProducts = document.getElementsByClassName('product');

  let total = 0;
  Array.from(allProducts).forEach(
    (product) => (total += updateSubtotal(product))
  );

  totalPrice.innerHTML = total;
}

// Remove product
function removeProduct(event) {
  // const target = event.currentTarget;
  const removeBtn = event.target;
  removeBtn.parentNode.parentNode.remove();
}

// Add product
function createProduct() {
  const newProductName = document.querySelector('.new-product-name');
  const newProductPrice = document.querySelector('.new-product-price');
  const listItem = document.getElementsByTagName('tbody');
  const newItem = document.createElement('tr');
  newItem.classList.add('product');
  newItem.innerHTML = `
  <td class="name"><span>${newProductName.value}</span></td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;
  const newRemoveBtns = newItem.querySelector('button');
  newRemoveBtns.addEventListener('click', removeProduct);
  listItem[0].appendChild(newItem);
  newProductName.value = '';
  newProductPrice.value = 0;
}

// Events
window.addEventListener('load', () => {
  // Calculate total button
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Remove product buttons
  const removeBtns = document.getElementsByClassName('btn-remove');
  Array.from(removeBtns).forEach((btn) =>
    btn.addEventListener('click', removeProduct)
  );

  // Add product button
  const addButton = document.getElementById('create');
  addButton.addEventListener('click', createProduct);
});
