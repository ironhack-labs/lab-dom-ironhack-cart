// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  //console.log(document.querySelector('.price span'))

  let subtotalPrice = price.innerHTML * quantity.value;

  subtotal.innerHTML = subtotalPrice;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');


  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelectorAll('.subtotal span');
  let finalPrice = 0;

  for (let i = 0; i < totalPrice.length; i++) {
    finalPrice += parseInt(totalPrice[i].innerHTML);
  }

  document.querySelector('#total-value span').innerHTML = finalPrice;

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
  const createdProd = document.querySelector('.create-product');

  const name = createdProd.querySelector('input[type=text]');
  const price = createdProd.querySelector('input[type=number]');

  const copy = document.querySelector('tbody').firstElementChild;

  const newRow = copy.cloneNode(true);

  newRow.querySelector('.name span').innerHTML = name.value;
  newRow.querySelector('.price span').innerHTML = price.value;
  newRow.querySelector('.quantity input').value = 0;
  newRow.querySelector('.subtotal span').innerHTML = 0;



  document.querySelector('tbody').appendChild(newRow);

  name.value = null;
  price.value = 0;

}

window.addEventListener('load', () => {
  //... your code goes here
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

});

// window.addEventListener('change', () => {

//   const removeProducts = document.querySelector('.btn-remove');
//   removeProducts.addEventListener('click', removeProduct);
//   console.log(removeProducts)
// });
