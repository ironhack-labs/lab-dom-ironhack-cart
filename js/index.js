// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotalPrice.toFixed(2);
  return subtotalPrice;
}

function calculateAll() { 
  // ITERATION 2
  const multipleProducts = document.getElementsByClassName('product');
  let total = 0;

  [...multipleProducts].forEach((element) => {
    total += updateSubtotal(element);
  });

  console.log(multipleProducts)

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.remove();

  calculateAll();
}

// ITERATION 5
function createProduct() {
  const name = document.querySelector('#create-name').value;
  const price = document.querySelector('#create-price').value;
  const newTable = document.createElement('TR');
  newTable.setAttribute('class', 'product');
  const newValue = 
  `<td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

  if (!name) {
    alert('Please add product´s name');
  } else if (price === '0') {
    const record = confirm('Are you sure that you want the price to be zero?');
    if (record == 1) {
      newTable.innerHTML = newValue;
      document.querySelector('tbody').appendChild(newTable);
      document.querySelector('#create-name').value = '';
    } else {
      return false;
    }
  } else {
    newTable.innerHTML = newValue;
    document.querySelector('tbody').appendChild(newTable);
    document.querySelector('#create-name').value = '';
    document.querySelector('#create-price').value = '0';
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  [...removeProductBtn].forEach((element) => element.addEventListener('click', (event) => removeProduct(event)));

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});