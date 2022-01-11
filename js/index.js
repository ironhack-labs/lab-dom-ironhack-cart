// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // const products = document.querySelectorAll('.product');
  // for (const product of products) {
  //   updateSubtotal(product);
  // }

  // ITERATION 3
  let total = 0;
  const products = document.querySelectorAll('.product');
  for (const product of products) {
    total += updateSubtotal(product);
  }
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  target.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const name = document
    .querySelector('.create-product')
    .querySelectorAll('td')[0]
    .querySelector('input').value;
  const price = document
    .querySelector('.create-product')
    .querySelectorAll('td')[1]
    .querySelector('input').value;
  productsList = document.querySelectorAll('tr');
  previousProduct = productsList[productsList.length - 2];
  const text = `<tr class="product">
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  </tr>`;
  previousProduct.insertAdjacentHTML('afterend', text);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  removeBtnLoader();

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  createProductBtn.addEventListener('click', removeBtnLoader);
});

function removeBtnLoader() {
  const removeProductBtnArr = document.querySelectorAll('.btn-remove');
  for (const removeBtn of removeProductBtnArr) {
    removeBtn.addEventListener('click', removeProduct);
  }
}
