// ITERATION 1

function updateSubtotal(product) {

  const price =
    product.querySelector('.price span');

  const quantity =
    product.querySelector('.quantity input');

  const subtotal =
    product.querySelector('.subtotal span');

  const priceValue =
    Number(price.innerHTML);

  const quantityValue =
    Number(quantity.value);

  const subtotalValue =
    priceValue * quantityValue;

  subtotal.innerHTML =
    subtotalValue;

  return subtotalValue;

}

function calculateAll() {

  // ITERATION 2
  const products =
    document.querySelectorAll('.product');

  let total = 0;

  products.forEach(function(product) {

    total += updateSubtotal(product);

  });

  // ITERATION 3
  const totalValue =
    document.querySelector('#total-value span');

  totalValue.innerHTML =
    total;

}

// ITERATION 4

function removeProduct(event) {

  const target =
    event.currentTarget;

  const product =
    target.parentNode.parentNode;

  product.remove();

  calculateAll();

}

// ITERATION 5

function createProduct() {

  const inputs =
    document.querySelectorAll('.create-product input');

  const name =
    inputs[0].value;

  const price =
    inputs[1].value;

  const tbody =
    document.querySelector('tbody');

  const newRow =
    document.createElement('tr');

  newRow.classList.add('product');

  newRow.innerHTML = `

    <td class="name">
      <span>${name}</span>
    </td>

    <td class="price">
      $<span>${price}</span>
    </td>

    <td class="quantity">
      <input
        type="number"
        value="0"
        min="0"
        placeholder="Quantity"
      />
    </td>

    <td class="subtotal">
      $<span>0</span>
    </td>

    <td class="action">
      <button class="btn btn-remove">
        Remove
      </button>
    </td>

  `;

  tbody.appendChild(newRow);

  const removeBtn =
    newRow.querySelector('.btn-remove');

  removeBtn.addEventListener(
    'click',
    removeProduct
  );

  inputs[0].value = '';
  inputs[1].value = '';

}

window.addEventListener('load', () => {

  const calculatePricesBtn =
    document.getElementById('calculate');

  calculatePricesBtn.addEventListener(
    'click',
    calculateAll
  );

  const removeButtons =
    document.querySelectorAll('.btn-remove');

  removeButtons.forEach(function(button) {

    button.addEventListener(
      'click',
      removeProduct
    );

  });

  const createButton =
    document.querySelector('#create');

  createButton.addEventListener(
    'click',
    createProduct
  );

});