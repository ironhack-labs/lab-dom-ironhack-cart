// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('input').value

  let subTotal = price * quantity; 

  product.querySelector('.subtotal span').innerText = subTotal

  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');

  let sumTotal = 0;

  document.querySelectorAll('.product').forEach(function (products) {

  sumTotal += updateSubtotal(products);
  })

  // ITERATION 3
  document.querySelector('#total-value span').innerText = sumTotal;
  return sumTotal;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  console.log('The target in remove is:', target);

  event.target.parentNode.parentNode.parentNode.removeChild(

    event.target.parentNode.parentNode
  );
  calculateAll();
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
