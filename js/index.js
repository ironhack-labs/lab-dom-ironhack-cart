// ITERATION 1
function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const quantity = product.querySelector('.quantity input').value
  const price = product.querySelector('.price span').textContent
  
  let priceSubtotal = quantity * price
  console.log(priceSubtotal)

  const subtotal = product.querySelector('.subtotal span')
  const subtotalText = document.createTextNode(priceSubtotal).textContent
  subtotal.textContent = subtotalText
}

function calculateAll() {
  // ITERATION 2
  const allProductos = document.querySelectorAll('.product');
  console.log(allProductos)

  let totalPrice = 0

  allProductos.forEach(prd => {
    updateSubtotal(prd)
    totalPrice += Number(prd.querySelector('.subtotal span').textContent)
  })

  // ITERATION 3  
  const totalText = document.createTextNode(totalPrice).textContent
  const calcTotal = document.querySelector('#total-value span')
  calcTotal.textContent = totalText
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
