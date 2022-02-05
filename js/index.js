// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = parseFloat(product.querySelector('.quantity input').value);

  const subtotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let allProducts = document.querySelectorAll('.product');
  allProducts.forEach((singleProduct) => {
    updateSubtotal(singleProduct);
  });

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  let subtotal = document.querySelectorAll('.subtotal span');

  let netTotal = [...subtotal].reduce((totalValue, currValue) => {
    return (totalValue += parseFloat(currValue.innerHTML));
  }, 0);

  total.innerHTML = netTotal;
}

// ITERATION 4

function removeButton() {
  const removeButtons = document.querySelectorAll('.btn-remove');

  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let name = document
    .querySelector('.create-product')
    .firstElementChild.querySelector('input');
  let unit = document
    .querySelector('.create-product')
    .firstElementChild.nextElementSibling.querySelector('input');

  if (name.value.length > 1 && unit.value > 0 && unit.value !== -1) {
    const tableBody = document.querySelector('#cart tbody');

    const newProduct = document.createElement('tr');
    newProduct.className = 'product';

    newProduct.innerHTML = `
          <td class="name">
            <span>${name.value}</span>
          </td>
          <td class="price">$<span>${unit.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `;

    tableBody.appendChild(newProduct);
    name.value = '';
    unit.value = 0;

    removeButton();
  } else {
    alert('Invalid entry');
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  removeButton();

  let createButton = document.querySelector('#create');

  createButton.addEventListener('click', createProduct);
});
