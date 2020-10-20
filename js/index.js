// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const subTotal = product.querySelector('.subtotal span')
  let totalValue = parseInt(price.innerHTML) * parseInt(quantity.value)
  subTotal.innerHTML = totalValue
  return totalValue
}

function calculateAll() {
  let allProducts = document.querySelectorAll('#cart tr.product')
  let endTotal = 0

  for (let i = 0; i < allProducts.length; i++) {
    endTotal += updateSubtotal(allProducts[i])
  }
  const displayTotal = document.querySelector('#total-value span')
  return displayTotal.innerHTML = endTotal
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