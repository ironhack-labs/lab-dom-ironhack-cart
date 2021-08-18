// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  //Step 1
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  //Step 2
  const priceValue = price.innerText;
  const quantityValue = quantity.value;

  //Step 3
  const subtotalPrice = priceValue * quantityValue;

  //Step 4
  let subtotal = product.querySelector('.subtotal span');

  //Step 5
  subtotal.innerText = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let total = 0;

  const products = document.getElementsByClassName('product');
  const productsArr = Array.from(products);

  productsArr.forEach(function (product) {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  const totalValue = document.getElementById('total-value');
  totalValue.innerText = `Total: ${total} $`;
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
