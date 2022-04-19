// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  //calculate the subtotal:
  let subtotal = price.innerHTML * quantity.value;
  //Print the subtotal in the following HTML element:
  product.querySelector('.subtotal span').innerHTML = subtotal;
  console.log(subtotal);
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  //Going into my HTML and taking my class .product:
  const products = document.getElementsByClassName('product');
  let sum = 0;
  // Create a new array (copy from productsArray):
  const productsArray = [...products];
  //I have to acess the array:
  for (let i = 0; i < productsArray.length; i++) {
    updateSubtotal(productsArray[i]);
    sum += updateSubtotal(productsArray[i]);
  }
  document.querySelector('#total-value span').innerHTML = sum;
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

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
