// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const priceNumb = parseFloat(price.innerText);
  const quantityNumb = parseFloat(quantity.value);
  const subtotal = priceNumb * quantityNumb;
  
  const subtotalText = product.querySelector('.subtotal span');
  subtotalText.innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll('.product');
  let total = 0;
  [...products].forEach(item => {
   total += updateSubtotal(item);
  });
  
  // ITERATION 3
  const totalText = document.querySelector('#total-value span');
  totalText.innerText = total;
  return total;
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
