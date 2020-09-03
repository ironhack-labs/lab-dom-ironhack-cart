// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')
  const result = price * quantity
  subtotal.innerHTML = result
  return result
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = Array.from(document.getElementsByClassName('product'))
  //products.forEach(product => updateSubtotal(product))
  //products.array.forEach(product => updateSubtotal(product))
  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span')
  const totalPrice = products.reduce((acc, product) => acc + updateSubtotal(product), 0)
  total.innerHTML = totalPrice

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
