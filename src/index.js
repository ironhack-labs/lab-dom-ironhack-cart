// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const $price = product.querySelector('.price span');
  const $quantity = product.querySelector('.quantity input')

  const price = $price.textContent // "$25.00"
  const qty = $quantity.value //

  const subtotalPrice = price*qty

  const $subtotal = product.querySelector('.subtotal span')
  $subtotal.innerHTML = subtotalPrice


  $subtotal.setAttribute('span', subtotalPrice)

  return subtotalPrice
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let total = 0
  const allProducts = document.querySelectorAll('.product')
  allProducts.forEach(product => {
      const subtotal = updateSubtotal(product)
      total += subtotal
  })
  // ITERATION 3
  //... your code goes here
  const totalEl = document.querySelector('#total-value span')
  totalEl.innerHTML = total
  return total
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
