// ITERATION 1

function updateSubtotal(product) {
  // Get set variable for price selector, quantity selector and sub total price.
  let price = product.querySelector('.price span').innerText;

  let quantity = product.querySelector('.quantity > input').value;

  let subtotalPrice = price * quantity;
  //  Pack result into the HTML section for Subtotal 
  product.querySelector('.subtotal span').innerText = subtotalPrice;
  // Testlog all the different variables
  // console.log(` the product price for ${product.name} is ${price}`);
  // console.log(` the quantity of ${product.name} is ${quantity}`);
  // console.log(` the subtotal price of ${product.name} is ${subtotalPrice}`);
  // Return the result of the subtotal calculation
  return subtotalPrice;

  }


function calculateAll(products) {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const allProducts = document.querySelectorAll('#cart > tbody > tr');
  let total = 0;

  for (product of allProducts) {
    total += updateSubtotal(product)
  }
  document.querySelector('#total-value > span').innerText = total;
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
  
}

const removeButtons = document.querySelectorAll('.btn-remove');
  for (button of removeButtons) {
    button.addEventListener('click', removeProduct);
  }

// ITERATION 5

function createProduct() {
  const createInput = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input').value;
  const createUnitPrice = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input').value;
  const; 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);