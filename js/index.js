// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotalElement = product.querySelector('.subtotal span');
  const subTotalValue = Number(price) * Number(quantity);
  subTotalElement.innerHTML = subTotalValue;
  return subTotalValue;
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2

  let totalPrice = 0;
  const products = document.querySelectorAll('.product');
  products.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });

  // ITERATION 3

  const totalPriceDisplay = document.querySelector('#total-value span');
  totalPriceDisplay.innerHTML = totalPrice;
  return totalPrice;
}

// ITERATION 4

function removeProduct(oneRmvBtn) {
  const parent = oneRmvBtn.closest('.product');
  parent.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const tableBody = document.querySelector('#cart tbody');
  const productRow = document.querySelector('tr');
  const productName = document.querySelector('.create-product>td>input');
  const productPrice = document.querySelector(
    '.create-product>td:nth-child(2)>input'
  );

  const productNameDisplay = productName.value;
  const productPriceValue = productPrice.value;

  productRow.innerHTML = `<td class="name">
  <span>${productNameDisplay}</span>
</td>
<td class="price">$<span>${parseFloat(productPriceValue).toFixed(2)}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

  productRow.classList.add('product');

  tableBody.appendChild(productRow);

  initRemove();

  productName.value = '';
  productPrice.value = '';
}

function initRemove() {
  const removeBtn = document.querySelectorAll('.btn.btn-remove');
  removeBtn.forEach((oneRmvBtn) => {
    oneRmvBtn.addEventListener('click', () => {
      removeProduct(oneRmvBtn);
    });
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  initRemove();

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', () => {
    createProduct();
  });
});
