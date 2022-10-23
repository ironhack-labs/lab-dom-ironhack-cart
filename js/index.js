// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = price.innerText * quantity.value;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('table#cart tr.product');


  for (i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
  }


  // ITERATION 3
  //... your code goes here
  let total = 0

  for (i = 0; i < allProducts.length; i++) {
    total += + allProducts[i].querySelector('.subtotal span').innerText
  }
  document.querySelector('h2#total-value span').innerText = total

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
