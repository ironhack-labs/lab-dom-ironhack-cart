// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').textContent;
  const priceNum = parseFloat(price);
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = priceNum * quantity;
  // console.log(subtotal);
  product.querySelector('.subtotal span').innerHTML = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const cart = document.querySelectorAll('.product');
  let total = 0;
  cart.forEach((el) => (total += updateSubtotal(el)));

  const total2dec = parseFloat(total).toFixed(2);

  const totalValue = document.querySelector('#total-value span');
  totalValue.textContent = total2dec;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const tableBody = document.querySelector('#cart tbody');
  const row = target.closest('.product');
  // target.parentElement.parentElement.innerHTML = '';
  tableBody.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const name = document.querySelector('#create-product-name').value;
  const price = document.querySelector('#create-product-price').value;
  const tableBody = document.querySelector('#cart tbody');
  const number = parseFloat(price).toFixed(2);

  if (number === 0 || name.length === 0) {
    number === 0
      ? alert('Can not add a product with no price')
      : alert('Can not add a product with no name');
  } else {
    tableBody.insertAdjacentHTML(
      'beforeend',
      `
        <tr class="product">
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${number}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
        `
    );
    const removeBtns = document.querySelectorAll(' .btn-remove');
    removeBtns[removeBtns.length - 1].addEventListener('click', removeProduct);

    const quantity = document.querySelectorAll(' .quantity input');
    quantity[quantity.length - 1].addEventListener('input', subtotal);
    quantity[quantity.length - 1].addEventListener('input', calculateAll);
  }
}

function subtotal(event) {
  const target = event.currentTarget;
  const price = target
    .closest('.product')
    .querySelector('.price span').textContent;
  const quantity = target
    .closest('.product')
    .querySelector('.quantity input').value;

  const subtotal = price * quantity;
  target.closest('.product').querySelector('.subtotal span').innerHTML =
    subtotal;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);

  const removeBtns = document.querySelectorAll(' .btn-remove');
  removeBtns.forEach((btn) => btn.addEventListener('click', removeProduct));

  const quantity = document.querySelectorAll(' .quantity input');
  quantity.forEach((el) => el.addEventListener('input', subtotal));
  quantity.forEach((el) => el.addEventListener('input', calculateAll));
});
