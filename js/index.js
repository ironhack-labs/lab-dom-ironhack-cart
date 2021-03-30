// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').innerText = price * quantity;
  return price * quantity;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  // console.log(document.querySelectorAll('.product'));
  let total = 0;
  const products = document.getElementsByClassName('product');
  for (let product of products) {
    total += updateSubtotal(product);
  }
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  //... your code goes here
  target.parentNode.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProduct = document.createElement('tr');
  newProduct.className = 'product';
  const name = document.querySelector('.create-product input[type="text"]').value;
  let price = document.querySelector('.create-product input[type="number"]').value;
  newProduct.innerHTML =
  `<td class="name">
  <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`;
  document.querySelector('tbody').appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const buttons = document.getElementsByClassName('btn btn-remove');
  for (let button of buttons) {
    button.addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
