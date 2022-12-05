// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = +product.querySelector('.price span').innerHTML;
  const quantity = +product.querySelector('.quantity input').value;
  const totalProduct = `${(price * quantity).toFixed(2)}`;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = totalProduct;
  return +totalProduct;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  // OPCION A
  // ********
  // const products = document.querySelectorAll('.product');
  // products.forEach((product) => updateSubtotal(product));
  // OPCION B
  // ********
  const products = [...document.querySelectorAll('.product')]

  // ITERATION 3
  //... your code goes here
  // OPCION A
  // ********
  // let totalPrice = 0;
  // products.forEach((product) => {
  //   totalPrice += updateSubtotal(product);
  // });
  // OPCION B
  // ********
  const totalPrice = products
    .map((product) => updateSubtotal(product))
    .reduce((total, value) => total + value, 0)
  document.querySelector('#total-value span').innerHTML = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here
  document.querySelector('#cart tbody').removeChild(product);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  const productName = product.querySelectorAll('input')[0].value;
  const productPrice = Number(product.querySelectorAll('input')[1].value).toFixed(2);
  const newProduct = document.createElement('tr');

  newProduct.setAttribute('class', 'product');
  newProduct.innerHTML = `
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
  `;
  const removeBtn = newProduct.querySelector('.product .btn.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  document.querySelector('#cart tbody').appendChild(newProduct);
  product.querySelectorAll('input')[0].value = '';
  product.querySelectorAll('input')[1].value = '';

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  const removeBtns = document.querySelectorAll('.product .btn.btn-remove');
  removeBtns.forEach((removeBtn) => removeBtn.addEventListener('click', removeProduct));
});

