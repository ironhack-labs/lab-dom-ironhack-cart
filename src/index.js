// runs when page loads
window.addEventListener('load', () => {

  // Calculate button
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Remove buttons (existing products)
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  // Create product button
  const createButton = document.getElementById('create');
  if (createButton) {
    createButton.addEventListener('click', createProduct);
  }
});


// ITERATION 1
function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').textContent);
  const quantity = Number(product.querySelector('.quantity input').value);

  const subtotal = price * quantity;

  product.querySelector('.subtotal span').textContent = subtotal;

  return subtotal;
}


// ITERATION 2 + 3
function calculateAll() {
  const products = document.querySelectorAll('.product');

  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  document.querySelector('#total-value span').textContent = total;
}


//  ITERATION 4
function removeProduct(event) {
  const productRow = event.currentTarget.parentNode.parentNode;
  productRow.remove();

  calculateAll(); // update total after removal
}


//  ITERATION 5
function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value;
  const price = Number(priceInput.value);

  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  newRow.innerHTML = `
    <td class="name"><span>${name}</span></td>
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

  // add remove event to new button
  newRow.querySelector('.btn-remove')
        .addEventListener('click', removeProduct);

  // clear inputs
  nameInput.value = '';
  priceInput.value = '';
}