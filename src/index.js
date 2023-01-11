// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('quantity input').value
  const total = price * quantity
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = total
  return subtotal.innerHTML
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalPrice = 0
  let products = document.getElementsByClassName('product')

  products.forEach(element => {
    totalPrice += updateSubtotal(element)
  });
  // ITERATION 3
  //... your code goes here
  const totalValue = document.getElementById('total-value')
  totalValue.innerHTML = totalPrice
  return totalValue
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
