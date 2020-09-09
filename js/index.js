// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText

  const quantity = product.querySelector('.quantity input').value

  const calcSubTotal = price * quantity

  const holdSubTotal = product.querySelector('.subtotal span')

  holdSubTotal.innerHTML = calcSubTotal

  return calcSubTotal
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  
  // ITERATION 2

  const allProducts = document.querySelectorAll('.product');
  let calcTotal = 0

  allProducts.forEach(item => calcTotal += updateSubtotal(item))

  //... your code goes here

  // ITERATION 3

  document.querySelector('#total-value span').innerText = calcTotal  
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentNode.parentNode.remove()
  calculateAll()



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
