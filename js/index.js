// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = price.innerHTML * quantity.value;
  // console.log(quantity.value);

  return subtotal.innerHTML;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test


  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }

  // ITERATION 3
  //... your code goes here
  const eachTotal = document.querySelectorAll('.subtotal span');
  let allTotal = 0;

  for (let i = 0; i < eachTotal.length; i++) {
    allTotal += parseInt(eachTotal[i].innerHTML);
  }
  document.querySelector('#total-value span').innerHTML = allTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const createdProd = document.querySelector('.create-product');
  const name = createdProd.querySelector('input[type=text]');
  const price = createdProd.querySelector('input[type=number]');
  const copy = document.querySelector('tbody').firstElementChild;
  const newProduct = copy.cloneNode(true);

  newProduct.querySelector('.name span').innerHTML = name.value;
  newProduct.querySelector('.price span').innerHTML = price.value;
  newProduct.querySelector('.quantity input').value = 0;
  newProduct.querySelector('.subtotal span').innerHTML = 0;

  document.querySelector('tbody').appendChild(newProduct);

  name.value = null;
  price.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
