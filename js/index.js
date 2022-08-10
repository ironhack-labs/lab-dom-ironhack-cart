// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalSpan = product.querySelector('.subtotal span');
  const subtotal = price * quantity;
  subtotalSpan.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const product = document.querySelectorAll('.product');
  let productsArray = [...product];

  let subtotal;
  let total = 0;

  for (let product of productsArray) {
    subtotal = updateSubtotal(product);
    total += subtotal;
  }

  // ITERATION 3
  let totalText = document.querySelector('#total-value span');
  totalText.innerHTML = total;
}
// ITERATION 4
function removeProduct(event) {
  const product = event.parentNode.parentNode;
  product.parentNode.removeChild(product);
  calculateAll();
}

// ITERATION 5
function createProduct() {
  const tbody = document.querySelector('tbody');
  const nameInput = document.querySelector('.create-product input').value;
  const priceInput = document.querySelector(
    '.create-product input[type=number]'
  ).value;
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
  <td class="name">
    <span>${nameInput}</span>
  </td>
  <td class="price">$<span>${priceInput}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;
  tbody.appendChild(newRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // With lots of StackOverflow help... "event delegation"
  document.querySelector('tbody').addEventListener('click', function (e) {
    if (e.target && e.target.matches('.btn-remove')) {
      removeProduct(e.target);
    }
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
