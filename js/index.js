// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  let subtotal = price * quantity;
  product.querySelector('.subtotal > span').innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let products = document.getElementsByClassName('product');
  let totalBox = document.querySelector('#total-value > span');

  // ITERATION 2
  for (let product of products) {
    updateSubtotal(product);
  }

  // ITERATION 3
  let total = 0;
  for (let product of products) {
    total += updateSubtotal(product);
  }
  totalBox.innerText = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  const createProduct = document.querySelectorAll('.create-product input');
  const product = createProduct[0].value;
  const price = createProduct[1].value;

  const rowProduct = `<td class="name"><span>${product}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity">
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;

  const tr = document.createElement('tr');
  tr.classList.add('product');
  tr.innerHTML = rowProduct;
  document.querySelector('tbody').appendChild(tr);

  const removeRows = document.querySelectorAll('.btn-remove');
  removeRows.forEach(function (row) {
    row.addEventListener('click', removeProduct);
  });

  createProduct[0].value = '';
  createProduct[1].value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

const removeRows = document.querySelectorAll('.btn-remove');
removeRows.forEach(function (row) {
  row.addEventListener('click', removeProduct);
});

window.addEventListener('load', () => {
  const createProductListener = document.getElementById('create');
  createProductListener.addEventListener('click', createProduct);
});
