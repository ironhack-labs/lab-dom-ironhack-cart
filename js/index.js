// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const quantity = product.querySelector('.quantity input').value

  const price = product.querySelector('.price span').innerHTML;

  const updateSubtotal = product.querySelector('.subtotal span')

  updateSubtotal.innerHTML = price * quantity;

  console.log(updateSubtotal.innerHTML)

  //... your code goes here
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const cart = document.getElementById('cart');
  
  const productOne = cart.querySelectorAll('.product')[0]

  const productTwo = cart.querySelectorAll('.product')[1]

  const pOneQuantity = productOne.querySelector('.quantity input').value;
  const pTwoQuantity = productTwo.querySelector('.quantity input').value

  const pOnePrice = productOne.querySelector('.price span').innerHTML;
  const pTwoPrice = productTwo.querySelector('.price span').innerHTML
  
  const updateSubtotalOne = productOne.querySelector('.subtotal span');
  const updateSubtotalTwo = productTwo.querySelector('.subtotal span');

  updateSubtotalOne.innerHTML = pOnePrice * pOneQuantity;
  updateSubtotalTwo.innerHTML = pTwoPrice * pTwoQuantity;

  //... your code goes here

  // ITERATION 3

  const total = document.getElementById('total-value');

  let totalPrice = total.querySelector('span');

  // let totalSum = parseInt(updateSubtotalOne.innerHTML) + parseInt(updateSubtotalTwo.innerHTML);

  totalPrice.innerHTML = (pOnePrice * pOneQuantity) + (pTwoPrice * pTwoQuantity) 

  console.log(totalPrice.innerHTML)
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
