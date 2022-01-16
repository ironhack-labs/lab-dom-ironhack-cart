// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const priceT = price.textContent
  const quantityT = quantity.value
  const subtotal = priceT * quantityT
  const subtotalT = product.querySelector('.subtotal span')
  subtotalT.innerHTML = subtotal
  return subtotal
}

// ITERATION 2
  //... your code goes here
function calculateAll(product) {
  let var1 = document.querySelectorAll('.product')
  var1.forEach(eachNumber => {updateSubtotal(eachNumber)})
  // ITERATION 3
  let var2 = 0
  var1.forEach(eachNumber => {var2 += updateSubtotal(eachNumber)})
  const var3 = document.querySelector('#total-value span')
  var3.innerHTML = var2

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
