// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subTotal = product.querySelector('.subtotal span');

  subTotal.innerHTML = price.innerHTML * quantity.value;

  return +subTotal.innerHTML;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  const totalValue = document.querySelector('h2 span');

  let sum = 0;

  products.forEach(product => {
    sum += updateSubtotal(product);
  })

  totalValue.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const [name, price] = document.querySelectorAll('tfoot input');
  const tbody = document.getElementsByTagName('tbody')[0];

  tbody.insertAdjacentHTML('beforeend', `
    <tr class="product">
      <td class="name">
        <span>${name.value}</span>
        </td>
      <td class="price">$<span>${price.value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `)

  const removeButtons = document.querySelectorAll('.btn-remove');

  removeButtons.forEach(removeButton => {removeButton.removeEventListener('click', removeProduct)});

  removeButtons.forEach(removeButton => {removeButton.addEventListener('click', removeProduct)});

  name = "";
  price = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(removeButton => {removeButton.addEventListener('click', removeProduct)});

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
