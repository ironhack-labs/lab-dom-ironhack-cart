var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let $unitPrice = Number($product.querySelector('.pu span').innerText);
  let $quantity = Number($product.querySelector('.qty label input').value);
  let $subtotal = $product.querySelector('.subtot span');
  $subtotal.innerHTML = ($unitPrice * $quantity).toFixed(2);
  return $subtotal;
}

function calcAll() {
  // Iteration 1.2
  let $$productList = document.querySelectorAll('tr.product');
  let total = 0;

  for (let $product of $$productList) {
    let subtotal = updateSubtot($product);
    total += subtotal;
  }
  let $totalSpan = document.querySelector('h2 span');
  $totalSpan.innerText = total;
}
$calc.onclick = calcAll;

// Iteration 4

let removeProduct = event => {
  let $button = event.target;
  let $productRow = $button.parentNode.parentNode;
  let $tableBody = $productRow.parentNode;

  $tableBody.removeChild($productRow);
};

let $$deleteButtons = document.querySelectorAll('.btn-delete');

for (let $deleteButton of $$deleteButtons) {
  $deleteButton.addEventListener('click', removeProduct);
}

// Iteration 5

let $newProductName = document.querySelector('.new input');
let $newProductPrice = document.querySelector('.new input[type="number"]');

let $newProductButton = document.querySelector('.new btn');

let createNewProdutRow = event => {
  let name = $newProductName.value;
  let price = $newProductPrice.value;

  $newProductName.value = '';
  newProductPrice.value = '';

  $cart.innerHTML += `
  <tr class="product">
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
</tr>`;
};

//$newProductButton.addEventListener('click', createNewProdutRow);
