// ITERATION 1
const products = [...document.querySelectorAll('.product')]


function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subTotal = product.querySelector('.subtotal span')

  const subTotalValue = (price.innerText * quantity.value).toFixed(2)

  subTotal.innerText = subTotalValue  
  return subTotalValue
}

// ITERATION 2

function calculateAll() {
  let sumTotal = 0 
  const total = document.querySelector('#total-value span')

  products.forEach((product) => {
    sumTotal += parseFloat(updateSubtotal(product), 10)
  })

  total.innerText = sumTotal.toFixed(2)
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
