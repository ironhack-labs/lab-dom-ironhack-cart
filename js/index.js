'use strict'
// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  const subtotalPrice = +priceValue * +quantityValue;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = subtotalPrice.toString();

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //const newProduct = document.createElement('tr');
  //newProduct.className = '.product';
  /*newProduct.innerHTML = `        
  <td class="name">
    <span>Ironhack Rubber Duck</span>
  </td>
  <td class="price">$<span>25.00</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;*/

  //const name = newProduct.querySelector('.name');
  //const price = newProduct.querySelector('.price span');
  //name.textContent = 'Ironhack beach towel';
  //price.textContent = 12.50;

  //const body = document.querySelector('tbody');
  //body.appendChild(newProduct);

  const productRows = [...document.getElementsByClassName('product')];
  const total = document.querySelector('#total-value span');
  let s = 0;
  productRows.forEach(p => {
     s += +(updateSubtotal(p).innerHTML); // + before string, converts it to number
  })
  total.textContent = s.toString();
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});