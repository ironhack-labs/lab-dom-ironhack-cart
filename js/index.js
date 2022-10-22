
// ITERATION 1

// STEP 0

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')

  //... your code goes here

  // STEP 1

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  // STEP 2

  let currentPrice = price.innerText
  let currentQuantity = quantity.value

  // STEP 3

  let currentSubtotal = currentPrice * currentQuantity
  // STEP 4

  const subtotal = product.querySelector('.subtotal span')

  // STEP 5

  subtotal.innerText = currentSubtotal

  return currentSubtotal


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let sum = 0

  const products = document.querySelectorAll('.product')
  for (let i = 0; i < products.length; i++) {
    sum += updateSubtotal(products[i])
  }

  // ITERATION 3
  //... your code goes here
  let generateTotal = document.querySelector('#total-value span')


  generateTotal.innerText = sum
  return sum


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here


  const removeProduct = event => {
    const button = event.target
    const productRow = button.parentNode.parentNode;
    const tableBody = productRow.parentNode;

    tableBody.removeChild(productRow);

    calculateAll()

  };

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
