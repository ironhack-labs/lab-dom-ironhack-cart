// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')

  const priceValue = Number(price.innerText)
  const quantityValue = Number(quantity.value)

  const subtotal = priceValue * quantityValue;

  const subtotalElement = product.querySelector('.subtotal span')

  subtotalElement.innerText = subtotal;

  return subtotal
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');

  let total = 0;

  for (let product of allProducts) {
    updateSubtotal(product)

    total += updateSubtotal(product)
  }

  document.querySelector('#total-value span').innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target;

  const row = target.parentNode.parentNode;

  row.remove()

  calculateAll()
}

// ITERATION 5

function createProduct() {
  const createRow = document.querySelector('.create-product');
  let newProductName = createRow.querySelector('input').value;
  let newProductPrice = createRow.querySelector("input[type='number']").valueAsNumber

  const newRow = document.createElement('tr');
  newRow.className = "product"
  newRow.innerHTML = `<td class="name">
    <span>${newProductName}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct)

  const body = document.querySelector('#cart tbody');

  body.appendChild(newRow)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  [...removeBtn].forEach((button) => {
    button.addEventListener('click', removeProduct)
  })

  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)

});
