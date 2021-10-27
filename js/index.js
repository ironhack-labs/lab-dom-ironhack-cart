// ITERATION 1

function updateSubtotal(product) {
  let subTotal = 0;

  let unitPrice = product.querySelector('.price > span').innerText;
  let quantity = product.querySelector('.quantity > input').value;

  subTotal += unitPrice * quantity;

  product.querySelector('.subtotal > span').innerText = subTotal;
}

function calculateAll() {
  let products = document.querySelectorAll('tr.product').forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  let total = 0;
  document.querySelectorAll('tr.product').forEach((product) => {
    total += parseInt(product.querySelector('.subtotal > span').innerText);
  });
  document.querySelector('#total-value > span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  event.currentTarget.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const inputPrice = document.querySelector(
    '#cart > tfoot > tr > td:nth-child(2) > input'
  ).value;

  const productName = document.querySelector(
    '#cart > tfoot > tr > td:nth-child(1) > input'
  ).value;

  let newDocument = document.createElement('tr');
  newDocument.innerHTML = `
    <tr class="product">
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">
        $<span>${inputPrice}</span>
      </td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">
        $<span>0</span>
      </td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `;
  const reference = document.querySelector('#cart > tbody > tr:last-child');

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  insertAfter(reference, newDocument);

  newDocument
    .querySelector('.btn-remove')
    .addEventListener('click', removeProduct);
  newDocument.querySelector('.subtotal > span');
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll('.btn.btn-remove').forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

  const createButton = document
    .querySelector('#create')
    .addEventListener('click', createProduct);
});
