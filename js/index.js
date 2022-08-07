function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  let total = 0;
  const products = document.getElementsByClassName('product');

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  const totalPlace = document.querySelector('#total-value span');
  totalPlace.innerText = total.toFixed(2);
}

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.parentNode.parentNode;
  const parent = row.parentNode;
  parent.removeChild(row);
  calculateAll();
}

function createProduct() {
  const createRow = document.querySelector('.create-product');
  let newNameInput = createRow.querySelector('input');
  let newNameValue = newNameInput.value;
  let newPriceInput = createRow.querySelector("input[type='number']");
  let newPriceValue = Number(newPriceInput.valueAsNumber).toFixed(2);

  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
    <td class="name">
      <span>${newNameValue}</span>
    </td>
    <td class="price">$<span>${newPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</>
    </td>
  `;

  const parent = document.querySelector('#cart tbody');
  parent.appendChild(newTableRow);
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
  newNameInput.value = '';
  newPriceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
});
