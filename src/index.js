// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input').value
  let subtotalDOM = product.querySelector('.subtotal span')
  subtotalDOM.innerText = price.innerText*quantity
  return subtotalDOM
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at a later point, it can be removed.
  // end of the test
  
  // ITERATION 2
  //...
  const products = document.querySelectorAll('.product')
  products.forEach(product => updateSubtotal(product));
  // ITERATION 3
  //...
  const total = document.querySelector('#total-value span')
  const subtotals = document.querySelectorAll('.subtotal span')
  let totalSum = 0
  subtotals.forEach(subtotal => totalSum += +subtotal.innerHTML)
  total.innerText = totalSum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  // let child = document.querySelectorAll('.product');
  // child.innerHTML = ""
  let body = document.querySelector('.father');
  const child = target.parentNode.parentNode
  body.removeChild(child)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(btn => btn.addEventListener('click', removeProduct))
  //... your code goes here
});
