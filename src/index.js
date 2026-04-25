// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
   // Step 1: get price element
  const priceElement = product.querySelector('.price span');

  // Step 2: get quantity element
  const quantityElement = product.querySelector('.quantity input');

  // Step 3: extract values
  const price = parseFloat(priceElement.textContent);
  const quantity = parseInt(quantityElement.value);

  // Step 4: calculate subtotal
  const subtotal = price * quantity;

  // Step 5: get subtotal element
  const subtotalElement = product.querySelector('.subtotal span');

  // Step 6: update DOM
  subtotalElement.textContent = subtotal;

  // Step 7: return value
  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    updateSubtotal(product);
  });
}

  // ITERATION 3
  //... your code goes here
function calculateAll() {
  const products = document.querySelectorAll('.product');

  let total = 0;

  products.forEach(product => {
    total += updateSubtotal(product);
  });

  const totalElement = document.querySelector('#total-value span');
  totalElement.textContent = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  function removeProduct(event) {
  const button = event.currentTarget;

  // subir hasta la fila <tr class="product">
  const row = button.parentNode.parentNode;

  // eliminar la fila del tbody
  row.parentNode.removeChild(row);
}
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value;
  const price = parseFloat(priceInput.value);

  const tbody = document.querySelector('#cart tbody');

  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  newRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>

    <td class="price">
      $<span>${price.toFixed(2)}</span>
    </td>

    <td class="quantity">
      <input type="number" value="0" min="0" />
    </td>

    <td class="subtotal">
      $<span>0</span>
    </td>

    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  tbody.appendChild(newRow);

  // reset inputs
  nameInput.value = '';
  priceInput.value = 0;

  // activar remove en el nuevo botón
  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  //... your code goes here
  // ITERATION 4
  const removeButtons = document.querySelectorAll('.btn-remove');

  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createBtn = document.getElementById('create');

  if (createBtn) {

   createBtn.addEventListener('click', createProduct);
});
