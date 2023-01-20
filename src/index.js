// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  
  let subtotal = price * quantity

  product.querySelector('.subtotal span').innerHTML = `${subtotal}`
  console.log('Calculating subtotal, yey!');
}


  // ITERATION 2 & 3
  //... your code goes here
function calculateAll() {
  let totalPrice = 0
  let products = document.getElementsByClassName('product')
  let allProducts = [...products]
  allProducts.forEach(product => {
   updateSubtotal(product)
  totalPrice += Number(product.querySelector('.subtotal span').innerHTML)
  })

  document.querySelector('h2 span').innerHTML = `${totalPrice}`
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
