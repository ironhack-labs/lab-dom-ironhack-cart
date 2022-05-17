// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = price.textContent * quantity.value;
  const subSpan = product.querySelector('.subtotal span');
  subSpan.textContent = subTotal;

  return subTotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  const allProducts = document.querySelectorAll('.product');
  console.log(allProducts);
  let total = 0;
  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  });
  document.querySelector('#total-value span').textContent = total;
  console.log(total);
}

// end of test

// ITERATION 2
//... your code goes here

// ITERATION 3
//... your code goes here

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
