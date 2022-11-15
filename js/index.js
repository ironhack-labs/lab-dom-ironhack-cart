// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = +product.querySelector('.price span').innerText;
  const quantity = +product.querySelector('.quantity input').value;

  const subtotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test
  // ITERATION 2
  const products = [...document.getElementsByClassName('product')];

  let total = 0;

  for (const singleProduct of products) {
    total += updateSubtotal(singleProduct);
  }

  // ITERATION 3

  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target.parentNode.parentNode;
  console.log('The target in remove is:', target);

  document.querySelector('tbody').removeChild(target);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = [...document.getElementsByClassName('btn-remove')];

  for (const btn of removeProductBtns) {
    btn.addEventListener('click', removeProduct);
  }
});
