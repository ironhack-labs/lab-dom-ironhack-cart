// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  return (subtotal.innerHTML = quantity.value * price.innerHTML);

  console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const product = document.getElementsByClassName('product');

  let result = 0;
  /* 
  for(let i=0; i<product.length;i++){
    result += updateSubtotal(products[i])
  } */
  for (let i = 0; i < product.length; i++) {
    result += updateSubtotal(product[i]);
  }
  // ITERATION 3

  let total = document.querySelector('#total-value span');

  total.innerHTML = result;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProducts = document.querySelectorAll('.btn-remove');

  for (let i = 0; i < removeProducts.length; i++) {
    removeProducts[i].addEventListener('click', removeProduct);
  }
});
