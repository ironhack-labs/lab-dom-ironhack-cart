// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let total = 0;

  const products = document.querySelectorAll('.product');

  for (const product of products) {
    total += updateSubtotal(product);
  }

  document.querySelector('#total-value span').innerText = total;
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //... your code goes here
  const line = target.parentElement.parentElement;
  const table = line.parentElement;
  table.removeChild(line);
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const newProduct = document.querySelector('.create-product');
  const name = newProduct.querySelectorAll('input')[0];
  const price = newProduct.querySelectorAll('input')[1];
  const table = document.querySelector('tbody');

  const newLine = document.createElement('tr');
  newLine.classList.add('product');
  newLine.innerHTML = `
  <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${(+price.value).toFixed(2)}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`;
  newLine.querySelector('.btn-remove').addEventListener('click', removeProduct);

  table.appendChild(newLine);

  name.value = '';
  price.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (const btn of removeBtns) {
    btn.addEventListener('click', removeProduct);
  }

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
