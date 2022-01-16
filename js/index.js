// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subTotal;
  return subTotal;
  // console.log(subTotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');

  let totalProducts = 0;
  products.forEach(function (product) {
    totalProducts += updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value').innerHTML = totalProducts;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parent = target.parentNode.parentNode.parentNode;
  parent.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  ProductName = document.querySelector(
    '.create-product input[type=text]'
  ).value;
  ProductPrice = document.querySelector(
    '.create-product input[type=number]'
  ).value;

  //create element
  const newProduct = document.createElement('tr');
  newProduct.className = 'product';
  newProduct.innerHTML = `
    <td class="name">
      <span>${ProductName}</span>
    </td>
    <td class="price">$<span>${ProductPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;

  //get tbody of document to append to
  const body = document.querySelector('tbody');

  //append new element to tablebody
  body.appendChild(newProduct);

  //add removeButton eventListener
  let RemoveBtn = newProduct.querySelector('.btn-remove');
  RemoveBtn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove');
  // console.log(removeBtn);
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

  const createBtn = document.querySelector('#create');
  // console.log(createBtn);
  createBtn.addEventListener('click', createProduct);
});
