// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price * quantity;
  return subtotal.innerHTML;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2

  const allProducts = [...document.getElementsByClassName('product')]; //creating an actual array from the HTML collection
  let total = 0;
  allProducts.forEach((product) => {
    updateSubtotal(product);
    total += Number(updateSubtotal(product));
  });

  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(e) {
  const target = e.currentTarget;
  const body = document.querySelector('tbody');
  body.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = [...document.getElementsByClassName('btn-remove')];
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  //... your code goes here
});
