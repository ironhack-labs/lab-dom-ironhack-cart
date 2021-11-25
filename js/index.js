// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity > input').value;

  let result = price * quantity

  product.querySelector('.subtotal span').innerText = result;
 

  // js/index.js

return result

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let allProducts = document.getElementsByClassName('product');

  let totalResult = 0;

  for (let i = 0; i < allProducts.length; i++) {
    totalResult += updateSubtotal(allProducts[i]);

  }


  const subtotals = document.querySelector('#total-value > span');

  subtotals.innerText = totalResult;

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
