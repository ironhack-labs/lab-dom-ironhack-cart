// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');
  return (subtotal.innerHTML = price.innerHTML * quantity.value);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  product = document.getElementsByClassName('product');
  let sum = 0;
  for (let i = 0; i < product.length; i++) {
    sum += updateSubtotal(product[i]);
  }

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const rowToBeRemoved = target.parentNode.parentNode;
  const rowParent = target.parentNode.parentNode.parentNode;
  rowParent.removeChild(rowToBeRemoved);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productNameInputElement = document.querySelector(
    '.create-product [type="text"]'
  );
  const productName = productNameInputElement.value;

  const productPriceInputElement = document.querySelector(
    '.create-product [type="number"]'
  );
  const productPrice = productPriceInputElement.value;

  const tableBody = document.querySelector('tbody');

  tableBody.insertAdjacentHTML(
    'beforeend',
    `
  <tr class="product">
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
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

  const removeButtons = document.querySelectorAll('.btn-remove');

  const newRemoveButton = removeButtons[removeButtons.length - 1];

  newRemoveButton.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});
