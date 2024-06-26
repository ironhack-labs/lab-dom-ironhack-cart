// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.textContent);
  const quantityValue = parseInt(quantity.value);

  const subtotalValue = priceValue * quantityValue;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = subtotalValue.toFixed(2);

  return subtotalValue;
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  let total = 0;

  // ITERATION 2
  //... your code goes here
  for (let product of products) {
    total += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector('#total-value span');
  totalValue.textContent = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const product = target.closest('.product');
  product.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[placeholder="Product Name"]');
  const priceInput = document.querySelector('.create-product input[placeholder="Product Price"]');
  
  const nameValue = nameInput.value;
  const priceValue = parseFloat(priceInput.value).toFixed(2);

  const newProductRow = document.createElement('tr');
  newProductRow.classList.add('product');
  newProductRow.innerHTML = `
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const cartBody = document.querySelector('#cart tbody');
  cartBody.appendChild(newProductRow);

  const removeButton = newProductRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
