// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantityItems');
  const total = product.querySelector('.subtotal span');
  let result = Number(quantity.value) * Number(price.innerHTML);

  total.innerText = result;
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const allProductsElement = document.getElementsByClassName('product');
  let newSubtotal = 0;
  for (let i = 0; i < allProductsElement.length; i++) {
    newSubtotal += updateSubtotal(allProductsElement[i]);
  }

  // ITERATION 3
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = newSubtotal;
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const inputProductName = document.querySelector('#inputProductName');
  const inputProductPrice = document.querySelector('#inputProductPrice');

  const newProduct = ` <tr class="product">
  <td class="name">
    <span>${inputProductName.value}</span>
  </td>
  <td class="price">$<span>${Number(inputProductPrice.value)}</span></td>
  <td class="quantity">
    <input
      class="quantityItems"
      type="number"
      value="0"
      min="0"
      placeholder="Quantity"
    />
  </td>
  <td class="subtotal">$<span id="span">0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;

  const allProducts = document.querySelector('tbody');
  allProducts.insertAdjacentHTML('beforeend', newProduct);

  inputProductName.value = '';
  inputProductPrice.value = 0;
  inputProductName.focus();
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productToBeDeleted = target.parentElement.parentElement;
  const allProducts = document.querySelector('tbody');

  allProducts.removeChild(productToBeDeleted);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
    console.log(removeBtn[i]);
    removeBtn[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
