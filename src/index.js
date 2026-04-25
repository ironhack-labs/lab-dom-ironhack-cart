// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseInt(quantity.value);

  const subtotal = priceValue * quantityValue;

  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {

  // ITERATION 2
  
  const products = document.getElementsByClassName('product');
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }
  // ITERATION 3

  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const row = target.parentNode.parentNode;
  row.parentNode.removeChild(row);

  calculateAll();
}
// ITERATION 5

function createProduct() {

  const nameInput = document.querySelector('.create-product input[placeholder="Product Name"]');
  const priceInput = document.querySelector('.create-product input[placeholder="Product Price"]');


  const name = nameInput.value;
  const price = parseFloat(priceInput.value);

  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name"><span>${name}</span></td>
    <td class="price">$<span>${price.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  document.querySelector('#cart tbody').appendChild(newRow);

  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
