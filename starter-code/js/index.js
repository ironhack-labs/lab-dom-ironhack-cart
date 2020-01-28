var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1

  let $unitPrice = $product.querySelector('.pu span').innerText;
  let $quantity = $product.querySelector('.qty label input').value;
  let $subtotalSpan = $product.querySelector('.subtot span');
  let subtotal = parseFloat($unitPrice) * parseInt($quantity);

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
//$calc.onclick = calcAll;

$calc.addEventListener('click', calcAll);

// --------

const deleteProduct = event => {
  const $button = event.target;

  const $productRow = $button.parentNode.parentNode;
  const $tableBody = $productRow.parentNode;

  $tableBody.removeChild($productRow);
};

const $$deleteButtons = document.getElementsByClassName('btn-delete');

for (let $deleteButton of $$deleteButtons) {
  $deleteButton.addEventListener('click', deleteProduct);
}

// --------

const $inputNewName = document.querySelector('.new input');
const $inputNewPrice = document.querySelector('.new input[type="number"]');
const $newButton = document.querySelector('.new button');

const createProduct = event => {
  const name = $inputNewName.value;
  const price = $inputNewPrice.value;

  $inputNewName.value = '';
  $inputNewPrice.value = '';

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

  $removeButton.addEventListener('click', deleteProduct);

  $cart.appendChild($tr);
};

$newButton.addEventListener('click', createProduct);
