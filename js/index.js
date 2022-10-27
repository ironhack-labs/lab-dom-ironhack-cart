// GLOBALS
const products = document.querySelectorAll('.product');
const totalValue = document.querySelector('#total-value span');
const cartBody = document.querySelector('#cart tbody');

// EVENT LISTENERS
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});

// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');

  let subtotalSum = +price * quantity;

  subtotal.innerText = subtotalSum;

  return subtotalSum;
}

function calculateAll() {
  // ITERATION 2
  let totalSum = 0;

  products.forEach((product) => {
    totalSum += updateSubtotal(product);
  });

  // ITERATION 3
  totalValue.innerText = totalSum;

  return totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The current target is', target);

  target.parentNode.parentNode.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productNameInput = document.querySelector(
    '.create-product input[type=text]'
  );
  const productPriceInput = document.querySelector(
    '.create-product input[type=number]'
  );

  let rowToAdd = document.createElement('tr');
  rowToAdd.className = 'product';
  rowToAdd.innerHTML = `
          <td class="name">
            <span>${productNameInput.value}</span>
          </td>
          <td class="price">$<span>${productPriceInput.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove btn-remove-created">Remove</button>
          </td>
  `;

  cartBody.appendChild(rowToAdd);
  calculateAll();
  console.log(products);

  productNameInput.value = '';
  productPriceInput.value = '0';
  // event listeners for newly created btns
  const removeBtnsCreated = document.querySelectorAll('.btn-remove-created');
  removeBtnsCreated.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
}
