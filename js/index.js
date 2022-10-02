// ITERATION 1

function updateSubtotal(product) {
  //Getting the values from the interface
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;

  //Calculation of subtotal
  let subtotal = price * quantity;

  //Holding sub total on dom element
  product.querySelector('.subtotal span').innerText = subtotal;

  //Returning subtotal
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

  //All product rows
  let products = document.getElementsByClassName('product');
  let sum = 0;
  let totalText = document.getElementById('total-value').lastChild;

  for (let i = 0; i < products.length; i++) {
    sum += updateSubtotal(products[i]);
  }
  console.log(sum);
  // ITERATION 3
  //... your code goes here

  totalText.innerText = sum;
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
