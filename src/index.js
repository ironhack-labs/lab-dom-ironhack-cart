// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculate price clicked')
  // GET DOM elements
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  // Extract values
  const priceValue = parseFloat(price.innerText)
  const quantityValue = quantity.valueAsNumber
  // Calculate subtotal
  const subtotalValue = priceValue * quantityValue
  // GET DOM element
  const subTotal = product.querySelector('.subtotal span')
  // Set to corresponding DOM element
  subTotal.innerText = subtotalValue
  // Return subtotal
  return subtotalValue
}

function calculateAll() {
  // Get DOM nodes for each product
  const products = document.getElementsByClassName('product')
  // Sum of each product subtotal
  let totalValue = 0
  // Go through the product nodes & sum subtotals to total value
  // for (let i = 0; i < products.length; i++) { 
  for (let product of products) {
    totalValue += updateSubtotal(product)
  }
  // Update total value
  document.querySelector('#total-value span').innerHTML = totalValue;
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
