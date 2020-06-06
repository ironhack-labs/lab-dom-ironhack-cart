// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input')

  const valuePrice = parseFloat(price)

  const valueQuantity = quantity.valueAsNumber

  const valueSubtotal = valuePrice*valueQuantity

  const subtotal = product.querySelector('.subtotal span')
  
  subtotal.innerText = valueSubtotal

  // window.addEventListener('load', () => {
  //   const calculatePricesBtn = document.getElementById('calculate');
  //   calculatePricesBtn.addEventListener('click', calculateAll);
  // });
  //... your code goes here

  return valueSubtotal
}

function calculateAll() {
  
  const products = document.querySelectorAll('.product') 
  
  let valueTotal = 0

  products.forEach(function (elm) {
      valueTotal += updateSubtotal(elm)})
 
  const total = document.querySelector('#total-value')

  total.innerText = valueTotal

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
