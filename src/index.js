const $cart = document.querySelector('#cart tbody');
const $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  const $priceSpan = $product.querySelector('.pu span');
  const priceValue = $priceSpan.innerText;

  const $quantityInput = $product.querySelector('input');
  const quantityValue = $quantityInput.value;

  const subtotal = parseFloat(priceValue) * parseInt(quantityValue);

  const $subtotalSpan = $product.querySelector('.subtot span');

  $subtotalSpan.innerText = subtotal.toFixed(2);

  return subtotal;
}

function calcAll() {
  // Iteration 1.2
  const $$allProducts = document.querySelectorAll('tr.product');

  let total = 0;

  for (let $product of $$allProducts) {
    let subtotal = updateSubtot($product);
    total += subtotal;
  }

  const $totalSpan = document.querySelector('h2 span');

  $totalSpan.innerText = total.toFixed(2);
}

$calc.addEventListener('click', calcAll);

// Iteration 4

const removeProduct = (event) => {
  const $button = event.target;
  const $productRow = $button.parentNode.parentNode;
  const $tableBody = $productRow.parentNode;

  $tableBody.removeChild($productRow);

  calcAll();
};

const $$removeButtons = document.getElementsByClassName('btn-delete');

for (let $removeButton of $$removeButtons) {
  $removeButton.addEventListener('click', removeProduct);
}

// Iteration 5

const $inputNewProductName = document.querySelector('.new input');
const $inputNewProductPrice = document.querySelector(
  '.new input[type="number"]'
);

const $newProductButton = document.querySelector('.new button');

const createNewProductRow = (event) => {
  // ...
  const name = $inputNewProductName.value;
  const price = $inputNewProductPrice.value;

  $inputNewProductName.value = '';
  $inputNewProductPrice.value = '';

  const $tr = document.createElement('tr');
  $tr.classList.add('product');
  $tr.innerHTML += `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="pu">$<span>${price}</span></td>
    <td class="qty">
      <label>
        <input type="number" value="0" min="0" />
      </label>
    </td>
    <td class="subtot">$<span>0</span></td>
    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
  `;

  const $removeButton = $tr.querySelector('button');

  $removeButton.addEventListener('click', removeProduct);

  $cart.appendChild($tr);
};

$newProductButton.addEventListener('click', createNewProductRow);
