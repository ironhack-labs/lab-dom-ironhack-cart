// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

   // Step 1: Extract the price and quantity from the DOM
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  const price = parseFloat(priceElement.innerHTML);
  const quantity = parseInt(quantityElement.value);

  // Step 2: Calculate the subtotal
  const subtotal = price * quantity;

  // Step 3: Update the subtotal in the DOM
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal.toFixed(2); 

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let total = 0;

  allProducts.forEach(product => {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  const totalElement = document.querySelector('#total-value span');
  totalElement.textContent = total.toFixed(2);
}

// ITERATION 4
function setupRemoveButtons() {
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productRow = target.closest('.product');
  productRow.remove();
  calculateAll();
}
window.addEventListener('load', () => {
  setupRemoveButtons();
});
// ITERATION 5

function createProduct() {
  //... your code goes here
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value;
  const price = parseFloat(priceInput.value).toFixed(2);

  const productRow = document.createElement('tr');
  productRow.classList.add('product');

  productRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const productTable = document.querySelector('#cart tbody');
  productTable.appendChild(productRow);

  nameInput.value = '';
  priceInput.value = '';

  const removeBtn = productRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
