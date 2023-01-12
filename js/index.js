// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price * quantity
  return subtotal.innerHTML;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product')
  const productsArr = [...products]
  let total = 0;

  productsArr.forEach((e) => {
    total += Number(updateSubtotal(e))
  });

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  let products = document.querySelector('tbody');
  products.removeChild(target.parentNode.parentNode);

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.getElementsByClassName('btn-remove');
  const removeButton = [...removeButtons];

  removeButton.forEach((button) => {
    button.addEventListener('click', removeProduct);
  })
});
