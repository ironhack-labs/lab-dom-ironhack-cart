// ITERATION 1

function updateSubtotal(product) {
  // Getting DOM Elements:
  const priceElement = product.querySelector('.price span')
  const qtyElement = product.querySelector('.quantity input')
  // Getting Value:
  const valuePrice = priceElement.innerHTML
  const valueQuantity = qtyElement.value
  // Calculating the subtotal Price:
  const subtotal = valuePrice * valueQuantity
  // Gettin the element that holds subtotal price:
  const subtotalElement = product.querySelector('.subtotal span')
  subtotalElement.innerHTML = subtotal
  return subtotal
  //... your code goes here
}

function calculateAll() {

  let totalPrice = 0

  const totalProducts = document.querySelectorAll('.product');

  for(let i = 0; i < totalProducts.length; i++) {
    totalPrice += updateSubtotal(totalProducts[i])
  }

  //ITERATION 3
  const totalGeral = document.querySelector('#total-value span')
  totalGeral.innerHTML = totalPrice
  return totalGeral
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