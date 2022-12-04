// ITERATION 1

function updateSubtotal(product) {
  return product.forEach((singleProduct) => {
    const price = +singleProduct.querySelector('.price span').innerText;
    const quantity = +singleProduct.getElementsByTagName('input')[0].value;

    singleProduct.querySelector('.subtotal span').innerText = (
      price * quantity
    ).toFixed(2);
  });
}

function calculateAll() {
  /// ITERATION 2
  const products = document.querySelectorAll('.product');
  updateSubtotal(products);

  // ITERATION 3
  let total = 0;
  products.forEach((singleSubtotal) => {
    const sub = +singleSubtotal.querySelector('.subtotal span').innerText;
    total += sub;
  });

  document.querySelector('#total-value span').innerText = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;

  document.querySelector('tbody').removeChild(target);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(
    '.create-product input[type="text"]'
  );
  const productPrice = document.querySelector(
    '.create-product input[type="number"]'
  );

  const rowProduct = `
      <td class="name"><span>${productName.value}</span></td>
      <td class="price">$<span>${(+productPrice.value).toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
  `;

  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');
  newProduct.innerHTML = rowProduct;

  document.querySelector('tbody').appendChild(newProduct);

  const newBtnRemove = document
    .querySelector('tbody')
    .querySelectorAll('.btn-remove');

  newBtnRemove[newBtnRemove.length - 1].addEventListener(
    'click',
    removeProduct
  );

  productName.value = '';
  productPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
