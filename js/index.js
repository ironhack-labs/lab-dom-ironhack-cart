// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  product.querySelector('.subtotal span').innerText = (
    price * quantity
  ).toFixed(2);
  return parseFloat((price * quantity).toFixed(2));
}

function calculateAll() {
  const allProducts = Array.from(document.querySelectorAll('.product')); //esto devuelve un "array"
  console.log(document.querySelector('#total-value span').innerText);
  const result = allProducts.reduce((total, product) => {
    return total + updateSubtotal(product);
  }, 0);

  document.querySelector('#total-value span').innerText = result;

  function calcTotal() {
    const allSubtotals = document.querySelectorAll('.product .subtotal span');
    //document.getElementById('total-value').querySelector('span')

    document.querySelector('#total-value span').innerText = result;
    console.log(Array.from(allSubtotals));
  }

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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

window.addEventListener('DOMContentLoaded', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
