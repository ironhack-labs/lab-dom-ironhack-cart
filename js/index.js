function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  const subSum = price * quantity;

  subtotal.innerText = subSum.toFixed(2);

  return subSum;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = document.querySelector('#total-value span');
  let sum = 0;

  products.forEach((product) => {
    sum += updateSubtotal(product);
  });
  total.innerText = sum.toFixed(2);
}

function removeProduct(event) {
  document.querySelector('tbody').deleteRow(event.currentTarget);
  calculateAll();
}

function createProduct() {
  const name = document.querySelector('.create-product input[type="text"]');
  const price = document.querySelector('.create-product input[type="number"]');
  const newProductRow = document.createElement('tr');

  newProductRow.className = 'product';
  newProductRow.innerHTML = `
  <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${parseFloat(price.value)}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;

  newProductRow
    .querySelector('.btn-remove')
    .addEventListener('click', removeProduct);

  if (name.value.length > 0 && price.value.length > 0) {
    document.querySelector('tbody').appendChild(newProductRow);
    name.value = '';
    price.value = '';
    name.focus();
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const createProductBtn = document.querySelector('#create');
  const removeBtns = document.querySelectorAll('.btn-remove');

  calculatePricesBtn.addEventListener('click', calculateAll);
  createProductBtn.addEventListener('click', createProduct);

  removeBtns.forEach((btn) => btn.addEventListener('click', removeProduct));
});
