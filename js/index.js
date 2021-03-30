// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  const priceValue = priceElement.innerText;
  const quantityValue = quantityElement.value;
  const subtotalPrice = (priceValue * quantityValue).toFixed(2);

  subtotalElement.innerText = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  [...products].map(p => updateSubtotal(p));

  const subtotals = document.querySelectorAll('.subtotal span');
  const totalPrice = [...subtotals].map(s => parseFloat(s.innerText))
    .reduce((a, v) => a + v);

  document.querySelector('#total-value span').innerText = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target;
  const product = target.parentElement.parentElement;
  const productsTable = product.parentElement;
  productsTable.removeChild(product);
}

// ITERATION 5

function createProductForm() {
  const productName = document.querySelector('.create-name');
  const productPrice = document.querySelector('.create-price');

  if (formIsValid(productName, productPrice)) {
    createProductElement(productName, productPrice);
  } else {
    productName.classList.add('invalid');
    productPrice.classList.add('invalid');
    cleanUp();
  }
}

function formIsValid(name, price) {
  if (name.value !== '' && price.value > 0) {
    return true;
  }
  return false;
}

function createProductElement(name, price) {
  console.log(name, price)
  const tableRow = document.createElement('tr');
  tableRow.classList.add('product');
  tableRow.innerHTML = `<td class="name">
        <span>${name.value}</span>
      </td>
      <td class="price">$<span>${parseInt(price.value).toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>`

  const shoppingCart = document.querySelector('#cart tbody');
  shoppingCart.appendChild(tableRow);

  // Add event listener to the new input and remove button
  tableRow.querySelector('input').onclick = calculateAll;
  tableRow.querySelector('.btn-remove').onclick = removeProduct;

  cleanUp();
}

function cleanUp() {
  // Clean up the form
  document.querySelector('.create-name').value = '';
  document.querySelector('.create-price').value = '';
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(btn => btn.addEventListener('click', removeProduct));
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProductForm);
  const quantityInputs = document.querySelectorAll('.product input');
  quantityInputs.forEach(input => input.addEventListener('change', calculateAll));
  calculateAll();
});
